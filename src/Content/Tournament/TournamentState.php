<?php

namespace App\Content\Tournament;

enum TournamentState: string
{
    case OPEN = 'open';
    case ACTIVE = 'active';
    case FINISHED = 'finished';
}
