<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use App\Content\File\ImageService;
use App\Content\Tournament\TournamentService;
use App\Entity\File;
use App\Entity\Tournament;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

#[AutoconfigureTag('twig.extension')]
class GoalHymnExtension extends AbstractExtension
{
    /**
     * @return array<TwigFunction>
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('duration_in_minutes', [$this, 'durationInMinutes'], ['is_safe' => ['html']]),
        ];
    }

    public function durationInMinutes(int $duration): string
    {
        $minutes = $duration / 60;
        $seconds = $duration % 60;

        return sprintf('%d:%02d', $minutes, $seconds);
    }
}
