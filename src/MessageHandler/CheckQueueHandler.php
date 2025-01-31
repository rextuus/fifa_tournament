<?php

namespace App\MessageHandler;

use App\Content\SettingService;
use App\Message\CheckQueue;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final class CheckQueueHandler
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly SettingService $settingService,
        private readonly EntityManagerInterface $entityManager,
    ) {
    }

    public function __invoke(CheckQueue $message): void
    {
        $user = $this->userRepository->find($message->getUserId());

        $settings = $this->settingService->getSettingForUser($user);
        $settings->setQueueCheck(null);
        $this->entityManager->persist($settings);
        $this->entityManager->flush();
    }
}
