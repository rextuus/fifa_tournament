<?php

namespace App\Entity\Base;

interface GoalHymnAwareInterface
{
    public function setGoalHymnSpotifyId(string $goalHymnSpotifyId): void;
    public function getGoalHymnSpotifyId(): ?string;
}