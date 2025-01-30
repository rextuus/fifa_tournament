<?php

namespace App\Entity;

use App\Content\Tournament\ResultType;
use App\Repository\ResultRepository;
use DateTimeInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResultRepository::class)]
class Result
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $homeGoals = null;

    #[ORM\Column]
    private ?int $awayGoals = null;

    #[ORM\OneToOne(mappedBy: 'firstLeg', cascade: ['persist', 'remove'])]
    private ?Fixture $fixture = null;

    /**
     * @var array<int>
     */
    #[ORM\Column(type: Types::JSON, options: ['default' => '[]'])]
    private array $playerGoals = [];

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?DateTimeInterface $played = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHomeGoals(): ?int
    {
        return $this->homeGoals;
    }

    public function setHomeGoals(int $homeGoals): static
    {
        $this->homeGoals = $homeGoals;

        return $this;
    }

    public function getAwayGoals(): ?int
    {
        return $this->awayGoals;
    }

    public function setAwayGoals(int $awayGoals): static
    {
        $this->awayGoals = $awayGoals;

        return $this;
    }

    public function getFixture(): ?Fixture
    {
        return $this->fixture;
    }

    public function setFixture(?Fixture $fixture): static
    {
        // unset the owning side of the relation if necessary
        if ($fixture === null && $this->fixture !== null) {
            $this->fixture->setFirstLeg(null);
        }

        // set the owning side of the relation if necessary
        if ($fixture !== null && $fixture->getFirstLeg() !== $this) {
            $fixture->setFirstLeg($this);
        }

        $this->fixture = $fixture;

        return $this;
    }

    public function getPlayerGoals(): array
    {
        return $this->playerGoals;
    }

    public function setPlayerGoals(array $playerGoals): static
    {
        $this->playerGoals = $playerGoals;

        return $this;
    }

    public function calculateType(): ResultType
    {
        if ($this->homeGoals === null || $this->awayGoals === null) {
            return ResultType::DRAW;
        }

        if ($this->homeGoals > $this->awayGoals) {
            return ResultType::HOME;
        }

        if ($this->awayGoals > $this->homeGoals) {
            return ResultType::AWAY;
        }

        return ResultType::DRAW;
    }

    public function getPlayed(): ?DateTimeInterface
    {
        return $this->played;
    }

    public function setPlayed(?DateTimeInterface $played): static
    {
        $this->played = $played;

        return $this;
    }
}
