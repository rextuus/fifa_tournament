<?php

declare(strict_types=1);

namespace App\Content\File;

use App\Entity\File;
use App\Content\File\Form\Data\FileData;

class FileFactory
{
    public function createFile(FileData $data): File
    {
        $file = $this->createNewInstance();

        $this->mapFile($file, $data);

        return $file;
    }

    public function mapFile(File $file, FileData $data): void
    {
        $file->setFilesystemIdent($data->getFilesystemIdent());
        $file->setPath($data->getPath());
        $file->setName($data->getName());
        $file->setExtension($data->getExtension());
        $file->setType($data->getType());
        $file->setImageType($data->getImageType());
        $file->setUploader($data->getUploader());
    }

    private function createNewInstance(): File
    {
        return new File();
    }
}
