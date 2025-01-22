<?php

declare(strict_types=1);

namespace App\Content\Team;

use App\Content\File\Enum\FileType;
use App\Content\File\Enum\ImageType;
use App\Content\File\FileService;
use App\Content\File\Flysystem\FilesystemProvider;
use App\Content\File\Form\Data\FileData;
use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;

class TeamService
{
    public function __construct(
        private FileService $fileService,
        private EntityManagerInterface $entityManager,
        private ImageStorageService $imageStorageService,
    ) {
    }

    public function processImagesForTeams(): void
    {
        $teams = $this->entityManager->getRepository(Team::class)->findAll();
        foreach ($teams as $team) {
            $imageUrl = $team->getImageLink();
            $filename = sprintf('%s', $team->getName());

            $fileGenerationResult = $this->imageStorageService->downloadAndSaveImage($imageUrl, $filename);

            if (null !== $fileGenerationResult) {
                $data = new FileData();
                $data->setName($fileGenerationResult->getFileName());
                $data->setImageType(ImageType::TEAM_IMAGE);
                $data->setExtension('png');
                $data->setPath($fileGenerationResult->getDirectoryPath());
                $data->setType(FileType::IMAGE);
                $data->setFilesystemIdent(FilesystemProvider::IDENT_IMAGE);

                $file = $this->fileService->createByData($data);

                $team->setImageFile($file);
            }
        }

        $this->entityManager->flush();
    }
}
