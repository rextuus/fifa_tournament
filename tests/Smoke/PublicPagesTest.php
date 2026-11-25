<?php

declare(strict_types=1);

namespace App\Tests\Smoke;

final class PublicPagesTest extends WebSmokeTestCase
{
    public function testHealthzReportsDatabase(): void
    {
        $this->client->request('GET', '/healthz');

        self::assertResponseIsSuccessful();
        self::assertJsonStringEqualsJsonString(
            '{"status":"ok","database":"ok"}',
            (string) $this->client->getResponse()->getContent(),
        );
    }

    public function testLoginPageRenders(): void
    {
        $this->client->request('GET', '/login');

        self::assertResponseIsSuccessful();
        self::assertSelectorExists('form input[name="_username"]');
        // Registrierung ist in .env.test abgeschaltet: kein Knopf, Seite 404.
        self::assertSelectorNotExists('a[href="/register"]');
    }

    public function testRegistrationIsDisabled(): void
    {
        $this->client->request('GET', '/register');

        self::assertResponseStatusCodeSame(404);
    }

    public function testStartPageRequiresLogin(): void
    {
        $this->client->request('GET', '/');

        self::assertResponseRedirects('/login');
    }
}
