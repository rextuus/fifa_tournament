<?php

declare(strict_types=1);

namespace App\Content\File\Enum;

use App\Content\File\ImageService;

enum ImageType: string
{
    case TEAM_IMAGE = ImageService::TEAM_IMAGE;
    case USER_PROFILE_IMAGE = ImageService::USER_PROFILE_IMAGE;
    case PARTICIPANT_PROFILE_IMAGE = ImageService::PARTICIPANT_PROFILE_IMAGE;
    case PLAYER_PROFILE_IMAGE = ImageService::PLAYER_PROFILE_IMAGE;
}
