<?php

declare(strict_types=1);

namespace App\Content\File\Form\Data;

use App\Content\File\Enum\FileType;
use App\Content\File\Enum\ImageType;
use App\Entity\File;
use App\Entity\User;

/**
 * @author Wolfgang Hinzmann <wolfgang.hinzmann@doccheck.com>
 * @license 2024 DocCheck Community GmbH
 */
class FileData
{
    private string $name;

    private string $extension;

    private FileType $type;

    private ?ImageType $imageType = null;

    private string $path;

    private string $filesystemIdent;

    private ?User $uploader = null;

    public static function createFormEntity(File $file): self
    {
        $fileData = new FileData();
        $fileData->setName($file->getName());
        $fileData->setType($file->getType());
        $fileData->setImageType($file->getImageType());
        $fileData->setExtension($file->getExtension());
        $fileData->setPath($file->getPath());
        $fileData->setFilesystemIdent($file->getFilesystemIdent());
        $fileData->setUploader($file->getUploader());

        return $fileData;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): FileData
    {
        $this->name = $name;

        return $this;
    }

    public function getExtension(): string
    {
        return $this->extension;
    }

    public function setExtension(string $extension): FileData
    {
        $this->extension = $extension;

        return $this;
    }

    public function getType(): FileType
    {
        return $this->type;
    }

    public function setType(FileType $type): FileData
    {
        $this->type = $type;

        return $this;
    }

    public function getImageType(): ?ImageType
    {
        return $this->imageType;
    }

    public function setImageType(?ImageType $imageType): FileData
    {
        $this->imageType = $imageType;

        return $this;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function setPath(string $path): FileData
    {
        $this->path = $path;

        return $this;
    }

    public function getFilesystemIdent(): string
    {
        return $this->filesystemIdent;
    }

    public function setFilesystemIdent(string $filesystemIdent): FileData
    {
        $this->filesystemIdent = $filesystemIdent;

        return $this;
    }

    public function getUploader(): ?User
    {
        return $this->uploader;
    }

    public function setUploader(?User $uploader): FileData
    {
        $this->uploader = $uploader;

        return $this;
    }
}
