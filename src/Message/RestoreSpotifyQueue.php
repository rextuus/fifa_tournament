<?php

namespace App\Message;

final class RestoreSpotifyQueue
{

    public function __construct(private string $trackId, private int $progressTime)
    {
    }

    public function getTrackId(): string
    {
        return $this->trackId;
    }

    public function getProgressTime(): int
    {
        return $this->progressTime;
    }
}
