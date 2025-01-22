<?php

namespace App\Controller;

use App\Content\File\Enum\ImageType;
use App\Content\File\Form\Data\EditProfileImageData;
use App\Content\File\Form\EditProfileImageType;
use App\Content\File\ImageService;
use App\Content\Team\TeamService;
use App\Entity\Participant;
use App\Entity\Team;
use App\Repository\ParticipantRepository;
use App\Repository\PlayerRepository;
use App\Repository\TeamRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/match')]
final class FixtureController extends AbstractController
{
    public function __construct(
        private TeamRepository $teamRepository,
        private ParticipantRepository $participantRepository,
        private readonly PlayerRepository $playerRepository,
        private readonly TeamService $teamImageProcessor,
        private ImageService $imageService,
    ) {
    }

    #[Route('/detail/{id}', name: 'match_detail')]
    public function detail($id): Response
    {
        //        dd($this->teamImageProcessor->processImagesForTeams());

        $teamCount = $this->teamRepository->count();
        $randomIndex = random_int(0, $teamCount - 1);
        $randomIndex2 = random_int(0, $teamCount - 1);

        $homeTeam = $this->teamRepository->find($randomIndex);
        $awayTeam = $this->teamRepository->find($randomIndex2);

        $participant1 = $this->participantRepository->find(1);
        $participant2 = $this->participantRepository->find(2);

        $player1 = $this->playerRepository->find(1);

        //        dd($this->teamRepository->find($randomIndex));
        //        dd($this->footballApiGateway->start());
        // Dummy data for participants
        $match = [
            'id' => $id,
            'title' => 'Round 1 - Game 32',
            'date' => '2023-11-01',
            'participants' => [
                [
                    'ident' => $participant1->getIdent(),
                    'participantImage' => $this->imageService->resolveUrl($participant1->getImageFile(), ImageService::SIZE_LARGE),
                    'team' => [
                        'name' => $homeTeam->getName(),
                        'logo' => $this->imageService->resolveUrl($homeTeam->getImageFile(), ImageService::SIZE_LARGE),
                    ],
                    'players' => [
                        ['name' => $player1->getIdent(), 'image' => $this->imageService->resolveUrl($player1->getImageFile(), ImageService::SIZE_LARGE)],
                        ['name' => 'Jane Smith', 'image' => 'https://randomuser.me/api/portraits/women/1.jpg'],
                        ['name' => 'Jane Smith', 'image' => 'https://randomuser.me/api/portraits/women/1.jpg'],
                        ['name' => 'Jane Smith', 'image' => 'https://randomuser.me/api/portraits/women/1.jpg'],
                    ],
                ],
                [
                    'ident' => $participant2->getIdent(),
                    'participantImage' => $participant2->getImageFile() ? $this->imageService->resolveUrl($participant2->getImageFile(), ImageService::SIZE_MEDIUM) : 'https://randomuser.me/api/portraits/women/2.jpg',
                    'team' => [
                        'name' => $awayTeam->getName(),
                        'logo' => $this->imageService->resolveUrl($awayTeam->getImageFile(), ImageService::SIZE_LARGE),
                    ],
                    'players' => [
                        ['name' => 'Alice Brown', 'image' => 'https://randomuser.me/api/portraits/women/2.jpg'],
                    ],
                ],
            ],
        ];

        return $this->render('match/detail.html.twig', [
            'homeTeam' => $this->teamRepository->find($randomIndex),
            'awayTeam' => $this->teamRepository->find($randomIndex2),
            'homeTeamImage' => $this->imageService->resolveUrl($homeTeam->getImageFile(), ImageService::SIZE_MEDIUM),
            'awayTeamImage' => $this->imageService->resolveUrl($awayTeam->getImageFile(), ImageService::SIZE_MEDIUM),
            'match' => $match,
        ]);
    }
}
