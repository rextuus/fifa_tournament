<?php

declare(strict_types=1);

namespace App\Content;

use App\Entity\Setting;
use App\Entity\User;
use App\Repository\SettingRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

class SettingService
{

    public function __construct(private SettingRepository $settingRepository, private EntityManagerInterface $entityManager)
    {
    }

    public function createSettingForUser(User $user): Setting
    {
        $setting = $this->settingRepository->findOneBy(['user' => $user]);
        if (!$setting) {
            $setting = new Setting();
            $setting->setUser($user);
            $setting->setMaximumSongDuration(60);
            $setting->setSongPlayTimeLimit(60);

            $this->entityManager->persist($setting);
            $this->entityManager->flush();
        }

        return $setting;
    }

    public function getSettingForUser(User $user): Setting
    {
        $setting = $this->settingRepository->findOneBy(['user' => $user]);
        if (!$setting) {
            $setting = $this->createSettingForUser($user);
        }

        return $setting;
    }
}
