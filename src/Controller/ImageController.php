<?php

declare(strict_types=1);

namespace App\Controller;

use App\Content\File\FileService;
use App\Entity\File;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Liefert das Original eines Bildes aus dem privaten Speicher (IMAGE_DIR). Nur für den Betrieb ohne imgproxy
 * (lokale Entwicklung); in Produktion erzeugt ImageService signierte /img/…-Adressen für imgproxy.
 * Wie alle Seiten außer Login/Healthz nur angemeldet erreichbar (security.yaml).
 */
final readonly class ImageController
{
    public function __construct(
        private FileService $fileService,
    ) {}

    #[Route('/media/original/{id:file}', name: 'app_image_original', methods: ['GET'])]
    public function original(File $file): Response
    {
        if (!$file->isImage()) {
            return new Response('', Response::HTTP_NOT_FOUND);
        }

        $stream = $this->fileService->readStream($file);
        $mime = match (strtolower($file->getExtension())) {
            'jpg', 'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'webp' => 'image/webp',
            default => 'image/png',
        };

        return new StreamedResponse(
            static function () use ($stream): void {
                fpassthru($stream);
                fclose($stream);
            },
            Response::HTTP_OK,
            [
                'Content-Type' => $mime,
                'Cache-Control' => 'private, max-age=3600',
                'X-Content-Type-Options' => 'nosniff',
            ],
        );
    }
}
