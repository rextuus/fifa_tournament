<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use App\Content\File\ImageService;
use App\Content\Tournament\TournamentService;
use App\Entity\File;
use App\Entity\Participant;
use App\Entity\Tournament;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

#[AutoconfigureTag('twig.extension')]
class TournamentExtension extends AbstractExtension
{
    public function __construct(private readonly TournamentService $tournamentService)
    {
    }

    /**
     * @return array<TwigFunction>
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('tournament_is_valid', [$this, 'tournamentIsValid'], ['is_safe' => ['html']]),
            new TwigFunction('tournament_participant_is_valid', [$this, 'tournamentParticipantIsValid'], ['is_safe' => ['html']]),
        ];
    }

    public function tournamentIsValid(Tournament $tournament): bool
    {
        return $this->tournamentService->isValid($tournament);
    }

    public function tournamentParticipantIsValid(Tournament $tournament, Participant $participant): bool
    {
        return $this->tournamentService->participantIsValid($tournament, $participant);
    }
}
