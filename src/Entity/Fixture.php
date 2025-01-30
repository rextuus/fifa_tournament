<?php

namespace App\Entity;

use App\Content\Tournament\Calculation\PotentialFixture;
use App\Repository\FixtureRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FixtureRepository::class)]
class Fixture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $ident = null;

    #[ORM\ManyToOne(inversedBy: 'fixtures')]
    private ?Team $homeTeam = null;

    #[ORM\ManyToOne(inversedBy: 'fixtures')]
    private ?Team $awayTeam = null;

    #[ORM\ManyToOne(inversedBy: 'fixtures')]
    private ?Participant $homeParticipant = null;

    #[ORM\ManyToOne(inversedBy: 'fixtures')]
    private ?Participant $awayParticipant = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $played = null;

    #[ORM\ManyToOne(inversedBy: 'fixtures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Round $round = null;

    #[ORM\OneToOne(inversedBy: 'fixture', cascade: ['persist', 'remove'])]
    private ?Result $firstLeg = null;

    #[ORM\OneToOne(inversedBy: 'fixture', cascade: ['persist', 'remove'])]
    private ?Result $secondLeg = null;

    #[ORM\OneToOne(inversedBy: 'fixture', cascade: ['persist', 'remove'])]
    private ?Result $thirdLeg = null;

    #[ORM\Column(type: 'boolean', nullable: false, options: ['default' => false])]
    private bool $isTwoLeg = false;

    #[ORM\Column(type: 'boolean', nullable: false, options: ['default' => false])]
    private bool $isGoalMusicRunning = false;

    #[ORM\Column(type: 'integer', nullable: false, options: ['default' => 0])]
    private int $homeGoals = 0;

    #[ORM\Column(type: 'integer', nullable: false, options: ['default' => 0])]
    private int $awayGoals = 0;

    /**
     * @var array<int>
     */
    #[ORM\Column(type: Types::JSON, options: ['default' => '[]'])]
    private array $scorers = [];

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

    public function getHomeTeam(): ?Team
    {
        return $this->homeTeam;
    }

    public function setHomeTeam(?Team $homeTeam): static
    {
        $this->homeTeam = $homeTeam;

        return $this;
    }

    public function getAwayTeam(): ?Team
    {
        return $this->awayTeam;
    }

    public function setAwayTeam(?Team $awayTeam): static
    {
        $this->awayTeam = $awayTeam;

        return $this;
    }

    public function getHomeParticipant(): ?Participant
    {
        return $this->homeParticipant;
    }

    public function setHomeParticipant(?Participant $homeParticipant): static
    {
        $this->homeParticipant = $homeParticipant;

        return $this;
    }

    public function getAwayParticipant(): ?Participant
    {
        return $this->awayParticipant;
    }

    public function setAwayParticipant(?Participant $awayParticipant): static
    {
        $this->awayParticipant = $awayParticipant;

        return $this;
    }

    public function getPlayed(): ?\DateTimeInterface
    {
        return $this->played;
    }

    public function setPlayed(?\DateTimeInterface $played): static
    {
        $this->played = $played;

        return $this;
    }

    public function getRound(): ?Round
    {
        return $this->round;
    }

    public function setRound(?Round $round): static
    {
        $this->round = $round;

        return $this;
    }

    public function __toString(): string
    {
        return $this->ident ?? '';
    }

    public function getFirstLeg(): ?Result
    {
        return $this->firstLeg;
    }

    public function setFirstLeg(?Result $firstLeg): static
    {
        $this->firstLeg = $firstLeg;

        return $this;
    }

    public function getSecondLeg(): ?Result
    {
        return $this->secondLeg;
    }

    public function setSecondLeg(?Result $secondLeg): static
    {
        $this->secondLeg = $secondLeg;

        return $this;
    }

    public function getThirdLeg(): ?Result
    {
        return $this->thirdLeg;
    }

    public function setThirdLeg(?Result $thirdLeg): Fixture
    {
        $this->thirdLeg = $thirdLeg;
        return $this;
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

    public function isGoalMusicRunning(): bool
    {
        return $this->isGoalMusicRunning;
    }

    public function setIsGoalMusicRunning(bool $isGoalMusicRunning): Fixture
    {
        $this->isGoalMusicRunning = $isGoalMusicRunning;
        return $this;
    }

    public function getHomeGoals(): int
    {
        return $this->homeGoals;
    }

    public function setHomeGoals(int $homeGoals): Fixture
    {
        $this->homeGoals = $homeGoals;
        return $this;
    }

    public function getAwayGoals(): int
    {
        return $this->awayGoals;
    }

    public function setAwayGoals(int $awayGoals): Fixture
    {
        $this->awayGoals = $awayGoals;
        return $this;
    }

    public function getScorers(): array
    {
        return $this->scorers;
    }

    public function setScorers(array $scorers): static
    {
        $this->scorers = $scorers;

        return $this;
    }

    public function addScorer(int $scorer): void
    {
        $this->scorers[] = $scorer;
    }
}
