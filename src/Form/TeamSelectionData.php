<?php

namespace App\Form;

use App\Entity\Team;

class TeamSelectionData
{
    private ?Team $team = null;

    public function getTeam(): ?Team
    {
        return $this->team;
    }

    public function setTeam(?Team $team): void
    {
        $this->team = $team;
    }
}