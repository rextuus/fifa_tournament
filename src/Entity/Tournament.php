<?php

namespace App\Entity;

use App\Content\Tournament\TournamentLevel;
use App\Repository\TournamentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use \App\Content\Tournament\TournamentState;
use Exception;
use \App\Content\Tournament\TournamentType;

#[ORM\Entity(repositoryClass: TournamentRepository::class)]
class Tournament
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $ident = null;

    #[ORM\Column(type: 'integer', enumType: TournamentLevel::class)]
    private TournamentLevel $level;

    /**
     * @var Collection<int, Round>
     */
    #[ORM\OneToMany(targetEntity: Round::class, mappedBy: 'tournament', orphanRemoval: true)]
    private Collection $rounds;

    /**
     * @var Collection<int, Participant>
     */
    #[ORM\ManyToMany(targetEntity: Participant::class, inversedBy: 'tournaments')]
    private Collection $participants;

    /**
     * @var Collection<int, TeamList>
     */
    #[ORM\OneToMany(targetEntity: TeamList::class, mappedBy: 'tournament', orphanRemoval: true)]
    private Collection $teamLists;

    #[ORM\Column(type: 'integer', nullable: false, options: ['default' => 0])]
    private int $numberOfChoices = 0;

    #[ORM\Column(type: 'string', enumType: TournamentState::class, options: ['default' => TournamentState::OPEN])]
    private TournamentState $state = TournamentState::OPEN;

    #[ORM\Column(type: 'boolean', nullable: false, options: ['default' => false])]
    private bool $isTwoLeg = false;

    #[ORM\Column(nullable: false, enumType: TournamentType::class, options: ['default' => TournamentType::CLASSIC])]
    private TournamentType $type = TournamentType::CLASSIC;

    #[ORM\OneToOne(mappedBy: 'tournament', cascade: ['persist', 'remove'])]
    private ?BattleRound $battleRound = null;

    public function __construct()
    {
        $this->rounds = new ArrayCollection();
        $this->participants = new ArrayCollection();
        $this->teamLists = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdent(): ?string
    {
        return $this->ident;
    }

    public function setIdent(string $ident): static
    {
        $this->ident = $ident;

        return $this;
    }

    public function getLevel(): TournamentLevel
    {
        return $this->level;
    }

    public function setLevel(TournamentLevel $level): static
    {
        $this->level = $level;

        return $this;
    }

    /**
     * @return Collection<int, Round>
     */
    public function getRounds(): Collection
    {
        return $this->rounds;
    }

    public function addRound(Round $round): static
    {
        if (!$this->rounds->contains($round)) {
            $this->rounds->add($round);
            $round->setTournament($this);
        }

        return $this;
    }

    public function removeRound(Round $round): static
    {
        if ($this->rounds->removeElement($round)) {
            // set the owning side to null (unless already changed)
            if ($round->getTournament() === $this) {
                $round->setTournament(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Participant>
     */
    public function getParticipants(): Collection
    {
        return $this->participants;
    }

    public function addParticipant(Participant $participant): static
    {
        if (!$this->participants->contains($participant)) {
            $this->participants->add($participant);
        }

        return $this;
    }

    public function removeParticipant(Participant $participant): static
    {
        $this->participants->removeElement($participant);

        return $this;
    }

    /**
     * @return Collection<int, TeamList>
     */
    public function getTeamLists(): Collection
    {
        return $this->teamLists;
    }

    public function addTeamList(TeamList $teamList): static
    {
        if (!$this->teamLists->contains($teamList)) {
            $this->teamLists->add($teamList);
            $teamList->setTournament($this);
        }

        return $this;
    }

    public function removeTeamList(TeamList $teamList): static
    {
        if ($this->teamLists->removeElement($teamList)) {
            // set the owning side to null (unless already changed)
            if ($teamList->getTournament() === $this) {
                $teamList->setTournament(null);
            }
        }

        return $this;
    }


    public function getNumberOfChoices(): ?int
    {
        return $this->numberOfChoices;
    }

    public function setNumberOfChoices(int $numberOfChoices): static
    {
        $this->numberOfChoices = $numberOfChoices;

        return $this;
    }

    public function getState(): TournamentState
    {
        return $this->state;
    }

    public function setState(TournamentState $state): static
    {
        $this->state = $state;

        return $this;
    }

    /**
     * @throws Exception
     */
    public function getRoundByNumber(int $roundNumber): Round
    {
        $round = $this->getRounds()->filter(fn(Round $round) => $round->getNr() === $roundNumber)->first();
        if (!$round) {
            throw new Exception('Round not found: ' . $roundNumber);
        }
        return $round;
    }

    public function isTwoLeg(): bool
    {
        return $this->isTwoLeg;
    }

    public function setIsTwoLeg(bool $isTwoLeg): static
    {
        $this->isTwoLeg = $isTwoLeg;

        return $this;
    }

    public function getType(): TournamentType
    {
        return $this->type;
    }

    public function setType(TournamentType $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getEditRoute(): string
    {
        match ($this->getType()) {
            TournamentType::CLASSIC => $editRoute =  'tournament_manage',
            TournamentType::GROUP_BATTLE => $editRoute =  'tournament_manage_group_battle'
        };

        return $editRoute;
    }

    public function getBattleRound(): ?BattleRound
    {
        return $this->battleRound;
    }

    public function setBattleRound(BattleRound $battleRound): static
    {
        // set the owning side of the relation if necessary
        if ($battleRound->getTournament() !== $this) {
            $battleRound->setTournament($this);
        }

        $this->battleRound = $battleRound;

        return $this;
    }
}
