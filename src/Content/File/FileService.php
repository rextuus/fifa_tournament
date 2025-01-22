<?php

declare(strict_types=1);

namespace App\Content\File;

use App\Content\File\Enum\FileType;
use App\Content\File\Enum\ImageType;
use App\Content\File\Flysystem\FilesystemProvider;
use App\Content\File\Form\Data\FileData;
use App\Entity\File;
use App\Entity\User;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileService
{
    public function __construct(
        private readonly FileRepository $repository,
        private readonly FileFactory $factory,
        private readonly FilesystemProvider $filesystemProvider,
        private readonly SluggerInterface $slugger,
        private readonly string $appUploadDir,
        private readonly FilePathGenerator $filePathGenerator,
        private readonly CacheManager $cacheManager,
        private readonly bool $virusDetectionEnabled = false,
    ) {
    }

    public function createByData(FileData $data, bool $flush = false): File
    {
        $file = $this->factory->createFile($data);
        $this->repository->persist($file);

        if ($flush) {
            $this->repository->flush();
        }

        return $file;
    }

    public function update(File $file, ?FileData $data, bool $flush = false): File
    {
        if ($data) {
            $this->factory->mapFile($file, $data);
        }

        if ($flush) {
            $this->repository->flush();
        }

        return $file;
    }

    public function read(File $file): string
    {
        $filesystem = $this->filesystemProvider->getFilesystem($file->getFilesystemIdent());

        return $filesystem->read($file->getRelativePath());
    }

    public function readByFileGenerationResult(FileGenerationResult $result): string
    {
        $filesystem = $this->filesystemProvider->getFilesystem($result->getFilesystemIdent());

        return $filesystem->read($result->getFullFilePath());
    }

    public function getRelativeFilePath(File $file): string
    {
        $prefix = $this->filesystemProvider->getFilesystemPrefix($file->getFilesystemIdent());

        return $prefix.DIRECTORY_SEPARATOR.$file->getRelativePath();
    }

    public function delete(File $file, bool $flush = false): void
    {
        if ($file->isImage()) {
            $this->cacheManager->remove($file->getRelativePath());
        }

        $fileSystem = $this->filesystemProvider->getFilesystem($file->getFilesystemIdent());
        $fileSystem->delete($file->getRelativePath());

        $this->repository->remove($file);

        if ($flush) {
            $this->repository->flush();
        }
    }

    /**
     * @return resource
     */
    public function readStream(File $file)
    {
        $filesystem = $this->filesystemProvider->getFilesystem($file->getFilesystemIdent());

        return $filesystem->readStream($file->getRelativePath());
    }

    /**
     * @throws \Exception
     */
    public function moveUploadedFile(UploadedFile $file): string
    {
        if ($this->virusDetectionEnabled) {
            unlink($file->getPathname());

            throw new \Exception('Uploaded file is corrupted!');
        }

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();

        try {
            $file->move($this->appUploadDir, $fileName);
        } catch (FileException $e) {
            throw new \Exception('Upload failed: '.$e->getMessage());
        }

        return $this->appUploadDir.DIRECTORY_SEPARATOR.$fileName;
    }

    public function importFile(
        string $localFilePath,
        string $filesystemIdent,
        ?User $uploader = null,
        ?ImageType $imageType = null,
    ): File {
        $fileData = $this->importFileIntoFilesystem($localFilePath, $filesystemIdent, $uploader, $imageType);

        $file = $this->createByData($fileData);

        unlink($localFilePath);

        return $file;
    }

    public function updateFile(
        File $file,
        string $localFilePath,
        string $filesystemIdent,
        ?User $uploader = null,
        ?ImageType $imageType = null,
    ): File {
        $fileData = $this->importFileIntoFilesystem($localFilePath, $filesystemIdent, $uploader, $imageType);

        $oldFilesystemIdent = $file->getFilesystemIdent();
        $oldRelativePath = $file->getRelativePath();

        $this->update($file, $fileData);

        $this->deleteFileFromFilesystem($oldFilesystemIdent, $oldRelativePath);

        if ($file->isImage()) {
            $this->cacheManager->remove($oldRelativePath);
        }

        unlink($localFilePath);

        return $file;
    }

    /**
     * @throws \Exception
     */
    private function importFileIntoFilesystem(
        string $localFilePath,
        string $filesystemIdent,
        ?User $uploader,
        ?ImageType $imageType = null,
    ): FileData {
        if (!is_file($localFilePath)) {
            throw new \Exception('File to import not found: '.$localFilePath);
        }

        if (!is_readable($localFilePath)) {
            throw new \Exception('File to import is not readable: '.$localFilePath);
        }

        $hashedFolderName = $this->filePathGenerator->generateRandomFilePath();

        $filePath = sprintf(
            '%s/%s',
            $hashedFolderName,
            pathinfo($localFilePath, PATHINFO_BASENAME)
        );

        $filesystem = $this->filesystemProvider->getFilesystem($filesystemIdent);
        $filesystem->writeStream($filePath, fopen($localFilePath, 'r'));

        return (new FileData())
            ->setName(pathinfo($localFilePath, PATHINFO_FILENAME))
            ->setPath($hashedFolderName)
            ->setExtension(pathinfo($localFilePath, PATHINFO_EXTENSION))
            ->setType(FileType::fromExtension(pathinfo($localFilePath, PATHINFO_EXTENSION)))
            ->setImageType($imageType)
            ->setFilesystemIdent($filesystemIdent)
            ->setUploader($uploader);
    }

    private function deleteFileFromFilesystem(string $filesystemIdent, string $relativePath): void
    {
        $filesystem = $this->filesystemProvider->getFilesystem($filesystemIdent);
        $filesystem->delete($relativePath);
    }

    public function createFileEntityByGenerationResult(
        FileGenerationResult $result,
        FileType $fileType,
        bool $flush,
    ): File {
        $fileData = (new FileData())
            ->setFilesystemIdent($result->getFilesystemIdent())
            ->setPath($result->getDirectoryPath())
            ->setName($result->getFileName())
            ->setExtension($fileType->value)
            ->setType($fileType);

        return $this->createByData($fileData, $flush);
    }
}
