<?php

namespace App\Twig\Components;

use App\Entity\Participant;
use App\Entity\Team;
use App\Entity\Tournament;
use App\Repository\TeamListRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class TeamListing
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public Participant $participant;

    #[LiveProp(writable: true)]
    public Tournament $tournament;

    /**
     * @var array<Team>
     */
    private array $teams;

    public function __construct(private TeamListRepository $teamListRepository)
    {
    }

    public function getTeams(): array
    {
        $teamList = $this->teamListRepository->findOneBy(
            ['participant' => $this->participant, 'tournament' => $this->tournament],
        );

        if (!$teamList) {
            return [];
        }

        return $teamList->getTeams()->toArray();
    }

    public function getTeamListId(): int
    {
        $teamList = $this->teamListRepository->findOneBy(
            ['participant' => $this->participant, 'tournament' => $this->tournament],
        );

        if (!$teamList) {
            return 0;
        }

        return $teamList->getId();
    }
}
