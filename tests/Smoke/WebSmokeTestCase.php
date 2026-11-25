<?php

declare(strict_types=1);

namespace App\Tests\Smoke;

use App\Entity\Setting;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\SchemaTool;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Grundlage der Smoke-Tests: frische SQLite-Datenbank (.env.test) mit dem Schema aus dem Mapping und ein Benutzer.
 */
abstract class WebSmokeTestCase extends WebTestCase
{
    protected KernelBrowser $client;
    protected EntityManagerInterface $em;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->em = static::getContainer()->get(EntityManagerInterface::class);

        $metadata = $this->em->getMetadataFactory()->getAllMetadata();
        $tool = new SchemaTool($this->em);
        $tool->dropSchema($metadata);
        $tool->createSchema($metadata);
    }

    protected function createUser(string $email = 'smoke@example.org'): User
    {
        $user = new User();
        $user->setEmail($email);
        $user->setPassword('nicht-benutzt');
        $user->setRoles(['ROLE_USER']);

        $setting = new Setting();
        $setting->setUser($user);
        $setting->setMaximumSongDuration(30);
        $setting->setSongPlayTimeLimit(30);
        $setting->setGoalMusicEnabled(false);
        $setting->setGoalGifEnabled(false);

        $this->em->persist($user);
        $this->em->persist($setting);
        $this->em->flush();

        return $user;
    }

    protected function loginAs(?User $user = null): User
    {
        $user ??= $this->createUser();
        $this->client->loginUser($user);

        return $user;
    }
}
