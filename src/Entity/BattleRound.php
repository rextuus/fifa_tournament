<?php

namespace App\Entity;

use App\Repository\BattleRoundRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BattleRoundRepository::class)]
class BattleRound
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'battleRound', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Tournament $tournament = null;

    /**
     * @var Collection<int, Participant>
     */
    #[ORM\ManyToMany(targetEntity: Participant::class, inversedBy: 'battleRounds')]
    private Collection $participants;

    /**
     * @var Collection<int, Player>
     */
    #[ORM\ManyToMany(targetEntity: Player::class, inversedBy: 'battleRounds')]
    private Collection $players;

    /**
     * @var array<int>
     */
    #[ORM\Column(type: Types::JSON, options: ['default' => '[]'])]
    private array $fixtureOrder = [];

    public function __construct()
    {
        $this->participants = new ArrayCollection();
        $this->players = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTournament(): ?Tournament
    {
        return $this->tournament;
    }

    public function setTournament(Tournament $tournament): static
    {
        $this->tournament = $tournament;

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

    public function getFixtureOrder(): array
    {
        return $this->fixtureOrder;
    }

    public function setFixtureOrder(array $fixtureOrder): static
    {
        $this->fixtureOrder = $fixtureOrder;

        return $this;
    }
}
