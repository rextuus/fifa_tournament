<?php

namespace App\Twig\Components;

use App\Content\QrCodeGenerator;
use App\Content\Spotify\Representation\SpotifyTrack;
use App\Content\Spotify\SpotifyService;
use App\Entity\Participant;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class TrackComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public SpotifyTrack $track;

    #[LiveProp(writable: true)]
    public Participant $participant;

    public function isTrackFilled(): bool
    {
        return $this->track->getTrackName() !== '-';
    }
}
