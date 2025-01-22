<?php

declare(strict_types=1);

namespace App\Entity;

use App\Content\File\Enum\FileType;
use App\Content\File\Enum\ImageType;
use App\Content\File\FileRepository;
use App\Entity\Base\BaseEntity;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Cache;

/**
 * @author Wolfgang Hinzmann <wolfgang.hinzmann@doccheck.com>
 * @license 2024 DocCheck Community GmbH
 */
#[ORM\Entity(repositoryClass: FileRepository::class)]
#[ORM\HasLifecycleCallbacks()]
#[Cache(usage: 'NONSTRICT_READ_WRITE', region: 'cream_orm_cache')]
class File extends BaseEntity
{
    #[ORM\Column(type: 'string', length: 64, nullable: false)]
    private string $name;

    #[ORM\Column(type: 'string', length: 16, nullable: false)]
    private string $extension;

    #[ORM\Column(type: 'string', enumType: FileType::class)]
    private FileType $type;

    #[ORM\Column(type: 'string', nullable: true, enumType: ImageType::class)]
    private ?ImageType $imageType = null;

    #[ORM\Column(type: 'string', length: 256, nullable: false)]
    private string $path;

    #[ORM\Column(type: 'string', length: 50, nullable: false)]
    private string $filesystemIdent;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $uploader = null;

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): File
    {
        $this->name = $name;

        return $this;
    }

    public function getExtension(): string
    {
        return $this->extension;
    }

    public function setExtension(string $extension): File
    {
        $this->extension = $extension;

        return $this;
    }

    public function getFilename(): string
    {
        return $this->getName() . '.' . $this->getExtension();
    }

    public function getType(): FileType
    {
        return $this->type;
    }

    public function setType(FileType $type): File
    {
        $this->type = $type;

        return $this;
    }

    public function getImageType(): ?ImageType
    {
        return $this->imageType;
    }

    public function setImageType(?ImageType $imageType): File
    {
        $this->imageType = $imageType;

        return $this;
    }

    public function isPdf(): bool
    {
        return $this->getType() === FileType::PDF;
    }

    public function isImage(): bool
    {
        return $this->getType() === FileType::IMAGE;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function setPath(string $path): File
    {
        $this->path = $path;

        return $this;
    }

    public function getFilesystemIdent(): string
    {
        return $this->filesystemIdent;
    }

    public function setFilesystemIdent(string $filesystemIdent): void
    {
        $this->filesystemIdent = $filesystemIdent;
    }

    public function getUploader(): ?User
    {
        return $this->uploader;
    }

    public function setUploader(?User $uploader): File
    {
        $this->uploader = $uploader;

        return $this;
    }

    public function getRelativePath(): string
    {
        return $this->getPath() . DIRECTORY_SEPARATOR . $this->getName() . '.' . $this->getExtension();
    }

    public function __toString(): string
    {
        return $this->getName();
    }
}
