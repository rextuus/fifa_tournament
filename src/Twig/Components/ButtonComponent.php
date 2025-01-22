<?php

namespace App\Twig\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
final class ButtonComponent
{
    public string $method = 'get';
    public string $text;

    public string $classes;

    public string $route;
}
