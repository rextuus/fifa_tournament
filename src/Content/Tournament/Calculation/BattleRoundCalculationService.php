<?php

declare(strict_types=1);

namespace App\Content\Tournament\Calculation;

use App\Content\Team\TeamService;
use App\Content\Tournament\RoundType;
use App\Content\Tournament\TournamentState;
use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Player;
use App\Entity\Round;
use App\Entity\TeamList;
use App\Entity\Tournament;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class BattleRoundCalculationService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly TeamService $teamService
    ) {
    }

    public function calculateGroupRound(Tournament $tournament): void
    {
        $round = $this->createRoundForTournament($tournament, 1);

        // create a fixture for each participant combination
        $battleRound = $tournament->getBattleRound();
        $participants = $battleRound->getParticipants()->toArray();

        $this->createFixturesForRound($participants, $tournament, $round);

        $tournament->addRound($round);
        $tournament->setState(TournamentState::ACTIVE);
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

    /**
     * @param array<Participant> $participants
     */
    public function calculateFinalRound(Tournament $tournament, array $participants): void
    {
        $round = $this->createRoundForTournament($tournament, 2);

        $this->createFixturesForRound($participants, $tournament, $round, true);

        $tournament->addRound($round);
        $this->entityManager->persist($tournament);
        $this->entityManager->flush();
    }

    /**
     * @param array<Participant> $participants
     */
    private function createFixturesForRound(
        array $participants,
        Tournament $tournament,
        Round $round,
        bool $fixtureShouldBeHaveTwoLegs = false
    ): void {

        $fixtures = [];
        $counter = 1;
        foreach ($participants as $index => $participant) {
            foreach ($participants as $index2 => $participant2) {
                if ($index <= $index2) {
                    continue;
                }

                // Check if both participants share any players
                $mapFunction = function (Player $player) {
                    return $player->getId();
                };

                $sharedPlayers = array_intersect(
                    array_map($mapFunction, $participant->getPlayers()->toArray()),
                    array_map($mapFunction, $participant2->getPlayers()->toArray())
                );

                if (!empty($sharedPlayers)) {
                    continue;
                }

                $fixture = new Fixture();
                $fixture->setIsTwoLeg($fixtureShouldBeHaveTwoLegs);

                $fixture->setHomeParticipant($participant);
                $fixture->setAwayParticipant($participant2);
                $roundName = 'Gruppenphase';
                if ($fixtureShouldBeHaveTwoLegs){
                    $roundName = 'Finalrunde';
                }
                $fixture->setIdent(
                    sprintf('%s - %s', $roundName, $counter)
                );

                $teamListForTournament = $participant->getTeamLists()->filter(
                    fn(TeamList $teamList) => $teamList->getTournament() === $tournament
                )->first();

                if ($teamListForTournament === false){
                    $teamList = new TeamList();
                    $teamList->setTournament($tournament);
                    $teamList->setParticipant($participant);
                    $teamList->addTeam($this->teamService->getFallbackTeam());

                    $teamListForTournament  = $teamList;
                }

                $fixture->setHomeTeam($teamListForTournament->getTeams()->first());

                $teamListForTournament = $participant2->getTeamLists()->filter(
                    fn(TeamList $teamList) => $teamList->getTournament() === $tournament
                )->first();

                if ($teamListForTournament === false){
                    $teamList = new TeamList();
                    $teamList->setTournament($tournament);
                    $teamList->setParticipant($participant);
                    $teamList->addTeam($this->teamService->getFallbackTeam());

                    $teamListForTournament  = $teamList;
                }

                $fixture->setAwayTeam($teamListForTournament->getTeams()->first());

                $this->entityManager->persist($fixture);
                $fixture->setRound($round);
                $round->addFixture($fixture);
                $fixtures[] = $fixture;
                $counter++;
            }
        }

        $this->entityManager->persist($round);
        $round->setNumberOfFixtures(count($fixtures));
        $this->entityManager->flush();
    }

    private function createRoundForTournament(Tournament $tournament, int $roundNr): Round
    {
        try {
            $round = $tournament->getRoundByNumber($roundNr);
        } catch (Exception $e) {
            $round = null;
        }

        if ($round !== null){
            return $round;
        }

        $round = new Round();
        $round->setNr($roundNr);
        $round->setRoundType(RoundType::BATTLE_ROUND);
        $round->setProcessed(false);
        $round->setTournament($tournament);
        $round->setNumberOfFixtures(0);
        $this->entityManager->persist($round);
        $this->entityManager->flush();

        return $round;
    }
}
