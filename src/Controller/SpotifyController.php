<?php

namespace App\Controller;

use App\Content\SettingService;
use App\Content\Spotify\NoAccessTokenFoundException;
use App\Content\Spotify\SpotifyService;
use App\Entity\Base\GoalHymnAwareInterface;
use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Player;
use App\Entity\User;
use App\Form\SelectSongPeriodType;
use App\Repository\ParticipantRepository;
use App\Repository\PlayerRepository;
use App\Twig\Helper\GoalHymnEntityWrapper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/spotify')]
final class SpotifyController extends AbstractController
{
    public function __construct(
        private readonly SpotifyService $spotifyService,
        private readonly EntityManagerInterface $entityManager,
        private readonly SettingService $settingService,
        private readonly ParticipantRepository $participantRepository,
        private readonly PlayerRepository $playerRepository,
        #[Autowire('%env(FORCED_RUNNING_TIME)%')]
        private readonly int $forcedRuntime,
    ) {
    }

    #[Route('/login', name: 'spotify_login')]
    public function login(): RedirectResponse
    {
        // Generate the Spotify login URL
        $loginUrl = $this->spotifyService->getOauthToken();

        // Redirect the user to the Spotify login page
        return new RedirectResponse($loginUrl);
    }

    #[Route('/callback', name: 'spotify_callback')]
    public function callback(Request $request): Response
    {
        $error = $request->query->get('error');
        if ($error) {
            return new Response("Error: " . $error);
        }

        $authorizationCode = $request->query->get('code');
        $state = $request->query->get('state');

        $user = $this->getUser();
        if ($authorizationCode && $state && $user && $user instanceof User) {
            // Exchange the authorization code for an access token
            $this->spotifyService->createAccessToken($authorizationCode, $user);

            return $this->redirectToRoute('dashboard');
        }

        return new Response("Authorization failed.");
    }

    #[Route('/{type}/{id}/search', name: 'spotify_search')]
    public function search(Request $request, string $type, int $id, FormFactoryInterface $formFactory): Response
    {
        $targetEntity = null;

        $participant = null;
        $player = null;
        if ($type === 'participant') {
            $participant = $this->participantRepository->find($id);
            $targetEntity = $participant;
        } elseif ($type === 'player') {
            $player = $this->playerRepository->find($id);
            $targetEntity = $player;
        }

        if (!$participant && !$player) {
            throw $this->createNotFoundException('Participant not found.');
        }

        $form = $formFactory->createBuilder()
            ->setMethod('GET') // Use GET to enable query parameter handling
            ->add('q', TextType::class, [
                'label' => false,
                'attr' => [
                    'placeholder' => 'Torhymne suchen...',
                    'class' => 'form-control mb-3',
                ],
            ])
            ->add('search', SubmitType::class, [
                'label' => 'Suchen',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
            ])
            ->getForm();

        // Handle form submission
        $form->handleRequest($request);

        $tracks = [];
        if ($form->isSubmitted() && $form->isValid()) {
            $searchTerm = $form->get('q')->getData();
            if ($searchTerm) {
                $tracks = $this->spotifyService->search($searchTerm); // Fetch Spotify tracks
            }
        }


        return $this->render('spotify/search.html.twig', [
            'form' => $form->createView(),
            'participant' => $participant,
            'player' => $player,
            'tracks' => $tracks,
            'type' => $type,
            'targetEntity' => $targetEntity,
            'spotifyIsAvailable' => $this->spotifyService->checkSpotifyIsLoggedIn(),
        ]);
    }

    #[Route('/select-song/{type}/{id}/{spotifyTrack}', name: 'app_select_song')]
    public function selectSong(Request $request, string $type, int $id, string $spotifyTrack): Response
    {
        $targetEntity = null;

        $participant = null;
        $player = null;
        if ($type === 'participant') {
            $participant = $this->participantRepository->find($id);
            $targetEntity = $participant;
        } elseif ($type === 'player') {
            $player = $this->playerRepository->find($id);
            $targetEntity = $player;
        }

        if (!$participant && !$player) {
            throw $this->createNotFoundException('Participant not found.');
        }

        $track = $this->spotifyService->getTrackById($spotifyTrack); // Duration in milliseconds
        $durationInSeconds = intval($track->getDuration() / 1000);

        $settings = $this->settingService->getSettingForUser($this->getUser());
        $playTimeLimit = $settings->getSongPlayTimeLimit();

        $currentTrack = $targetEntity->getGoalHymnSpotifyId();
        $start = 0;
        $end = 0;
        if ($currentTrack === $spotifyTrack) {
            $start = $targetEntity->getGoalHymnStartTime();
            $end = $targetEntity->getGoalHymnEndTime();
        }

        $form = $this->createForm(
            SelectSongPeriodType::class,
            null,
            [
                'trackDuration' => $durationInSeconds,
                'playTimeLimit' => $playTimeLimit,
                'start' => $start,
                'end' => $end,
            ]
        );

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $targetEntity->setGoalHymnStartTime($data['start']);
            $targetEntity->setGoalHymnEndTime($data['end']);
            $targetEntity->setGoalHymnSpotifyId($spotifyTrack);

            $this->entityManager->persist($targetEntity);
            $this->entityManager->flush();

            return $this->redirectToRoute('spotify_search', ['id' => $targetEntity->getId(), 'type' => $type]);
        }

        return $this->render('spotify/select_duration.html.twig', [
            'form' => $form,
            'trackDuration' => $durationInSeconds,
            'track' => $track,
            'participant' => $participant,
            'player' => $player,
            'playTimeLimit' => $playTimeLimit,
        ]);
    }

    #[Route('/info/', name: 'spotify_info')]
    public function info(): Response
    {
        try {
            $displayName = $this->spotifyService->getLoginInformation();
        } catch (NoAccessTokenFoundException  $e) {
            $displayName = 'not_logged_in';
        }

        return $this->render('spotify/info.html.twig', [
            'displayName' => $displayName,
        ]);
    }

    // is called via goal_controller stimulus controller
    #[Route('/run/{fixtureId}/{participantId}/{playerId}', name: 'spotify_run', methods: ['GET', 'POST'])]
    public function run(
        Request $request,
        #[MapEntity(id: 'fixtureId')] Fixture $fixture,
        #[MapEntity(id: 'participantId')] Participant $participant,
        #[MapEntity(id: 'playerId')] Player $player,
    ): JsonResponse {
        $isHome = $request->query->get('isHome');

        if ($fixture->isGoalMusicRunning()) {
            return new JsonResponse(['error' => 'Goal music is already running'], Response::HTTP_BAD_REQUEST);
        }

        if ($participant->getGoalHymnSpotifyId() !== null || $player->getGoalHymnSpotifyId() !== null) {
            $settings = $this->settingService->getSettingForUser($this->getUser());

            // default is participant hymn
            $goalHymnSource = $participant;

            // use player if set
            if ($player->getGoalHymnSpotifyId() !== null){
                $goalHymnSource = $player;

                // go back to participant if is forced but only if participant is set
                if ($participant->isForceGoalHymn() && $participant->getGoalHymnSpotifyId() !== null){
                    $goalHymnSource = $participant;
                }
            }

            if ($settings->isGoalMusicEnabled()){
                $calculatedRuntime = $goalHymnSource->getGoalHymnEndTime() - $goalHymnSource->getGoalHymnStartTime();

                if ($calculatedRuntime > $settings->getMaximumSongDuration()) {
                    $calculatedRuntime = $settings->getMaximumSongDuration();
                }

                if ($calculatedRuntime > $this->forcedRuntime) {
                    $calculatedRuntime = $this->forcedRuntime;
                }

                $this->spotifyService->breakQueueWithGoalHymn(
                    $fixture->getId(),
                    $goalHymnSource->getGoalHymnSpotifyId(),
                    $goalHymnSource->getGoalHymnStartTime(),
                    $calculatedRuntime,
                );

                $fixture->setIsGoalMusicRunning(true);
            }
        }

        if ($isHome) {
            $fixture->setHomeGoals($fixture->getHomeGoals() + 1);
        } else {
            $fixture->setAwayGoals($fixture->getAwayGoals() + 1);
        }

        $fixture->addScorer($player->getId());
        // add player to goal list

        $this->entityManager->persist($fixture);
        $this->entityManager->flush();

        return new JsonResponse([
            'homeGoals' => $fixture->getHomeGoals(),
            'awayGoals' => $fixture->getAwayGoals(),
        ], Response::HTTP_OK);
    }

    #[Route('/test/{id}', name: 'test')]
    public function test(Participant $participant): Response
    {
        // logout
        // https://www.spotify.com/uk/account/apps/

        $this->spotifyService->breakQueueWithGoalHymn(
            1,
            $participant->getGoalHymnSpotifyId(),
            $participant->getGoalHymnStartTime(),
            $participant->getGoalHymnEndTime() - $participant->getGoalHymnStartTime(),
        );
        // Handle the user's selection (e.g., store the track in a session, database, etc.)
        $track = $this->spotifyService->getTrackDetails($id);

        // Do something with the selected track
        if (!$track) {
            throw $this->createNotFoundException('Track not found.');
        }

        return $this->render('spotify/track_details.html.twig', [
            'track' => $track,
        ]);
    }
}
