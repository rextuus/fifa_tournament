<?php

declare(strict_types=1);

namespace App\Content\Team;

use App\Content\File\Enum\FileExtension;
use App\Content\File\FileGenerationResult;
use App\Content\File\FilePathGenerator;
use App\Content\File\Flysystem\FilesystemProvider;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ImageStorageService
{
    public function __construct(
        private FilesystemProvider $filesystemProvider,
        private HttpClientInterface $httpClient,
        private FilePathGenerator $filePathGenerator,
    ) {
    }

    public function downloadAndSaveImage(string $imageUrl, string $filename): ?FileGenerationResult
    {
        try {
            // Fetch the image from the URL
            $response = $this->httpClient->request('GET', $imageUrl);

            if (200 !== $response->getStatusCode()) {
                throw new \Exception('Failed to download image');
            }

            $imageContent = $response->getContent();

            // Generate a unique file path

            // Save the image to Flysystem
            $hashedFolderName = $this->filePathGenerator->generateRandomFilePath($depth = 2);

            $filePath = $this->filePathGenerator->getFullFilePath(
                $hashedFolderName,
                $filename,
                FileExtension::PNG
            );

            $fileSystem = $this->filesystemProvider->getFilesystem(FilesystemProvider::IDENT_IMAGE);
            $fileSystem->write($filePath, $imageContent);

            return FileGenerationResult::create(
                $filePath,
                $hashedFolderName,
                $filename,
                FilesystemProvider::IDENT_IMAGE
            );
        } catch (\Exception $e) {
            // Handle exceptions (logging can be added here)
            return null;
        }
    }
}
