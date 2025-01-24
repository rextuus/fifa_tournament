<?php

declare(strict_types=1);

namespace App\Content\File\Enum;

enum ImageType: string
{
    case TEAM_IMAGE = 'team_image';
    case USER_PROFILE_IMAGE = 'user_profile_image';
    case PARTICIPANT_PROFILE_IMAGE = 'participant_profile_image';
    case PLAYER_PROFILE_IMAGE = 'player_profile_image';
}
