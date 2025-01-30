<?php

declare(strict_types=1);

namespace App\Content\Tournament\Calculation;

use App\Entity\Participant;
use App\Entity\Player;
use Symfony\Component\DependencyInjection\Attribute\Exclude;

#[Exclude]
class BattleRoundTable
{
    public const KEY_PLAYER = 'player';
    private const KEY_POINTS = 'points';
    private const KEY_MATCHES = 'matches';
    private const KEY_WINS = 'wins';
    private const KEY_DRAWS = 'draws';
    private const KEY_LOOSES = 'looses';
    private const KEY_TEAM_GOALS = 'team_goals';
    private const KEY_PERSONAL_GOALS = 'personal_goals';
    private const KEY_AGAINST_GOALS = 'against_goals';
    public array $map = [];

    public function addPlayer(Player|Participant $player): void
    {
        if (!array_key_exists($player->getId(), $this->map)) {
            $this->map[$player->getId()] = [
                self::KEY_PLAYER => $player,
                self::KEY_POINTS => 0,
                self::KEY_MATCHES => 0,
                self::KEY_TEAM_GOALS => 0,
                self::KEY_PERSONAL_GOALS => 0,
                self::KEY_AGAINST_GOALS => 0,
                self::KEY_WINS => 0,
                self::KEY_DRAWS => 0,
                self::KEY_LOOSES => 0,
            ];
        }
    }

    public function addWin(Player|Participant $player): void
    {
        $this->map[$player->getId()][self::KEY_POINTS] = $this->map[$player->getId()][self::KEY_POINTS] + 3;
        $this->map[$player->getId()][self::KEY_WINS]++;
        $this->map[$player->getId()][self::KEY_MATCHES]++;
    }

    public function addDraw(Player|Participant $player): void
    {
        $this->map[$player->getId()][self::KEY_POINTS] = $this->map[$player->getId()][self::KEY_POINTS] + 1;
        $this->map[$player->getId()][self::KEY_DRAWS]++;
        $this->map[$player->getId()][self::KEY_MATCHES]++;
    }

    public function addLoose(Player|Participant $player): void
    {
        $this->map[$player->getId()][self::KEY_LOOSES]++;
        $this->map[$player->getId()][self::KEY_MATCHES]++;
    }

    public function addPersonalGoals(Player|Participant $player, int $goals): void
    {
        $this->map[$player->getId()][self::KEY_PERSONAL_GOALS] = $this->map[$player->getId(
            )][self::KEY_PERSONAL_GOALS] + $goals;
    }

    public function addTeamGoals(Player|Participant $player, int $goals): void
    {
        $this->map[$player->getId()][self::KEY_TEAM_GOALS] = $this->map[$player->getId(
            )][self::KEY_TEAM_GOALS] + $goals;
    }

    public function addAgainstGoal(Player|Participant $player, int $goals): void
    {
        $this->map[$player->getId()][self::KEY_AGAINST_GOALS] = $this->map[$player->getId(
            )][self::KEY_AGAINST_GOALS] + $goals;
    }

    /**
     * @return array<int, Player|Participant|int>
     */
    public function getOrderedBy(TableFilter $filter): array
    {
        $primaryKey = match ($filter) {
            TableFilter::POINTS => self::KEY_POINTS,
            TableFilter::PLAYED => self::KEY_MATCHES,
            TableFilter::WIN => self::KEY_WINS,
            TableFilter::LOSE => self::KEY_LOOSES,
            TableFilter::DRAW => self::KEY_DRAWS,
            TableFilter::PERSONAL_GOALS => self::KEY_PERSONAL_GOALS,
            TableFilter::AGAINST_GOALS => self::KEY_AGAINST_GOALS,
            default => throw new \InvalidArgumentException('Invalid filter key provided.'),
        };

        $secondaryKey = match ($filter) {
            TableFilter::POINTS => self::KEY_PERSONAL_GOALS,
            TableFilter::PLAYED, TableFilter::DRAW => self::KEY_WINS,
            TableFilter::WIN => self::KEY_DRAWS,
            TableFilter::LOSE, TableFilter::AGAINST_GOALS => self::KEY_LOOSES,
            TableFilter::PERSONAL_GOALS => self::KEY_TEAM_GOALS,
            default => throw new \InvalidArgumentException('Invalid filter key provided.'),
        };

        // Copy the array into a new one for sorting
        $ordered = array_values($this->map);

        // Apply sorting based on both primary and secondary keys
        usort($ordered, function ($a, $b) use ($primaryKey, $secondaryKey) {
            // Sort by primary key (descending)
            $primaryComparison = $b[$primaryKey] <=> $a[$primaryKey];

            // If primary values are equal, sort by secondary key (descending)
            if ($primaryComparison === 0) {
                return $b[$secondaryKey] <=> $a[$secondaryKey];
            }

            return $primaryComparison;
        });

        return $ordered; // Return the newly ordered array
    }

    /**
     * @return array<int, Player|Participant>
     */
    public function getOrderedPlayersBy(TableFilter $filter): array
    {
        return array_map(
            function ($item) {
                return $item[self::KEY_PLAYER];
            },
            $this->getOrderedBy($filter)
        );
    }

    public function mergeWith(BattleRoundTable $otherBattleRoundTable): BattleRoundTable
    {
        $combinedTable = new BattleRoundTable();

        // Merge all players from the current table
        foreach ($this->map as $playerId => $data) {
            $combinedTable->map[$playerId] = $data;
        }

        // Merge all players from the other table
        foreach ($otherBattleRoundTable->map as $playerId => $data) {
            if (isset($combinedTable->map[$playerId])) {
                // Merge stats for players already in the table
                $combinedTable->map[$playerId][self::KEY_POINTS] += $data[self::KEY_POINTS];
                $combinedTable->map[$playerId][self::KEY_MATCHES] += $data[self::KEY_MATCHES];
                $combinedTable->map[$playerId][self::KEY_WINS] += $data[self::KEY_WINS];
                $combinedTable->map[$playerId][self::KEY_DRAWS] += $data[self::KEY_DRAWS];
                $combinedTable->map[$playerId][self::KEY_LOOSES] += $data[self::KEY_LOOSES];
                $combinedTable->map[$playerId][self::KEY_TEAM_GOALS] += $data[self::KEY_TEAM_GOALS];
                $combinedTable->map[$playerId][self::KEY_PERSONAL_GOALS] += $data[self::KEY_PERSONAL_GOALS];
                $combinedTable->map[$playerId][self::KEY_AGAINST_GOALS] += $data[self::KEY_AGAINST_GOALS];
            } else {
                // Add unique players from the other table
                $combinedTable->map[$playerId] = $data;
            }
        }

        return $combinedTable;
    }
}