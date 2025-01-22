<?php

namespace App\Content\Team;

use App\Content\File\Enum\FileType;
use App\Content\File\Enum\ImageType;
use App\Content\File\FileService;
use App\Content\File\Flysystem\FilesystemProvider;
use App\Content\File\Form\Data\FileData;
use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;

class TeamImportService
{
    public function __construct(
        private readonly FifaTeamsCrawler $fifaTeamsCrawler,
        private readonly EntityManagerInterface $entityManager,
        private readonly FileService $fileService,
        private readonly ImageStorageService $imageStorageService,
    ) {
    }

    public function importTeams(StarRating $stars): void
    {
        $rawValues = $this->fifaTeamsCrawler->getAllTeams();
        $repository = $this->entityManager->getRepository(Team::class);

        foreach ($rawValues as $rawValue) {
            $existingTeam = $repository->findOneBy([
                'name' => $rawValue['name'],
                'league' => $rawValue['league'],
            ]);

            if (!$existingTeam) {
                $team = new Team();
                $team->setName($rawValue['name'])
                    ->setLeague($rawValue['league'])
                    ->setImageLink($rawValue['image'])
                    ->setTeamLink($rawValue['url'])
                    ->setStars($stars);

                $this->entityManager->persist($team);
            }
        }

        $this->entityManager->flush();
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