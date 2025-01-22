<?php

declare(strict_types=1);

namespace App\Content\Tournament\Calculation;

class PotentialFixture
{
    public function __construct(private ?int $home = null, private ?int $away = null)
    {
    }

    public function isFree(): bool
    {
        return $this->home === null && $this->away === null;
    }

    public function getHome(): ?int
    {
        return $this->home;
    }

    public function setHome(?int $home): PotentialFixture
    {
        $this->home = $home;
        return $this;
    }

    public function getAway(): ?int
    {
        return $this->away;
    }

    public function setAway(?int $away): PotentialFixture
    {
        $this->away = $away;
        return $this;
    }

    public function getSummary(): string
    {
        return sprintf('%s - %s', $this->home, $this->away);
    }
}
