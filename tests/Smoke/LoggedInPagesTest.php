<?php

declare(strict_types=1);

namespace App\Tests\Smoke;

use App\Content\Tournament\TournamentLevel;
use App\Entity\Tournament;

final class LoggedInPagesTest extends WebSmokeTestCase
{
    public function testDashboardRenders(): void
    {
        $this->loginAs();
        $this->client->request('GET', '/');

        self::assertResponseIsSuccessful();
    }

    public function testTournamentCreateListAndManage(): void
    {
        $this->loginAs();

        $crawler = $this->client->request('GET', '/tournament/create');
        self::assertResponseIsSuccessful();

        $form = $crawler->filter('form')->form();
        $name = $form->getName();
        $form[$name . '[ident]'] = 'Smoke-Cup';
        $form[$name . '[level]'] = (string) TournamentLevel::QUARTER_FINAL->value;
        $form[$name . '[type]'] = 'classic';
        $this->client->submit($form);
        self::assertResponseRedirects('/tournament/list');

        $this->client->followRedirect();
        self::assertResponseIsSuccessful();
        self::assertSelectorTextContains('body', 'Smoke-Cup');

        $tournament = $this->em->getRepository(Tournament::class)->findOneBy(['ident' => 'Smoke-Cup']);
        self::assertNotNull($tournament);

        $this->client->request('GET', '/tournament/manage/' . $tournament->getId());
        self::assertResponseIsSuccessful();

        $this->client->request('GET', '/tournament/detail/' . $tournament->getId());
        self::assertResponseIsSuccessful();
    }

    public function testParticipantManagementRenders(): void
    {
        $this->loginAs();
        $this->client->request('GET', '/participant/manage');

        self::assertResponseIsSuccessful();
    }

    public function testUnknownTournamentIs404(): void
    {
        $this->loginAs();
        $this->client->request('GET', '/tournament/manage/999999');

        self::assertResponseStatusCodeSame(404);
    }
}
