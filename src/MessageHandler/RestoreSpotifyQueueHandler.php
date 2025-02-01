<?php

namespace App\MessageHandler;

use App\Content\Spotify\SpotifyService;
use App\Message\RestoreSpotifyQueue;
use App\Repository\FixtureRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final class RestoreSpotifyQueueHandler
{
    public function __construct(
        private readonly SpotifyService $spotifyService,
        private readonly FixtureRepository $fixtureRepository,
        private readonly UserRepository $userRepository,
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    public function __invoke(RestoreSpotifyQueue $message): void
    {
        $user = $this->userRepository->find($message->getUserId());

        $this->spotifyService->restoreSpotifyQueueAsBeforeGoalHymnBreak(
            $message->getProgressTime(),
            $user,
            $message->isPlaylistWasInterrupted()
        );

        if ($message->getFixtureId() !== -1){
            $fixture = $this->fixtureRepository->find($message->getFixtureId());
            $fixture->setIsGoalMusicRunning(false);
            $this->entityManager->flush();
        }
    }
}
