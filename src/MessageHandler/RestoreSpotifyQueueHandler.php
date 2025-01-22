<?php

namespace App\MessageHandler;

use App\Content\Spotify\SpotifyService;
use App\Message\RestoreSpotifyQueue;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final class RestoreSpotifyQueueHandler{


    public function __construct(private readonly SpotifyService $spotifyService)
    {
    }

    public function __invoke(RestoreSpotifyQueue $message): void
    {
        $this->spotifyService->restoreSpotifyQueueAsBeforeGoalHymnBreak($message->getProgressTime());
    }
}
