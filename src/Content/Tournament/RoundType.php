<?php

namespace App\Content\Tournament;

enum RoundType: string
{
    case BATTLE_ROUND = 'battle_round';
    case GROUP_ROUND = 'group_round';
    case ROUND_OF_128 = 'round_of_128';
    case ROUND_OF_64 = 'round_of_64';
    case ROUND_OF_32 = 'round_of_32';
    case ROUND_OF_16 = 'round_of_16';
    case QUARTER_FINAL = 'quarter_final';
    case SEMI_FINAL = 'semi_final';
    case FINAL = 'final';

    public static function getFirstRoundTypeByTournamentLevel(TournamentLevel $tournamentLevel): RoundType
    {
        match ($tournamentLevel) {
            TournamentLevel::ROUND_OF_128 => $type = self::ROUND_OF_128,
            TournamentLevel::ROUND_OF_64 => $type = self::ROUND_OF_64,
            TournamentLevel::ROUND_OF_32 => $type = self::ROUND_OF_32,
            TournamentLevel::ROUND_OF_16 => $type = self::ROUND_OF_16,
            TournamentLevel::QUARTER_FINAL => $type = self::QUARTER_FINAL,
            TournamentLevel::SEMI_FINAL => $type = self::SEMI_FINAL,
            TournamentLevel::FINAL => $type = self::FINAL,
        };

        return $type;
    }

    public function getNumberOfFixturesByRound(): int
    {
        return match ($this) {
            self::ROUND_OF_128 => TournamentLevel::ROUND_OF_128->value / 2,
            self::ROUND_OF_64 => TournamentLevel::ROUND_OF_64->value / 2,
            self::ROUND_OF_32 => TournamentLevel::ROUND_OF_32->value / 2,
            self::ROUND_OF_16 => TournamentLevel::ROUND_OF_16->value / 2,
            self::QUARTER_FINAL => TournamentLevel::QUARTER_FINAL->value / 2,
            self::SEMI_FINAL => TournamentLevel::SEMI_FINAL->value / 2,
            self::FINAL => TournamentLevel::FINAL->value / 2,
            self::GROUP_ROUND => throw new \Exception('To be implemented'),
        };
    }

    public function getNextRoundType(): ?RoundType
    {
        return match ($this) {
            self::ROUND_OF_128 => self::ROUND_OF_64,
            self::ROUND_OF_64 => self::ROUND_OF_32,
            self::ROUND_OF_32 => self::ROUND_OF_16,
            self::ROUND_OF_16 => self::QUARTER_FINAL,
            self::QUARTER_FINAL => self::SEMI_FINAL,
            self::SEMI_FINAL => self::FINAL,
            self::FINAL => null,
            self::GROUP_ROUND => throw new \Exception('To be implemented'),
        };
    }

    public function getRoundDescription(): string
    {
        return match ($this) {
            self::ROUND_OF_128 => 'Runde der besten 128',
            self::ROUND_OF_64 => 'Runder der besten 64',
            self::ROUND_OF_32 => 'Sechzehntelfinale',
            self::ROUND_OF_16 => 'Achtelfinale',
            self::QUARTER_FINAL => 'Viertelfinale',
            self::SEMI_FINAL => 'Halbfinale',
            self::FINAL => 'Finale',
            self::GROUP_ROUND => throw new \Exception('To be implemented'),
        };
    }
}
