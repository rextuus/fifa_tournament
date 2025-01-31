<?php

declare(strict_types=1);

namespace App\Form\Data;

use App\Entity\Player;

class AddSinglePlayerBattleTournamentData
{
    private ?Player $player;

    public function getPlayer(): ?Player
    {
        return $this->player;
    }

    public function setPlayer(?Player $player): AddSinglePlayerBattleTournamentData
    {
        $this->player = $player;
        return $this;
    }
}
