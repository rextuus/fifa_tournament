<?php

declare(strict_types=1);

namespace App\Content\File\Imgproxy;

use Symfony\Component\DependencyInjection\Attribute\Autowire;

/**
 * Erzeugt signierte imgproxy-Pfade (HMAC-SHA256 über Salt + Pfad), wie bei wedora und optatio.
 * Die Signatur verhindert beliebige Transformationen. Ohne Schlüssel (lokal) ist imgproxy aus; dann liefert
 * ImageService das Original über ImageController aus.
 */
final readonly class ImgproxyUrlSigner
{
    public function __construct(
        #[\SensitiveParameter]
        #[Autowire(env: 'default::IMGPROXY_KEY')]
        private ?string $hexKey,
        #[\SensitiveParameter]
        #[Autowire(env: 'default::IMGPROXY_SALT')]
        private ?string $hexSalt,
    ) {}

    public function isEnabled(): bool
    {
        return '' !== (string) $this->hexKey && '' !== (string) $this->hexSalt;
    }

    /**
     * @param list<string> $processingOptions z. B. ['rs:fill:60:60', 'q:85']
     */
    public function sign(string $sourceUrl, array $processingOptions, string $extension = 'webp'): string
    {
        $path = '/';
        if ([] !== $processingOptions) {
            $path .= implode('/', $processingOptions) . '/';
        }
        $path .= self::base64Url($sourceUrl) . '.' . $extension;

        $key = self::decodeHex((string) $this->hexKey, 'IMGPROXY_KEY');
        $salt = self::decodeHex((string) $this->hexSalt, 'IMGPROXY_SALT');

        return '/' . self::base64Url(hash_hmac('sha256', $salt . $path, $key, true)) . $path;
    }

    private static function decodeHex(string $hex, string $name): string
    {
        $binary = '' !== $hex && 0 === (\strlen($hex) % 2) && ctype_xdigit($hex) ? hex2bin($hex) : false;
        if (false === $binary) {
            throw new \InvalidArgumentException(\sprintf('%s muss ein nicht-leerer Hex-String sein.', $name));
        }

        return $binary;
    }

    private static function base64Url(string $value): string
    {
        return rtrim(strtr(base64_encode($value), '+/', '-_'), '=');
    }
}
