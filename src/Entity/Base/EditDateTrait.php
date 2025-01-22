<?php

declare(strict_types=1);

namespace App\Entity\Base;

use DateTime;
use Doctrine\ORM\Mapping as ORM;

trait EditDateTrait
{
    #[ORM\Column(nullable: true)]
    protected ?DateTime $edited = null;

    public function getEdited(): ?DateTime
    {
        return $this->edited;
    }

    private function setEdited(DateTime $edited): static
    {
        $this->edited = $edited;

        return $this;
    }

    public function updateEdited(): void
    {
        $this->setEdited(new DateTime('now'));
    }

    #[ORM\PreUpdate]
    public function onPreUpdateSetEdited(): void
    {
        $this->updateEdited();
    }
}
