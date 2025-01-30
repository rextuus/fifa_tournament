<?php

namespace App\Content\Tournament;

enum ResultType: string
{
    case HOME = 'home';
    case AWAY = 'away';
    case DRAW = 'draw';
}
