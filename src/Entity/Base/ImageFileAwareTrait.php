<?php

declare(strict_types=1);

namespace App\Entity\Base;

use App\Entity\File;
use Doctrine\ORM\Mapping as ORM;

trait ImageFileAwareTrait
{
    #[ORM\OneToOne(targetEntity: File::class)]
    #[ORM\JoinColumn(name: 'file_id', referencedColumnName: 'id')]
    private ?File $imageFile = null;

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageFile(?File $imageFile): void
    {
        $this->imageFile = $imageFile;
    }
}
