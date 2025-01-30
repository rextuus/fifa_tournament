<?php

declare(strict_types=1);

namespace App\Content\Tournament\Calculation;

enum TableFilter: string
{
    case POINTS = 'points';
    case PLAYED = 'played';
    case WIN = 'win';
    case LOSE = 'lose';
    case DRAW = 'draw';
    case PLAYER = 'player';
    case PERSONAL_GOALS = 'personal_goals';
    case TEAM_GOALS = 'team_goals';
    case AGAINST_GOALS = 'against_goals';
}
