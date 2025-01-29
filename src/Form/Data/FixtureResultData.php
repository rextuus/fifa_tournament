<?php

declare(strict_types=1);

namespace App\Form\Data;

class FixtureResultData
{
    private int $homeGoals = 0;
    private int $awayGoals = 0;

    // Add a property for player goals
    private array $playerGoals = []; // Player goals stored as an associative array

    public function getHomeGoals(): int
    {
        return $this->homeGoals;
    }

    public function setHomeGoals(int $homeGoals): self
    {
        $this->homeGoals = $homeGoals;
        return $this;
    }

    public function getAwayGoals(): int
    {
        return $this->awayGoals;
    }

    public function setAwayGoals(int $awayGoals): self
    {
        $this->awayGoals = $awayGoals;
        return $this;
    }

    public function getPlayerGoals(): array
    {
        return $this->playerGoals;
    }

    public function setPlayerGoals(array $playerGoals): self
    {
        $this->playerGoals = $playerGoals;
        return $this;
    }

    public function setPlayerGoal(int $playerId, int $goals): self
    {
        $this->playerGoals[$playerId] = $goals;
        return $this;
    }

    public function getPlayerGoal(int $playerId): ?int
    {
        return $this->playerGoals[$playerId] ?? null;
    }
}