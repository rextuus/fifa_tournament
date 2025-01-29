<?php

namespace App\Entity;

use App\Content\File\DefaultImageType;
use App\Content\File\ImageAwareInterface;
use App\Entity\Base\GoalHymnAwareInterface;
use App\Entity\Base\GoalHymnAwareTrait;
use App\Entity\Base\ImageFileAwareTrait;
use App\Repository\ParticipantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ParticipantRepository::class)]
class Participant implements ImageAwareInterface, GoalHymnAwareInterface
{
    use ImageFileAwareTrait;
    use GoalHymnAwareTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $ident = null;

    /**
     * @var Collection<int, Player>
     */
    #[ORM\ManyToMany(targetEntity: Player::class, inversedBy: 'participants')]
    private Collection $players;

    /**
     * @var Collection<int, Tournament>
     */
    #[ORM\ManyToMany(targetEntity: Tournament::class, mappedBy: 'participants')]
    private Collection $tournaments;

    /**
     * @var Collection<int, Fixture>
     */
    #[ORM\OneToMany(targetEntity: Fixture::class, mappedBy: 'homeParticipant')]
    private Collection $fixtures;

    /**
     * @var Collection<int, TeamList>
     */
    #[ORM\OneToMany(targetEntity: TeamList::class, mappedBy: 'participant', orphanRemoval: true)]
    private Collection $teamLists;

    /**
     * @var Collection<int, BattleRound>
     */
    #[ORM\ManyToMany(targetEntity: BattleRound::class, mappedBy: 'participants')]
    private Collection $battleRounds;

    public function __construct()
    {
        $this->players = new ArrayCollection();
        $this->tournaments = new ArrayCollection();
        $this->fixtures = new ArrayCollection();
        $this->teamLists = new ArrayCollection();
        $this->battleRounds = new ArrayCollection();
    }

    public function setId(?int $id): Participant
    {
        $this->id = $id;
        return $this;
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

    /**
     * @return Collection<int, Player>
     */
    public function getPlayers(): Collection
    {
        return $this->players;
    }

    public function addPlayer(Player $player): static
    {
        if (!$this->players->contains($player)) {
            $this->players->add($player);
        }

        return $this;
    }

    public function removePlayer(Player $player): static
    {
        $this->players->removeElement($player);

        return $this;
    }

    public function setPlayers(array $players): Participant
    {
        $this->players = new ArrayCollection($players);
        return $this;
    }

    /**
     * @return Collection<int, Tournament>
     */
    public function getTournaments(): Collection
    {
        return $this->tournaments;
    }

    public function addTournament(Tournament $tournament): static
    {
        if (!$this->tournaments->contains($tournament)) {
            $this->tournaments->add($tournament);
            $tournament->addParticipant($this);
        }

        return $this;
    }

    public function removeTournament(Tournament $tournament): static
    {
        if ($this->tournaments->removeElement($tournament)) {
            $tournament->removeParticipant($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Fixture>
     */
    public function getFixtures(): Collection
    {
        return $this->fixtures;
    }

    public function addFixture(Fixture $fixture): static
    {
        if (!$this->fixtures->contains($fixture)) {
            $this->fixtures->add($fixture);
            $fixture->setHomeParticipant($this);
        }

        return $this;
    }

    public function removeFixture(Fixture $fixture): static
    {
        if ($this->fixtures->removeElement($fixture)) {
            // set the owning side to null (unless already changed)
            if ($fixture->getHomeParticipant() === $this) {
                $fixture->setHomeParticipant(null);
            }
        }

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
            $teamList->setParticipant($this);
        }

        return $this;
    }

    public function removeTeamList(TeamList $teamList): static
    {
        if ($this->teamLists->removeElement($teamList)) {
            // set the owning side to null (unless already changed)
            if ($teamList->getParticipant() === $this) {
                $teamList->setParticipant(null);
            }
        }

        return $this;
    }

    public function getDefaultImageType(): DefaultImageType
    {
        return DefaultImageType::USER_PROFILE;
    }

    /**
     * @return Collection<int, BattleRound>
     */
    public function getBattleRounds(): Collection
    {
        return $this->battleRounds;
    }

    public function addBattleRound(BattleRound $battleRound): static
    {
        if (!$this->battleRounds->contains($battleRound)) {
            $this->battleRounds->add($battleRound);
            $battleRound->addParticipant($this);
        }

        return $this;
    }

    public function removeBattleRound(BattleRound $battleRound): static
    {
        if ($this->battleRounds->removeElement($battleRound)) {
            $battleRound->removeParticipant($this);
        }

        return $this;
    }
}
