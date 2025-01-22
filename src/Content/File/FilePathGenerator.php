<?php

declare(strict_types=1);

namespace App\Content\File;

use App\Content\File\Enum\FileExtension;
use Symfony\Component\String\ByteString;

class FilePathGenerator
{
    public function generateRandomFilePath(int $depth = 2): string
    {
        $chars = ByteString::fromRandom($depth * 2)->lower()->toString();

        return implode(DIRECTORY_SEPARATOR, str_split($chars, 2));
    }

    public function getFullFilePath(string $path, string $fileName, FileExtension $fileType): string
    {
        return sprintf(
            '%s/%s.%s',
            $path,
            $fileName,
            $fileType->value
        );
    }
}
