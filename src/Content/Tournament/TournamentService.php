<?php

declare(strict_types=1);

namespace App\Content\Tournament;

use App\Content\Participant\ParticipantService;
use App\Content\Team\TeamService;
use App\Content\Tournament\Calculation\BattleRoundCalculationService;
use App\Content\Tournament\Calculation\BattleRoundTable;
use App\Content\Tournament\Calculation\FixtureMap;
use App\Content\Tournament\Calculation\TournamentCalculationService;
use App\Entity\BattleRound;
use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Player;
use App\Entity\Result;
use App\Entity\Round;
use App\Entity\TeamList;
use App\Entity\Tournament;
use Doctrine\ORM\EntityManagerInterface;

class TournamentService
{
    public function __construct(
        private readonly TournamentCalculationService $tournamentCalculationService,
        private readonly EntityManagerInterface $entityManager,
        private readonly ParticipantService $participantService,
        private readonly BattleRoundCalculationService $battleRoundCalculationService,
        private readonly TeamService $teamService,
    ) {
    }

    public function calculateTeamAmountPerParticipant(Tournament $tournament): int
    {
        return $this->tournamentCalculationService->calculateNumberOfFixturesPerParticipant($tournament);
    }

    /**
     * @param array<Participant> $participants
     */
    public function calculateFinalRoundForBattleRoundTournament(Tournament $tournament, array $participants): void
    {
        $this->battleRoundCalculationService->calculateFinalRound($tournament, $participants);
    }

    public function calculateRoundsForTournament(Tournament $tournament): void
    {
        if ($tournament->getType() === TournamentType::GROUP_BATTLE){
            $this->battleRoundCalculationService->calculateGroupRound($tournament);

            return;
        }

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
        if ($tournament->getType() === TournamentType::GROUP_BATTLE){
            if ($tournament->getBattleRound()->getParticipants()->count() < 2){
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
        if ($tournament->getType() === TournamentType::GROUP_BATTLE){
            $teamListForTournament = $participant->getTeamLists()->filter(
                fn(TeamList $teamList) => $teamList->getTournament() === $tournament
            )->first();

            if ($teamListForTournament === false) {
                return false;
            }

            return $teamListForTournament->getTeams()->count() === 1;
        }


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

    public function addAndRemovePlayersToBattleRound(BattleRound $battleRound): void
    {
        $tournament = $battleRound->getTournament();
        foreach ($battleRound->getParticipants() as $participant) {
            $battleRound->removeParticipant($participant);
            $tournament->removeParticipant($participant);
        }

        $participants = $this->participantService->checkBattleRoundParticipantsExist($battleRound);
        foreach ($participants as $participant) {
            $this->entityManager->persist($participant);
            $battleRound->addParticipant($participant);
            $tournament->addParticipant($participant);
        }

        $this->entityManager->persist($tournament);
        $this->entityManager->flush();
    }

    public function addPlayerToBattleRound(Player $newPlayer, BattleRound $battleRound): void
    {
        $existingPlayers = $battleRound->getPlayers()->toArray();
        $existingParticipants = $battleRound->getParticipants()->toArray();
        $tournament = $battleRound->getTournament();

        // get the new participants and add them
        $newParticipants = $this->participantService->checkParticipantsForPlayer($newPlayer, $existingPlayers);

        foreach ($newParticipants as $participant) {
            $this->entityManager->persist($participant);
            $battleRound->addParticipant($participant);
            $tournament->addParticipant($participant);
        }
dump($existingParticipants);
dump($newParticipants);
        // create new fixture between existing participants and the new ones
        $round = $tournament->getRoundByNumber(1);
        $fixtureNr = $round->getFixtures()->count() + 1;
        foreach ($existingParticipants as $existingParticipant) {
            foreach ($newParticipants as $newParticipant) {
                // check if a player is in both participants
                $wouldPlayAgainstHimself = false;
                foreach ($existingParticipant->getPlayers() as $existingPlayer) {
                    foreach ($newParticipant->getPlayers() as $newPlayer) {
                        if ($existingPlayer->getId() === $newPlayer->getId()) {
                            $wouldPlayAgainstHimself = true;
                        }
                    }
                }
                if ($wouldPlayAgainstHimself) {
                    continue;
                }

                $fixture = new Fixture();
                $fixture->setHomeParticipant($existingParticipant);
                $fixture->setAwayParticipant($newParticipant);
                $fixture->setIdent('Gruppenphase - '.$fixtureNr);
                $fixture->setPlayed(null);
                $fixture->setRound($round);

                $fallbackTeam = $this->teamService->getFallbackTeam();
                $fixture->setHomeTeam($fallbackTeam);
                $fixture->setAwayTeam($fallbackTeam);

                $this->entityManager->persist($fixture);
                $round->addFixture($fixture);
                $fixtureNr++;
            }
        }

        $this->entityManager->persist($tournament);
        $this->entityManager->flush();

        $fixtures = $tournament->getRoundByNumber(1)->getFixtures()->toArray();
        shuffle($fixtures);

        $shuffledIds = array_map(
            fn(Fixture $fixture) => $fixture->getId(),
            $fixtures
        );

        $battleRound->setFixtureOrder($shuffledIds);
        $this->entityManager->persist($battleRound);
        $this->entityManager->flush();
    }

    public function calculateBattleRoundTable(Tournament $tournament, int $roundNr): BattleRoundTable
    {
        $fixtures = $tournament->getRoundByNumber($roundNr)->getFixtures()->toArray();

        $table = new BattleRoundTable();
        foreach ($tournament->getParticipants() as $participant) {
            foreach ($participant->getPlayers() as $player) {
                $table->addPlayer($player);
            }
        }

        foreach ($fixtures as $fixture) {
            if ($fixture->getPlayed() === null){
                continue;
            }

            $homePlayers = $fixture->getHomeParticipant()->getPlayers()->toArray();
            $awayPlayers = $fixture->getAwayParticipant()->getPlayers()->toArray();
            $allPlayers = array_merge($homePlayers, $awayPlayers);

            $result = $fixture->getFirstLeg();
            $resultType = $this->calculateFinalResultForFixture($fixture);

            // resultTypes
            if ($resultType === ResultType::HOME) {
                foreach ($homePlayers as $homePlayer) {
                    $table->addWin($homePlayer);
                }
                foreach ($awayPlayers as $awayPlayer) {
                    $table->addLoose($awayPlayer);
                }
            }

            if ($resultType === ResultType::AWAY) {
                foreach ($homePlayers as $homePlayer) {
                    $table->addLoose($homePlayer);
                }
                foreach ($awayPlayers as $awayPlayer) {
                    $table->addWin($awayPlayer);
                }
            }

            if ($resultType === ResultType::DRAW) {
                foreach ($homePlayers as $homePlayer) {
                    $table->addDraw($homePlayer);
                }
                foreach ($awayPlayers as $awayPlayer) {
                    $table->addDraw($awayPlayer);
                }
            }

            // individual goals
            foreach ($result->getPlayerGoals() as $playerId => $goals) {
                $foundPlayers = array_filter($allPlayers, function ($player) use ($playerId) {
                    return $player->getId() === $playerId;
                });
                $player = $foundPlayers[array_key_first($foundPlayers)];
                $table->addPersonalGoals($player, $goals);
            }

            // teamGoals
            foreach ($homePlayers as $homePlayer) {
                $table->addTeamGoals($homePlayer, $result->getHomeGoals());
                $table->addAgainstGoal($homePlayer, $result->getAwayGoals());
            }
            foreach ($awayPlayers as $awayPlayer) {
                $table->addTeamGoals($awayPlayer, $result->getAwayGoals());
                $table->addAgainstGoal($awayPlayer, $result->getHomeGoals());
            }
        }

        return $table;
    }

    public function calculateBattleRoundTableByParticipants(Tournament $tournament, int $roundNr): BattleRoundTable
    {
        $round = $tournament->getRoundByNumber($roundNr);
        $fixtures = $round->getFixtures()->toArray();

        $table = new BattleRoundTable();
        foreach ($fixtures as $fixture) {
            $table->addPlayer($fixture->getHomeParticipant());
            $table->addPlayer($fixture->getAwayParticipant());
        }

        foreach ($fixtures as $fixture) {
            if ($fixture->getPlayed() === null){
                continue;
            }

            $homeParticipant = $fixture->getHomeParticipant();
            $awayParticipant = $fixture->getAwayParticipant();

            $result = $fixture->getFirstLeg();
            $resultType = $this->calculateFinalResultForFixture($fixture);

            // resultTypes
            if ($resultType === ResultType::HOME) {
                $table->addWin($homeParticipant);
                $table->addLoose($awayParticipant);
            }

            if ($resultType === ResultType::AWAY) {
                $table->addLoose($homeParticipant);
                $table->addWin($awayParticipant);
            }

            if ($resultType === ResultType::DRAW) {
                $table->addDraw($homeParticipant);
                $table->addDraw($awayParticipant);
            }

            // teamGoals
            $table->addTeamGoals($homeParticipant, $result->getHomeGoals());
            $table->addAgainstGoal($homeParticipant, $result->getAwayGoals());

            $table->addTeamGoals($awayParticipant, $result->getAwayGoals());
            $table->addAgainstGoal($awayParticipant, $result->getHomeGoals());
        }

        return $table;
    }

    private function calculateFinalResultForFixture(Fixture $fixture): ResultType
    {
        if ($fixture->getPlayed() === null){
            throw new \Exception('Fixture has not been played yet');
        }

        $result = $fixture->getFirstLeg();
        $resultTypeLegOne = $result->calculateType();
        $resultType = $resultTypeLegOne;

        // check if multiple legs
        if ($fixture->isTwoLeg()) {
            $resultLegTwo = $fixture->getSecondLeg();
            $resultTypeLegTwo = $resultLegTwo->calculateType();

            // check if only 2 were needed
            $resultLegThree = $fixture->getThirdLeg();
            if ($resultLegThree === null) {
                // home variants [1,X] | [X,1]
                if ($resultTypeLegOne === ResultType::DRAW && $resultTypeLegTwo === ResultType::HOME) {
                    $resultType = ResultType::HOME;
                }
                if ($resultTypeLegOne === ResultType::HOME && $resultTypeLegTwo === ResultType::DRAW) {
                    $resultType = ResultType::HOME;
                }
                // away variants [2,X] | [X,2]
                if ($resultTypeLegOne === ResultType::DRAW && $resultTypeLegTwo === ResultType::AWAY) {
                    $resultType = ResultType::AWAY;
                }
                if ($resultTypeLegOne === ResultType::AWAY && $resultTypeLegTwo === ResultType::DRAW) {
                    $resultType = ResultType::AWAY;
                }
            }

            // if 3 were needed only this counts
            if ($resultLegThree !== null) {
                $resultTypeLegThree = $resultLegThree->calculateType();

                $resultType = $resultTypeLegThree;
            }
        }

        return $resultType;
    }
}
