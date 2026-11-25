<?php

declare(strict_types=1);

namespace App\Entity\Base;

use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;

trait CreateDateTrait
{
    #[ORM\Column(nullable: false)]
    protected ?DateTimeImmutable $created = null;

    public function getCreated(): ?DateTimeImmutable
    {
        return $this->created;
    }

    public function setCreated(DateTimeImmutable $created): static
    {
        $this->created = $created;

        return $this;
    }

    #[ORM\PrePersist]
    public function onPrePersistSetCreated(): void
    {
        if (!$this->getCreated() instanceof DateTimeImmutable) {
            $this->setCreated(new DateTimeImmutable('now'));
        }
    }
}
