<?php

namespace App\Twig\Components;

use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Player;
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

    public function getShortIdent(Player $player): string
    {
        $ident = $player->getIdent();

        if (strlen($ident) >= 3) {
            // Take the first three characters
            return substr($ident, 0, 3);
        }

        return str_pad($ident, 3, '-');
    }
}
