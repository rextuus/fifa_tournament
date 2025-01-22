<?php

declare(strict_types=1);

namespace App\Content\Tournament\Calculation;

use App\Content\Tournament\TournamentLevel;
use App\Entity\Participant;
use App\Entity\Tournament;

class TournamentCalculationService
{
    /**
     * @var array<int>
     */
    private array $playerFixtureCounts;

    /**
     * @var array<PotentialFixture>
     */
    private array $fixturesMap;

    private int $usedDoubles;

    private function calculateMatchCombinations($participants): float
    {
        $n = count($participants);

        return ($n * ($n - 1)) / 2; // nC2 formula
    }

    public function calculateNumberOfFixturesPerParticipant(Tournament $tournament): int
    {
        $participants = $tournament->getParticipants()->toArray();
        $totalParticipants = $tournament->getLevel()->value;

            return (int)floor($totalParticipants / count($participants));
    }

    public function calculate(Tournament $tournament): FixtureMap
    {
        $participants = $tournament->getParticipants()->toArray();
        if (count($participants) < 2) {
            throw new \InvalidArgumentException('Not enough participants to create fixtures.');
        }

        if (count($participants) > $tournament->getLevel()->value * 2) {
            throw new \InvalidArgumentException('Not enough participants to create fixtures.');
        }

        $totalParticipants = $tournament->getLevel()->value;

        $numberOfFixturesToCreate = $this->getFixtureAmountForRound($totalParticipants, 1);

        $numberOfFixturesPerParticipant = (int)floor($totalParticipants / count($participants));
        $rest = $totalParticipants - (count($participants) * $numberOfFixturesPerParticipant);
        $uniqueCombinations = $this->calculateMatchCombinations($participants);
        $maxAllowedDoubleNumberForASingleFixture = (int)($numberOfFixturesToCreate / $uniqueCombinations);
        $totalMaxDuplicates = $numberOfFixturesToCreate - $maxAllowedDoubleNumberForASingleFixture;

        // Special cases
        if (count($participants) === 2) {
            $totalMaxDuplicates = $numberOfFixturesToCreate;
        }

        // Why only for 23 necessary?
        if (count($participants) === 3 && TournamentLevel::ROUND_OF_32 === $tournament->getLevel()) {
            $maxAllowedDoubleNumberForASingleFixture--;
            $totalMaxDuplicates++;
        }

        if ($numberOfFixturesPerParticipant < 1 || $rest < 0) {
            throw new ToMuchParticipantsForLevelException(
                sprintf(
                    'To much participants (%d) for tournament level: %d',
                    count($participants),
                    $tournament->getLevel()->value
                )
            );
        }

        $infinityCounter = 0;
        $allowMoreDuplicatesCounter = 0;
        $checkIsGood = false;
        while (!$checkIsGood) {
            $this->playerFixtureCounts = array_fill(0, count($participants), 0);
            $this->fixturesMap = [];
            $this->usedDoubles = 0;
            for ($i = 0; $i < $numberOfFixturesToCreate; ++$i) {
                $this->fixturesMap[] = new PotentialFixture();
            }

            try {
                $this->getPotentialFixtureDistribution(
                    $numberOfFixturesToCreate,
                    $rest,
                    $numberOfFixturesPerParticipant,
                    $participants,
                    $maxAllowedDoubleNumberForASingleFixture
                );
            } catch (NoSolutionException $e) {
            }

            $checkIsGood = $this->checkFixtureDistribution(
                $numberOfFixturesPerParticipant,
                $maxAllowedDoubleNumberForASingleFixture,
                $totalMaxDuplicates
            );

            $allowMoreDuplicatesCounter++;

            if ($allowMoreDuplicatesCounter > 10){
                // if we cant find a good solution try to increase the amount of allowed duplicates
                $totalMaxDuplicates++;
                $allowMoreDuplicatesCounter = 0;
                $infinityCounter++;
            }

            if ($infinityCounter > 500) {
                dump('Teilnehmer ' . count($participants));
                dump('Plätze ' . $totalParticipants);
                dump('Spiele in dieser Runde ' . $numberOfFixturesToCreate);
                dump('Spiele pro Teilnehmer ' . $numberOfFixturesPerParticipant);
                dump('Übrige Plätze ' . $rest);
                dump('Mögliche Paarungen ' . $this->calculateMatchCombinations($participants));
                dump('Maximale Anzahl an Dopplungen pro Partie ' . $maxAllowedDoubleNumberForASingleFixture);
                dump('Maximal Dopplungen insgesamt ' . $totalMaxDuplicates);


                dump($this->playerFixtureCounts);
                dump($this->fixturesMap);
                $map = (new FixtureMap($this->fixturesMap));
                dump($map->countDoubles(15));
                dump($totalMaxDuplicates);
                dump($map->checkDoubleOccurrenceIsHigherThan(16));
                dd($map->getFixtureOccurrenceStatistic());
                throw new \Exception('Cant calculate a good tournament');
            }
        }

        try {
            $potentialRound = $this->randomizeFixtures($this->fixturesMap);
        } catch (NoSolutionException $e) {
            shuffle($this->fixturesMap);
            $potentialRound = $this->fixturesMap;
        }
        return (new FixtureMap($potentialRound));
    }

    private function checkFixtureDistribution(int $maxFixtureCount, int $allowedDoubles, int $maxDoubling): bool
    {
        $statistics = (new FixtureMap($this->fixturesMap));

        if ($statistics->countDoubles() > $maxDoubling) {
            return false;
        }

        if ($statistics->checkDoubleOccurrenceIsHigherThan($allowedDoubles)) {
            return false;
        }

        $participantsWithFullFixtures = 0;
        $userWithoutFullFixtures = [];
        $allUsersHaveMaxFixtures = true;
        foreach ($this->playerFixtureCounts as $player => $fixtureCount) {
            // if user has not at least
            if ($fixtureCount < $maxFixtureCount - 1) {
                return false;
            }

            if ($fixtureCount < $maxFixtureCount) {
                $allUsersHaveMaxFixtures = false;
                $userWithoutFullFixtures[] = $player;
            } else {
                ++$participantsWithFullFixtures;
            }
        }

        // if rest is odd
        if (!$allUsersHaveMaxFixtures) {
            if (1 === count($this->playerFixtureCounts) - $participantsWithFullFixtures) {
                $allUsersHaveMaxFixtures = true;

                // search next free fixture and add user without enemy
                $index = array_search(
                    true,
                    array_map(
                        function (PotentialFixture $fixture) {
                            return $fixture->isFree();
                        },
                        $this->fixturesMap
                    )
                );
                $this->fixturesMap[$index]->setHome($userWithoutFullFixtures[0]);
            }
        }

        return $allUsersHaveMaxFixtures;
    }

    /**
     * @param array<Participant> $participants
     */
    private function getPotentialFixtureDistribution(
        ?int $numberOfFixturesToCreate,
        int $rest,
        int $numberOfFixturesPerParticipant,
        array $participants,
        int $maxAllowedDoubleNumberForASingleFixture,
    ): void {
        $setFixtures = 0;
        $fixtureAlreadyExistsOccurrenceBefore = 0;
        while ($setFixtures < $numberOfFixturesToCreate - $rest / 2) {
            $participantToSearchEnemyFor = $this->getRandomParticipantWhichHasNotReachedTheMaximumNumberOfFixtures(
                $numberOfFixturesPerParticipant,
                $setFixtures
            );

            $similarityMap = $this->calculateParticipantPlayerSimilarityMap(
                $participants,
                $participants[$participantToSearchEnemyFor]
            );

            $bestFittingRemainingEnemy = null;
            foreach ($similarityMap as $candidate) {
                if (null !== $bestFittingRemainingEnemy) {
                    continue;
                }

                // check if these guys already have a big battle planned then lets try another
                $fixtureAlreadyExistsOccurrenceBefore = $this->checkFixtureAlreadyExists(
                    $participantToSearchEnemyFor,
                    $candidate
                );
                if ($fixtureAlreadyExistsOccurrenceBefore === $maxAllowedDoubleNumberForASingleFixture + 1) {
                    continue;
                }

                if ($this->playerFixtureCounts[$candidate] < $numberOfFixturesPerParticipant) {
                    $bestFittingRemainingEnemy = $candidate;
                }
            }

            if (null === $bestFittingRemainingEnemy) {
                throw new NoSolutionException('Cant find a participant with free fixture places.');
            }

            $index = array_search(
                true,
                array_map(
                    function (PotentialFixture $fixture) {
                        return $fixture->isFree();
                    },
                    $this->fixturesMap
                )
            );

            $potentialFixture = $this->fixturesMap[$index];
            $potentialFixture->setHome($participantToSearchEnemyFor);
            $potentialFixture->setAway($bestFittingRemainingEnemy);

            // save fixture
            ++$this->playerFixtureCounts[$participantToSearchEnemyFor];
            ++$this->playerFixtureCounts[$bestFittingRemainingEnemy];

            $fixtureAlreadyExistsOccurrenceAfter = $this->checkFixtureAlreadyExists(
                $participantToSearchEnemyFor,
                $bestFittingRemainingEnemy
            );
            if ($fixtureAlreadyExistsOccurrenceAfter > $fixtureAlreadyExistsOccurrenceBefore && $fixtureAlreadyExistsOccurrenceBefore > 0) {
                ++$this->usedDoubles;
            }

            ++$setFixtures;
        }
    }

    public function randomizeFixtures(array $fixtures): array
    {
        // Separate fixtures that contain `null` values
        $nullFixtures = [];
        $nonNullFixtures = [];

        foreach ($fixtures as $fixture) {
            if (null === $fixture->getHome() || null === $fixture->getAway()) {
                $nullFixtures[] = $fixture;
            } else {
                $nonNullFixtures[] = $fixture;
            }
        }

        // Shuffle non-null fixtures lightly for some randomness
        shuffle($nonNullFixtures);

        // Organize non-null fixtures to avoid clustering players
        $playerOccurrences = [];
        foreach ($nonNullFixtures as $fixture) {
            $playerOccurrences[$fixture->getHome()][] = $fixture;
            $playerOccurrences[$fixture->getAway()][] = $fixture;
        }

        $randomizedFixtures = [];
        $usedFixtures = [];

        $infiniteCounter = 0;
        // Distribute non-null fixtures evenly, avoiding consecutive occurrences of the same player
        while (count($randomizedFixtures) < count($nonNullFixtures)) {
            foreach ($nonNullFixtures as $fixture) {
                if (!in_array($fixture, $usedFixtures, true)) {
                    $lastFixture = end($randomizedFixtures);

                    // Check if the last fixture involved the same players
                    if ($lastFixture
                        && (
                            $lastFixture->getHome() === $fixture->getHome()
                            || $lastFixture->getHome() === $fixture->getAway()
                            || $lastFixture->getAway() === $fixture->getHome()
                            || $lastFixture->getAway() === $fixture->getAway()
                        )
                    ) {
                        continue; // Skip this fixture temporarily to avoid clustering
                    }

                    $randomizedFixtures[] = $fixture;
                    $usedFixtures[] = $fixture;
                }
            }

            ++$infiniteCounter;
            if ($infiniteCounter > 1000) {
                throw new NoSolutionException('Cant randomize fixtures');
            }
        }

        // Interleave null fixtures randomly into the randomized fixtures
        $finalFixtures = [];
        $nullFixturesCount = count($nullFixtures);
        $interval = ceil(count($randomizedFixtures) / ($nullFixturesCount ?: 1));

        $nullIndex = 0;
        foreach ($randomizedFixtures as $index => $fixture) {
            $finalFixtures[] = $fixture;

            // Insert a null fixture at intervals
            if ($nullFixturesCount > 0 && ($index + 1) % $interval === 0 && isset($nullFixtures[$nullIndex])) {
                $finalFixtures[] = $nullFixtures[$nullIndex++];
            }
        }

        // Append any remaining null fixtures (if there were fewer slots than null fixtures)
        while ($nullIndex < $nullFixturesCount) {
            $finalFixtures[] = $nullFixtures[$nullIndex++];
        }

        return $finalFixtures;
    }

    private function countParticipantWithFullFixtureCount(int $maxFixtureCount): int
    {
        $amount = 0;
        foreach ($this->playerFixtureCounts as $player => $fixtureCount) {
            if ($fixtureCount === $maxFixtureCount) {
                ++$amount;
            }
        }

        return $amount;
    }

    private function checkFixtureAlreadyExists(int $home, int $away): int
    {
        $occurrence = 0;
        foreach ($this->fixturesMap as $potentialFixture) {
            if (
                ($potentialFixture->getHome() === $home && $potentialFixture->getAway() === $away)
                || ($potentialFixture->getHome() === $away && $potentialFixture->getAway() === $home)
            ) {
                ++$occurrence;
            }
        }

        return $occurrence;
    }

    private function getRandomParticipantWhichHasNotReachedTheMaximumNumberOfFixtures(
        int $allowedFixtures,
        int $setFixtures,
    ): int {
        $infinityCounter = 0;

        $found = false;
        $randomParticipantNr = -1;
        while (!$found) {
            $randomParticipantNr = rand(0, count($this->playerFixtureCounts) - 1);

            if ($this->playerFixtureCounts[$randomParticipantNr] < $allowedFixtures) {
                $found = true;
            }

            ++$infinityCounter;
            if ($infinityCounter > 1000) {
                dump($setFixtures);
                dd($this->playerFixtureCounts);
                throw new \Exception('Cant find a participant with free fixture places.');
            }
        }

        return $randomParticipantNr;
    }

    /**
     * @param array<Participant> $participants
     */
    public function calculateParticipantPlayerSimilarityMap(array $participants, Participant $baseParticipant): array
    {
        // Get the list of players for the base participant
        $basePlayerIds = $baseParticipant->getPlayers()->map(
            fn($player) => $player->getId()
        )->toArray();

        // Initialize the similarity map
        $similarityMap = [];

        // Compare baseParticipant to all other participants
        foreach ($participants as $key => $participant) {
            if ($participant === $baseParticipant) {
                continue; // Skip the base participant itself
            }

            // Get the list of players for the current participant
            $participantPlayerIds = $participant->getPlayers()->map(
                fn($player) => $player->getId()
            )->toArray();

            // Calculate the similarity score (shared players count)
            $intersection = array_intersect($basePlayerIds, $participantPlayerIds);
            $similarityMap[$key] = count($intersection);
        }

        // Sort the map by similarity score in descending order
        asort($similarityMap);

        // Return the sorted list of participants (ordered by similarity) array_keys
        return array_keys($similarityMap);
    }

    public function getFixtureAmountForRound(int $totalParticipants, int $round): ?int
    {
        // Calculate the total number of rounds possible in the tournament
        $totalRounds = (int)log($totalParticipants, 2);

        // If the round exceeds the total number of rounds, return null
        if ($round > $totalRounds) {
            return null;
        }

        // Return the number of fixtures for the given round
        return $totalParticipants / (2 ** $round);
    }
}
