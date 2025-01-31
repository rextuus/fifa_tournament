<?php

namespace App\Entity\Base;

use Doctrine\ORM\Mapping as ORM;

trait GoalHymnAwareTrait
{
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $goalHymnSpotifyId = null;

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $goalHymnStartTime = 0;

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    private int $goalHymnEndTime = 0;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private bool $forceGoalHymn = false;

    public function getGoalHymnSpotifyId(): ?string
    {
        return $this->goalHymnSpotifyId;
    }

    public function setGoalHymnSpotifyId(?string $goalHymnSpotifyId): void
    {
        $this->goalHymnSpotifyId = $goalHymnSpotifyId;
    }

    public function getGoalHymnStartTime(): ?int
    {
        return $this->goalHymnStartTime;
    }

    public function setGoalHymnStartTime(int $goalHymnStartTime): static
    {
        $this->goalHymnStartTime = $goalHymnStartTime;

        return $this;
    }

    public function getGoalHymnEndTime(): ?int
    {
        return $this->goalHymnEndTime;
    }

    public function setGoalHymnEndTime(int $goalHymnEndTime): static
    {
        $this->goalHymnEndTime = $goalHymnEndTime;

        return $this;
    }

    public function isForceGoalHymn(): bool
    {
        return $this->forceGoalHymn;
    }

    public function setForceGoalHymn(bool $forceGoalHymn): static
    {
        $this->forceGoalHymn = $forceGoalHymn;
        return $this;
    }
}