<?php

declare(strict_types=1);

namespace App\Content\File;

use App\Content\File\Flysystem\FilesystemProvider;
use App\Content\File\Form\Data\EditProfileImageData;
use App\Entity\File;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Liip\ImagineBundle\Message\WarmupCache;
use Symfony\Component\Messenger\MessageBusInterface;

/**
 * @author  Sven Bröker <sven.broeker@doccheck.com>
 * @license 2024 DocCheck Community GmbH
 */
class ImageService
{
    public const SIZE_SMALL = 'small';
    public const SIZE_MEDIUM = 'medium';
    public const SIZE_LARGE = 'large';

    public const TEAM_IMAGE = 'team_image';
    public const USER_PROFILE_IMAGE = 'user_profile_image';
    public const PARTICIPANT_PROFILE_IMAGE = 'participant_profile_image';
    public const PLAYER_PROFILE_IMAGE = 'player_profile_image';

    /**
     * @var array<string, array<string, string>>
     */
    private static array $filterConfig = [
        self::TEAM_IMAGE => [
            self::SIZE_SMALL => LiipImagineFilterIdents::IMAGE_SQUARE_SMALL,
            self::SIZE_MEDIUM => LiipImagineFilterIdents::IMAGE_SQUARE_MEDIUM,
            self::SIZE_LARGE => LiipImagineFilterIdents::IMAGE_SQUARE_LARGE,
        ],
        self::USER_PROFILE_IMAGE => [
            self::SIZE_SMALL => LiipImagineFilterIdents::IMAGE_SQUARE_SMALL,
            self::SIZE_MEDIUM => LiipImagineFilterIdents::IMAGE_SQUARE_MEDIUM,
            self::SIZE_LARGE => LiipImagineFilterIdents::IMAGE_SQUARE_LARGE,
        ],
        self::PARTICIPANT_PROFILE_IMAGE => [
            self::SIZE_SMALL => LiipImagineFilterIdents::IMAGE_SQUARE_SMALL,
            self::SIZE_MEDIUM => LiipImagineFilterIdents::IMAGE_SQUARE_MEDIUM,
            self::SIZE_LARGE => LiipImagineFilterIdents::IMAGE_SQUARE_LARGE,
        ],
        self::PLAYER_PROFILE_IMAGE => [
            self::SIZE_SMALL => LiipImagineFilterIdents::IMAGE_SQUARE_SMALL,
            self::SIZE_MEDIUM => LiipImagineFilterIdents::IMAGE_SQUARE_MEDIUM,
            self::SIZE_LARGE => LiipImagineFilterIdents::IMAGE_SQUARE_LARGE,
        ],
    ];

    public function __construct(
        private readonly CacheManager $cacheManager,
        private readonly FileService $fileService,
        private readonly MessageBusInterface $messageBus,
        private readonly EntityManagerInterface $entityManager,
    ) {
    }

    public function resolveUrl(File $file, string $size): string
    {
        if (!$file->isImage()) {
            throw new \InvalidArgumentException('File is not an image.');
        }

        $imageType = $file->getImageType()->value;

        if (!isset(self::$filterConfig[$imageType])) {
            throw new \InvalidArgumentException('Image type "'.$imageType.'" is not configured.');
        }

        if (!isset(self::$filterConfig[$imageType][$size])) {
            throw new \InvalidArgumentException('Size "'.$size.'" is not configured for image type ".');
        }

        $filterIdent = self::$filterConfig[$file->getImageType()->value][$size];

        return $this->cacheManager->getBrowserPath($file->getRelativePath(), $filterIdent);
    }

    public function updateProfileImage(
        ImageAwareInterface $entity,
        EditProfileImageData $data,
        ?User $actor,
    ): void {
        if ($entity->getImageFile() && $data->deleteProfileImage()) {
            $profileImage = $entity->getImageFile();
            $this->fileService->delete($profileImage);
            $entity->setImageFile(null);
        } elseif ($data->getProfileImage()) {
            $uploadedImagePath = $this->fileService->moveUploadedFile($data->getProfileImage());

            if ($entity->getImageFile()) {
                $file = $this->fileService->updateFile(
                    $entity->getImageFile(),
                    $uploadedImagePath,
                    FilesystemProvider::IDENT_IMAGE,
                    $actor,
                    $data->getImageType()
                );
            } else {
                $file = $this->fileService->importFile(
                    $uploadedImagePath,
                    FilesystemProvider::IDENT_IMAGE,
                    $actor,
                    $data->getImageType()
                );
                $entity->setImageFile($file);
            }

            $this->messageBus->dispatch(new WarmupCache($file->getRelativePath(), null, true));
        }

        $this->entityManager->flush();
    }
}
