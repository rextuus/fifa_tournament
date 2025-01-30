<?php

declare(strict_types=1);

namespace App\Content\Fixture;

use App\Content\Participant\ParticipantService;
use App\Content\Tournament\Calculation\TableFilter;
use App\Content\Tournament\TournamentService;
use App\Content\Tournament\TournamentType;
use App\Entity\Fixture;
use App\Entity\Tournament;

class FixtureService
{
    public function __construct(private readonly TournamentService $tournamentService, private readonly ParticipantService $participantService)
    {
    }

    public function getScoringMap(Fixture $fixture): ScoringMap
    {
        $players = array_merge(
            $fixture->getHomeParticipant()->getPlayers()->toArray(),
            $fixture->getAwayParticipant()->getPlayers()->toArray()
        );

        return new ScoringMap($players, $fixture->getScorers());
    }

    public function checkTournamentRoundIsCompleted(Fixture $fixture): void
    {
        $round = $fixture->getRound();
        foreach ($round->getFixtures() as $fixture) {
            if ($fixture->getPlayed() === null) {
                return;
            }
        }

        $tournament = $round->getTournament();

        if ($tournament->getType() === TournamentType::GROUP_BATTLE) {
            $this->handleLastMatchFinishedForBattleRoundTournament($tournament);
        }
    }

    private function handleLastMatchFinishedForBattleRoundTournament(Tournament $tournament): void
    {
        if ($tournament->getRounds()->count() === 2) {
            return;
        }

        $table = $this->tournamentService->calculateBattleRoundTable($tournament, 1);
        $finalResult = $table->getOrderedPlayersBy(TableFilter::POINTS);

        $singleParticipant = null;
        if (count($finalResult) % 2 === 1){
            // remove last player from result
            $lastPlayer = array_pop($finalResult);

            $singleParticipant = $this->participantService->findOrCreateParticipant([$lastPlayer]);
        }

        // grep always first and last player from result unitl array is empty
        $participants = [];
        while (!empty($finalResult)) {
            $firstPlayer = array_shift($finalResult);
            $lastPlayer = array_pop($finalResult);
            $participants[] = $this->participantService->findOrCreateParticipant([$firstPlayer, $lastPlayer]);
        }

        if ($singleParticipant !== null) {
            $participants[] = $singleParticipant;
        }

        $this->tournamentService->calculateFinalRoundForBattleRoundTournament($tournament, $participants);
    }
}
