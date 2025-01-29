<?php

namespace App\Twig\Components;

use App\Entity\Fixture;
use App\Entity\Participant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
final class GoalComponent extends AbstractController
{

    public Participant $participant;

    public Fixture $fixture;

    public bool $isHome = true;

    public function goalValue(): int
    {
        if ($this->isHome) {
            return $this->fixture->getHomeGoals();
        }else{
            return $this->fixture->getAwayGoals();
        }
    }

}
