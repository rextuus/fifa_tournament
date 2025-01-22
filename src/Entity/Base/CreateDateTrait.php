<?php

declare(strict_types=1);

namespace App\Entity\Base;

use DateTime;
use Doctrine\ORM\Mapping as ORM;

trait CreateDateTrait
{
    #[ORM\Column(nullable: false)]
    protected ?DateTime $created = null;

    public function getCreated(): ?DateTime
    {
        return $this->created;
    }

    public function setCreated(DateTime $created): static
    {
        $this->created = $created;

        return $this;
    }

    #[ORM\PrePersist]
    public function onPrePersistSetCreated(): void
    {
        if (!$this->getCreated() instanceof DateTime) {
            $this->setCreated(new DateTime('now'));
        }
    }
}
