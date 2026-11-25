<?php

declare(strict_types=1);

namespace App\Content\File;

use App\Content\File\Flysystem\FilesystemProvider;
use App\Content\File\Form\Data\EditProfileImageData;
use App\Content\File\Imgproxy\ImgproxyUrlSigner;
use App\Entity\File;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @author  Sven Bröker <sven.broeker@doccheck.com>
 * @license 2024 DocCheck Community GmbH
 */
class ImageService
{
    public const SIZE_SMALL = 'small';
    public const SIZE_MEDIUM = 'medium';
    public const SIZE_LARGE = 'large';
    public const SIZE_X_LARGE = 'x-large';

    public const TEAM_IMAGE = 'team_image';
    public const USER_PROFILE_IMAGE = 'user_profile_image';
    public const PARTICIPANT_PROFILE_IMAGE = 'participant_profile_image';
    public const PLAYER_PROFILE_IMAGE = 'player_profile_image';

    /**
     * Kantenlänge in Pixeln je Größe (quadratisch, mittig zugeschnitten – wie früher die Liip-Filter „fixed“).
     * Gilt für alle Bildarten (Team, Benutzer, Teilnehmer, Spieler).
     *
     * @var array<string, int>
     */
    private const array SIZES = [
        self::SIZE_SMALL => 60,
        self::SIZE_MEDIUM => 126,
        self::SIZE_LARGE => 250,
        self::SIZE_X_LARGE => 500,
    ];

    /** Präfix, unter dem Caddy (docker/caddy/Caddyfile) an imgproxy weiterreicht. */
    private const string IMGPROXY_PREFIX = '/img';

    public function __construct(
        private readonly FileService $fileService,
        private readonly EntityManagerInterface $entityManager,
        private readonly ImgproxyUrlSigner $imgproxy,
        private readonly UrlGeneratorInterface $urlGenerator,
    ) {}

    public function resolveUrl(File $file, string $size): string
    {
        if (!$file->isImage()) {
            throw new \InvalidArgumentException('File is not an image.');
        }

        if (!isset(self::SIZES[$size])) {
            throw new \InvalidArgumentException('Size "' . $size . '" is not configured.');
        }

        // Lokal ohne imgproxy: Original (der Browser skaliert).
        if (!$this->imgproxy->isEnabled()) {
            return $this->urlGenerator->generate('app_image_original', ['id' => $file->getId()]);
        }

        $edge = self::SIZES[$size];
        // Neuer Wert, sobald die Datei ersetzt wird (z. B. Team-Wappen neu geladen): andere URL, kein alter Cache.
        $changed = $file->getEdited() ?? $file->getCreated();
        $cacheBuster = $file->getId() . '-' . ($changed?->getTimestamp() ?? 0);

        return self::IMGPROXY_PREFIX
        . $this->imgproxy->sign('local:///' . $file->getRelativePath(), [
            'rs:fill:' . $edge . ':' . $edge,
            'g:ce',
            'q:85',
            'cb:' . $cacheBuster,
        ]);
    }

    public function updateProfileImage(ImageAwareInterface $entity, EditProfileImageData $data, ?User $actor): void
    {
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
                    $data->getImageType(),
                );
            } else {
                $file = $this->fileService->importFile(
                    $uploadedImagePath,
                    FilesystemProvider::IDENT_IMAGE,
                    $actor,
                    $data->getImageType(),
                );
                $entity->setImageFile($file);
            }
        }

        $this->entityManager->flush();
    }
}
