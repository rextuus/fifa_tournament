<?php

declare(strict_types=1);

namespace App\Content\Tournament;

enum TournamentLevel: int
{
    case ROUND_OF_128 = 128;
    case ROUND_OF_64 = 64;
    case ROUND_OF_32 = 32;
    case ROUND_OF_16 = 16;
    case QUARTER_FINAL = 8;
    case SEMI_FINAL = 4;
    case FINAL = 2;

    public function getNumberOfRounds(): int
    {
        return (int) log($this->value, 2);
    }

    public function getNumberOfParticipantPlaces(): int
    {
        return $this->value;
    }
}
