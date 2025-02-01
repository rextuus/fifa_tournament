<?php

namespace App\Twig\Components;

use App\Content\QrCodeGenerator;
use App\Content\Spotify\NoAccessTokenFoundException;
use App\Content\Spotify\Representation\SpotifyTrack;
use App\Content\Spotify\SpotifyService;
use App\Entity\Base\GoalHymnAwareInterface;
use App\Entity\Participant;
use App\Entity\Player;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class ParticipantComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?Participant $participant = null;

    #[LiveProp(writable: true)]
    public ?Player $player = null;

    public int $size = 200;

    #[LiveProp(writable: true)]
    public ?string $qrCode = null;

    #[LiveProp(writable: true)]
    public bool $showQrCode = false; // Add this Live Prop for QR Code visibility


    public function __construct(
        private readonly QrCodeGenerator $qrCodeGenerator,
        private readonly SpotifyService $spotifyService,
        private readonly UrlGeneratorInterface $urlGenerator,
    ) {
    }

    #[LiveAction]
    public function createQrCode(): void
    {
        $this->qrCode = $this->qrCodeGenerator->generateQrCode(
            'spotify_search',
            $this->getEntity()->getId(),
            $this->getTypeForEntity()
        );
    }

    public function getQrCode(): ?string
    {
        return $this->qrCode;
    }

    public function getTrack(): SpotifyTrack
    {
        if ($this->getEntity()->getGoalHymnSpotifyId() === null) {
            return new SpotifyTrack('-', '', '', '', '', 0);
        }

        return $this->spotifyService->getGoalHymnForParticipant($this->getEntity());
    }

    public function getEntity(): GoalHymnAwareInterface
    {
        if ($this->participant !== null) {
            return $this->participant;
        }

        return $this->player;
    }

    public function getTypeForEntity(): string
    {
        if ($this->participant !== null) {
            return 'participant';
        }

        return 'player';
    }

    public function getTestRoute(): string
    {

        if ($this->participant !== null) {
            return $this->urlGenerator->generate(
                'spotify_test_participant',
                ['id' => $this->participant->getId()]
            );
        }
        dump($this->participant);
        return $this->urlGenerator->generate(
            'spotify_test_player',
            ['id' => $this->player->getId()]
        );
    }

    public function getSpotifyName(): string
    {
        try {
            $displayName = $this->spotifyService->getLoginInformation();
        } catch (NoAccessTokenFoundException  $e) {
            $displayName = 'not_logged_in';
        }

        return $displayName;
    }
}
