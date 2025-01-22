<?php

namespace App\Twig\Components;

use App\Entity\Fixture;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class FixtureComponent
{
    use DefaultActionTrait;

    public Fixture $fixture;
}
