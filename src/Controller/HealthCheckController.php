<?php

declare(strict_types=1);

namespace App\Controller;

use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Für Healthchecks (Docker, Komodo, externe Überwachung): prüft den ganzen Weg Webserver → PHP → Datenbank.
 * Ohne Anmeldung erreichbar (security.yaml, access_control).
 */
final readonly class HealthCheckController
{
    public function __construct(
        private Connection $connection,
    ) {}

    #[Route('/healthz', name: 'app_health', methods: ['GET'])]
    public function __invoke(): JsonResponse
    {
        try {
            $this->connection->executeQuery('SELECT 1');
            $database = 'ok';
        } catch (\Throwable) {
            $database = 'unavailable';
        }

        $response = new JsonResponse(
            ['status' => 'ok' === $database ? 'ok' : 'degraded', 'database' => $database],
            'ok' === $database ? Response::HTTP_OK : Response::HTTP_SERVICE_UNAVAILABLE,
        );
        $response->headers->set('Cache-Control', 'no-store, private');

        return $response;
    }
}
