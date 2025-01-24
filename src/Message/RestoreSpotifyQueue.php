<?php

namespace App\Message;

final class RestoreSpotifyQueue
{
    public function __construct(
        private readonly int $fixtureId,
        private readonly int $userId,
        private readonly ?string $trackId,
        private readonly ?int $progressTime,
        private readonly bool $playlistWasInterrupted = true
    ) {
    }

    public function getFixtureId(): int
    {
        return $this->fixtureId;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getTrackId(): ?string
    {
        return $this->trackId;
    }

    public function getProgressTime(): ?int
    {
        return $this->progressTime;
    }

    public function isPlaylistWasInterrupted(): bool
    {
        return $this->playlistWasInterrupted;
    }
}
