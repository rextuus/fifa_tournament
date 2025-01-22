<?php

declare(strict_types=1);

namespace App\Content\File\Enum;

enum FileType: string
{
    case PDF = 'pdf';
    case IMAGE = 'image';
    case XML = 'xml';

    public static function fromExtension(string $extension): ?FileType
    {
        switch ($extension) {
            case 'pdf':
                return self::PDF;
            case 'jpg':
            case 'jpeg':
            case 'png':
                return self::IMAGE;
            case 'xml':
                return self::XML;
            default:
                return null;
        }
    }
}
