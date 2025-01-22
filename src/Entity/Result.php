<?php

namespace App\Entity;

use App\Repository\ResultRepository;
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
}
