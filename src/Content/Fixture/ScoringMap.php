<?php

declare(strict_types=1);

namespace App\Content\Fixture;

use App\Entity\Participant;
use App\Entity\Player;
use Symfony\Component\DependencyInjection\Attribute\Exclude;

#[Exclude]
class ScoringMap
{
    /**
     * @var array<int, int>
     */
    private array $map = [];

    /**
     * @param array<Player> $players
     * @param array<int> $scores
     */
    public function __construct(array $players, private readonly array $scores)
    {
        foreach ($players as $participant) {
            $this->map[$participant->getId()] = 0;
        }
    }

    public function getMap(): array
    {
        foreach ($this->scores as $scoring) {
            $this->map[$scoring] = $this->map[$scoring] + 1;
        }

        return $this->map;
    }
}
