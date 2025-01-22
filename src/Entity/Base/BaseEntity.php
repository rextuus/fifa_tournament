<?php

declare(strict_types=1);

namespace App\Entity\Base;

abstract class BaseEntity
{
    use IdTrait;
    use CreateDateTrait;
    use EditDateTrait;

    public function getUniversalObjectId(): string
    {
        return $this->getId() . '::' . $this->getEntityTypeIdent();
    }
}
