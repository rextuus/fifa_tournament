<?php

declare(strict_types=1);

namespace App\Content\File;

use App\Entity\File;

interface ImageAwareInterface
{
    public function setImageFile(?File $profileImage): void;

    public function getImageFile(): ?File;

    public function getDefaultImageType(): DefaultImageType;
}
