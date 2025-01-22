<?php

declare(strict_types=1);

namespace App\Content\File\Flysystem;

use League\Flysystem\FilesystemOperator;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class FilesystemProvider
{
    public const IDENT_IMAGE = 'image';
    public const IDENT_PUBLIC_IMAGE = 'public_image';

    public function __construct(
        private readonly FilesystemOperator $imageFilesystem,
    ) {
    }

    public function getFilesystem(string $identifier): FilesystemOperator
    {
        return match ($identifier) {
            self::IDENT_IMAGE => $this->imageFilesystem,
            default => throw new \InvalidArgumentException('Filesystem identifier "'.$identifier.'" is not supported.'),
        };
    }

    public function getFilesystemPrefix(string $identifier): string
    {
        return match ($identifier) {
            default => throw new \InvalidArgumentException('Filesystem prefix for identifier "'.$identifier.'" is not supported.'),
        };
    }

    /**
     * @return array<FilesystemOperator>
     */
    public function getFilesystems(): array
    {
        return [
            self::IDENT_IMAGE => $this->imageFilesystem,
        ];
    }
}
