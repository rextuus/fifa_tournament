<?php

namespace App\Twig\Components;

use App\Content\QrCodeGenerator;
use App\Content\Spotify\Representation\SpotifyTrack;
use App\Content\Spotify\SpotifyService;
use App\Entity\Base\GoalHymnAwareInterface;
use App\Entity\Participant;
use App\Entity\Player;
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
    public ?Participant $participant = null;

    #[LiveProp(writable: true)]
    public ?Player $player = null;

    public function isTrackFilled(): bool
    {
        return $this->track->getTrackName() !== '-';
    }

    public function getEntity(): GoalHymnAwareInterface
    {
        dump($this->participant);
        dump($this->player);
        if ($this->participant !== null){
            return $this->participant;
        }

        return $this->player;
    }
}
