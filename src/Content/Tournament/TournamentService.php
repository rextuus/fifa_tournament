<?php

declare(strict_types=1);

namespace App\Content\Tournament;

use App\Content\Tournament\Calculation\FixtureMap;
use App\Content\Tournament\Calculation\TournamentCalculationService;
use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Round;
use App\Entity\TeamList;
use App\Entity\Tournament;
use App\Repository\FixtureRepository;
use Doctrine\ORM\EntityManagerInterface;

class TournamentService
{
    public function __construct(
        private readonly TournamentCalculationService $tournamentCalculationService,
        private readonly EntityManagerInterface $entityManager,
    ) {
    }

    public function calculateTeamAmountPerParticipant(Tournament $tournament): int
    {
        return $this->tournamentCalculationService->calculateNumberOfFixturesPerParticipant($tournament);
    }

    public function calculateRoundsForTournament(Tournament $tournament): void
    {
        $participants = $tournament->getParticipants()->toArray();
        $firstRoundFixtureCalculation = $this->tournamentCalculationService->calculate($tournament);

        // calculate first round
        $this->calculateFirstRound($tournament, $firstRoundFixtureCalculation, $participants);

        $currentRoundType = RoundType::getFirstRoundTypeByTournamentLevel($tournament->getLevel());
        $numberOfRoundsToCreate = $tournament->getLevel()->getNumberOfRounds() - 1;
        for ($roundNr = 0; $roundNr < $numberOfRoundsToCreate; $roundNr++) {
            $currentRoundType = $currentRoundType->getNextRoundType();

            $round = new Round();
            $round->setNr($roundNr + 2);
            $round->setRoundType($currentRoundType);
            $round->setProcessed(false);
            $round->setNumberOfFixtures($currentRoundType->getNumberOfFixturesByRound());

            $this->entityManager->persist($round);
            for ($fixtureNr = 0; $fixtureNr < $currentRoundType->getNumberOfFixturesByRound(); $fixtureNr++) {
                $fixture = new Fixture();

                $fixture->setHomeParticipant(null);
                $fixture->setAwayParticipant(null);
                $fixture->setIdent(
                    sprintf(
                        '%s - Spiel %s',
                        $currentRoundType->getRoundDescription(),
                        $fixtureNr + 1
                    )
                );

                $round->addFixture($fixture);

                $this->entityManager->persist($fixture);
            }

            $tournament->addRound($round);
        }

        $tournament->setState(TournamentState::ACTIVE);
        $this->entityManager->persist($tournament);
        $this->entityManager->flush();
    }


    /**
     * @param array<Participant> $participants
     */
    private function calculateFirstRound(
        Tournament $tournament,
        FixtureMap $fixtureMap,
        array $participants
    ): void {
        $map = (new ParticipantTeamMap())->initFromTeamlist($tournament);

        $firstRound = new Round();
        $firstRoundType = RoundType::getFirstRoundTypeByTournamentLevel($tournament->getLevel());

        $firstRound->setNr(1);
        $firstRound->setRoundType($firstRoundType);
        $firstRound->setProcessed(false);
        $firstRound->setNumberOfFixtures($firstRoundType->getNumberOfFixturesByRound());
        $this->entityManager->persist($firstRound);
        foreach ($fixtureMap->getPotentialFixtures() as $index => $potentialFixture) {
            $fixture = new Fixture();

            $homeParticipant = $this->getParticipantBySortingKey($participants, $potentialFixture->getHome());
            $awayParticipant = $this->getParticipantBySortingKey($participants, $potentialFixture->getAway());

            $fixture->setHomeParticipant($homeParticipant);
            $fixture->setAwayParticipant($awayParticipant);

            $fixture->setHomeTeam($map->getRandomTeamForParticipant($homeParticipant));
            $fixture->setAwayTeam($map->getRandomTeamForParticipant($awayParticipant));

            $fixture->setIdent(
                sprintf(
                    '%s - Spiel %s',
                    $firstRoundType->getRoundDescription(),
                    $index + 1
                )
            );
            $this->entityManager->persist($fixture);

            $firstRound->addFixture($fixture);
        }
        $tournament->addRound($firstRound);
    }

    /**
     * @param array<Participant> $participants
     */
    private function getParticipantBySortingKey(array $participants, ?int $key): ?Participant
    {
        if ($key === null) {
            return null;
        }

        if (array_key_exists($key, $participants)) {
            return $participants[$key];
        }

        return null;
    }

    public function isValid(Tournament $tournament): bool
    {
        if ($tournament->getParticipants()->count() >= $tournament->getLevel()->value) {
            return false;
        }

        $faultyParticipants = [];
        foreach ($tournament->getParticipants() as $participant) {
            if (!$this->participantIsValid($tournament, $participant)) {
                $faultyParticipants[] = $participant;
            }
        }

        return count($faultyParticipants) === 0;
    }

    public function participantIsValid(Tournament $tournament, Participant $participant): bool
    {
        $maximumAmount = $this->calculateTeamAmountPerParticipant($tournament);
        $teamListForTournament = $participant->getTeamLists()->filter(
            fn(TeamList $teamList) => $teamList->getTournament() === $tournament
        )->first();

        if ($teamListForTournament === false) {
            return false;
        }
//        dd($teamListForTournament->getTeams()->count() === $maximumAmount);
        return $teamListForTournament->getTeams()->count() === $maximumAmount;
    }


    /**
     * @param array<Fixture> $fixtures
     * @return array<array<Fixture|string>>
     */
    public function generateTournamentMatrix(int $rounds, array $fixtures): array
    {
        // Total rows and columns in the matrix
        $totalRows = pow(2, $rounds) - 1; // Total number of rows in the binary tree
        $totalColumns = $rounds;          // Number of rounds/columns

        // Initialize matrix with "X"
        $matrix = [];
        for ($i = 0; $i < $totalRows; $i++) {
            $matrix[$i] = array_fill(0, $totalColumns, "X");
        }

        // Counter for game IDs
        $gameCounter = 1;

        // Iterate over each round to place games
        for ($round = 0; $round < $rounds; $round++) {
            // Number of games in this round
            $gamesInRound = pow(2, $rounds - $round - 1);
            // Row spacing (distance between consecutive games in this round)
            $rowDistance = pow(2, $round + 1); // This ensures alignment
            // Start position (integer-based for first game)
            $startRow = floor($rowDistance / 2) - 1;

            // Place games in the matrix
            for ($game = 0; $game < $gamesInRound; $game++) {
                // Calculate row for the current game's placement
                $row = $startRow + $game * $rowDistance;
                // Place the game ID
                $matrix[$row][$round] = $fixtures[$gameCounter-1];

                // Increment game counter
                $gameCounter++;
            }
        }

        return $matrix;
    }
}
