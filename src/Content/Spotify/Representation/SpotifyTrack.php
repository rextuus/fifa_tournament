<?php

namespace App\Content\Spotify\Representation;

class SpotifyTrack
{
    public function __construct(
        private string $trackName,
        private string $artistName,
        private string $albumName,
        private string $coverUrl,
        private string $spotifyId,
        private int $duration
    ) {
    }

    public function getTrackName(): string
    {
        return $this->trackName;
    }

    public function getArtistName(): string
    {
        return $this->artistName;
    }

    public function getAlbumName(): string
    {
        return $this->albumName;
    }

    public function getCoverUrl(): string
    {
        return $this->coverUrl;
    }

    public function getSpotifyId(): string
    {
        return $this->spotifyId;
    }

    public function getDuration(): int
    {
        return $this->duration;
    }
}