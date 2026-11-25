<?php

declare(strict_types=1);

namespace App\Entity\Base;

use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;

trait EditDateTrait
{
    #[ORM\Column(nullable: true)]
    protected ?DateTimeImmutable $edited = null;

    public function getEdited(): ?DateTimeImmutable
    {
        return $this->edited;
    }

    private function setEdited(DateTimeImmutable $edited): static
    {
        $this->edited = $edited;

        return $this;
    }

    public function updateEdited(): void
    {
        $this->setEdited(new DateTimeImmutable('now'));
    }

    #[ORM\PreUpdate]
    public function onPreUpdateSetEdited(): void
    {
        $this->updateEdited();
    }
}
