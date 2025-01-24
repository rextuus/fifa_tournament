<?php

namespace App\Controller;

use App\Content\SettingService;
use App\Content\Spotify\NoAccessTokenFoundException;
use App\Content\Spotify\SpotifyService;
use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Tournament;
use App\Entity\User;
use App\Form\SelectSongPeriodType;
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

    #[Route('/{id}/search', name: 'spotify_search')]
    public function search(Request $request, Participant $participant, FormFactoryInterface $formFactory): Response
    {
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
            'tracks' => $tracks,
            'spotifyIsAvailable' => $this->spotifyService->checkSpotifyIsLoggedIn(),
        ]);
    }

    #[Route('/select-song/{id}/{spotifyTrack}', name: 'app_select_song')]
    public function selectSong(Request $request, Participant $participant, string $spotifyTrack): Response
    {
        $track = $this->spotifyService->getTrackById($spotifyTrack); // Duration in milliseconds
        $durationInSeconds = intval($track->getDuration() / 1000);

        $settings = $this->settingService->getSettingForUser($this->getUser());
        $playTimeLimit = $settings->getSongPlayTimeLimit();

        $currentTrack = $participant->getGoalHymnSpotifyId();
        $start = 0;
        $end = 0;
        if ($currentTrack === $spotifyTrack) {
            $start = $participant->getGoalHymnStartTime();
            $end = $participant->getGoalHymnEndTime();
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

            $participant->setGoalHymnStartTime($data['start']);
            $participant->setGoalHymnEndTime($data['end']);
            $participant->setGoalHymnSpotifyId($spotifyTrack);

            $this->entityManager->persist($participant);
            $this->entityManager->flush();

            return $this->redirectToRoute('spotify_search', ['id' => $participant->getId()]);
        }

        return $this->render('spotify/select_duration.html.twig', [
            'form' => $form,
            'trackDuration' => $durationInSeconds,
            'track' => $track,
            'participant' => $participant,
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

    #[Route('/run/{fixtureId}/{participantId}', name: 'spotify_run', methods: ['GET', 'POST'])]
    public function run(
        Request $request,
        #[MapEntity(id: 'fixtureId')] Fixture $fixture,
        #[MapEntity(id: 'participantId')] Participant $participant,
    ): JsonResponse {
        $isHome = $request->query->get('isHome');

        if ($fixture->isGoalMusicRunning()) {
            return new JsonResponse(['error' => 'Goal music is already running'], Response::HTTP_BAD_REQUEST);
        }

        if ($participant->getGoalHymnSpotifyId() !== null) {
            $settings = $this->settingService->getSettingForUser($this->getUser());

            $calculatedRuntime = $participant->getGoalHymnEndTime() - $participant->getGoalHymnStartTime();

            if ($calculatedRuntime > $settings->getMaximumSongDuration()) {
                $calculatedRuntime = $settings->getMaximumSongDuration();
            }

            if ($calculatedRuntime > $this->forcedRuntime) {
                $calculatedRuntime = $this->forcedRuntime;
            }

            $this->spotifyService->breakQueueWithGoalHymn(
                $fixture->getId(),
                $participant->getGoalHymnSpotifyId(),
                $participant->getGoalHymnStartTime(),
                $calculatedRuntime,
            );

            $fixture->setIsGoalMusicRunning(true);
        }

        if ($isHome) {
            $fixture->setHomeGoals($fixture->getHomeGoals() + 1);
        } else {
            $fixture->setAwayGoals($fixture->getAwayGoals() + 1);
        }

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
