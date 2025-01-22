<?php

declare(strict_types=1);

namespace App\Content\File\Form\Data;

use App\Content\File\Enum\ImageType;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints\File;

/**
 * @author  Sven Bröker <sven.broeker@doccheck.com>
 * @license 2024 DocCheck Community GmbH
 */
class EditProfileImageData
{
    #[File(
        maxSize: '1600Ki',
        filenameMaxLength: 50,
        extensions: ['jpg', 'jpeg', 'png']
    )]
    private ?UploadedFile $profileImage = null;

    private bool $deleteProfileImage = false;

    public function __construct(private ImageType $imageType)
    {
    }

    public function getProfileImage(): ?UploadedFile
    {
        return $this->profileImage;
    }

    public function setProfileImage(?UploadedFile $profileImage): EditProfileImageData
    {
        $this->profileImage = $profileImage;

        return $this;
    }

    public function deleteProfileImage(): bool
    {
        return $this->deleteProfileImage;
    }

    public function setDeleteProfileImage(bool $deleteProfileImage): EditProfileImageData
    {
        $this->deleteProfileImage = $deleteProfileImage;

        return $this;
    }

    public function getImageType(): ImageType
    {
        return $this->imageType;
    }
}
