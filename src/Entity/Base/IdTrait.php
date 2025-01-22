<?php

declare(strict_types=1);

namespace App\Entity\Base;

use Doctrine\ORM\Mapping as ORM;

trait IdTrait
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    protected ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
