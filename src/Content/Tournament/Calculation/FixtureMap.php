<?php

declare(strict_types=1);

namespace App\Content\Tournament\Calculation;

class FixtureMap
{
    /**
     * @param PotentialFixture[] $map
     */
    public function __construct(private array $map)
    {
    }

    public function getFixtureOccurrenceStatistic(): array
    {
        $statistic = [];
        foreach ($this->map as $fixture) {
            $values = [$fixture->getHome(), $fixture->getAway()];
            rsort($values);

            $key = sprintf('%s-%s', $values[0], $values[1]);
            if ((!array_key_exists($key, $statistic))) {
                $statistic[$key] = 0;
            }
            $statistic[$key]++;
        }

        return $statistic;
    }

    public function countDoubles(): int
    {
        $doubles = 0;

        foreach ($this->getFixtureOccurrenceStatistic() as $key => $statistic) {
            if ($statistic > 1 && $key !== '-') {
                $doubles = $doubles + ($statistic - 1);
            }
        }

        return $doubles;
    }

    public function checkDoubleOccurrenceIsHigherThan(int $maxAllowed): bool
    {
        foreach ($this->getFixtureOccurrenceStatistic() as $key => $statistic) {
            if ($statistic - 1 > $maxAllowed && $key !== '-') {
                return true ;
            }
        }

        return false;
    }

    public function checkEveryParticipantHasSameNumberOfGames(): bool
    {
        $gamesByParticipant = [];
        foreach ($this->map as $potentialFixture) {
            $homeParticipant = $potentialFixture->getHome();
            $awayParticipant = $potentialFixture->getAway();
            if (!array_key_exists($homeParticipant, $gamesByParticipant)) {
                $gamesByParticipant[$homeParticipant] = [];
            }
            if (!array_key_exists($awayParticipant, $gamesByParticipant)) {
                $gamesByParticipant[$awayParticipant] = [];
            }
            $gamesByParticipant[$homeParticipant][] = $potentialFixture;
            $gamesByParticipant[$awayParticipant][] = $potentialFixture;
        }

        return true;
    }

    /**
     * @return array<PotentialFixture>
     */
    public function getPotentialFixtures(): array
    {
        return $this->map;
    }
}
