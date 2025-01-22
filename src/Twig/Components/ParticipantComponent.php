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
final class ParticipantComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public Participant $participant;

    public int $size = 200;

    #[LiveProp(writable: true)]
    public ?string $qrCode = null;

    #[LiveProp(writable: true)]
    public bool $showQrCode = false; // Add this Live Prop for QR Code visibility


    public function __construct(
        private readonly QrCodeGenerator $qrCodeGenerator,
        private readonly SpotifyService $spotifyService
    ) {
    }

    #[LiveAction]
    public function createQrCode(): void
    {
        $this->qrCode = $this->qrCodeGenerator->generateQrCode('spotify_search', $this->participant->getId());
    }

    public function getQrCode(): ?string
    {
        return $this->qrCode;
    }

    public function getTrack(): SpotifyTrack
    {
        if ($this->participant->getGoalHymnSpotifyId() === null){
            return new SpotifyTrack('','', '', '', '', 0);
        }

        return $this->spotifyService->getGoalHymnForParticipant($this->participant);
    }
}
