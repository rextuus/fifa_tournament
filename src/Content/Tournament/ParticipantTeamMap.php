<?php

declare(strict_types=1);

namespace App\Content\Tournament;


use App\Entity\Participant;
use App\Entity\Team;
use App\Entity\TeamList;
use App\Entity\Tournament;
use Exception;

class ParticipantTeamMap
{
    private const KEY_TEAM = 'team';

    private const KEY_PLACED = 'placed';

    /**
     * @var array<int, array<int, array<string, int|bool>>>
     */
    private array $map = [];

    /**
     * @var array<int, TeamList>
     */
    private array $teamsLists = [];

    public function initFromTeamlist(Tournament $tournament): ParticipantTeamMap
    {
        foreach ($tournament->getParticipants() as $participant) {
            $teamList = $participant->getTeamLists()->filter(
                fn(TeamList $teamList) => $teamList->getTournament() === $tournament
            )->first();

            $this->teamsLists[$participant->getId()] = $teamList;

            foreach ($teamList->getTeams() as $team) {
                $this->addTeamToParticipant($participant, $team);
            }
        }

        return $this;
    }

    public function addTeamToParticipant(Participant $participant, Team $team): void
    {
        if (!array_key_exists($participant->getId(), $this->map)) {
            $this->map[$participant->getId()] = [];
        }

        $this->map[$participant->getId()][] = [self::KEY_TEAM => $team->getId(), self::KEY_PLACED => false];
    }

    /**
     * @throws Exception
     */
    public function getRandomTeamForParticipant(?Participant $participant): ?Team
    {
        if ($participant === null) {
            return null;
        }

        // check if participant has more than one free team
        $freeTeams = array_filter($this->map[$participant->getId()], fn($team) => $team[self::KEY_PLACED] === false);

        if (count($freeTeams) === 0) {
            throw new Exception('No free teams for participant');
        }

        $teamId = null;
        while ($teamId === null) {
            $randomTeamIndex = rand(0, count($this->map[$participant->getId()]) - 1);
            if ($this->map[$participant->getId()][$randomTeamIndex][self::KEY_PLACED] === false) {
                $teamId = $this->map[$participant->getId()][$randomTeamIndex][self::KEY_TEAM];
                $this->map[$participant->getId()][$randomTeamIndex][self::KEY_PLACED] = true;
            }
        }

        $teams =  array_filter(
            $this->teamsLists[$participant->getId()]->getTeams()->toArray(),
            fn(Team $team) => $team->getId() === $teamId
        );

        return $teams[array_key_first($teams)];
    }
}
