<?php

namespace App\Twig\Components;

use App\Content\File\DefaultImageType;
use App\Content\File\ImageAwareInterface;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
final class ProfileImageComponent
{
    public ImageAwareInterface $profile;

    public int $width = 40;

    public function getDefaultImage(): string
    {
        $defaultImage = '';
        match ($this->profile->getDefaultImageType()){
            DefaultImageType::TEAM_PROFILE => $defaultImage = 'build/images/thumbnails/team_default.png',
            DefaultImageType::USER_PROFILE => $defaultImage = 'build/images/thumbnails/client_default.png'
        };

        return $defaultImage;
    }
}
