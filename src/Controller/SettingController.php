<?php

namespace App\Controller;

use App\Content\SettingService;
use App\Entity\User;
use App\Form\SettingType;
use App\Message\CheckQueue;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/setting')]
final class SettingController extends AbstractController
{


    public function __construct(
        private readonly SettingService $settingService,
        private readonly EntityManagerInterface $entityManager,
    )
    {
    }

    #[Route('/edit', name: 'setting_edit')]
    public function edit(
        Request $request,
    ): RedirectResponse|Response {
        /** @var User $currentUser */
        $currentUser = $this->getUser();

        // Fetch or initialize the settings
        $setting = $this->settingService->getSettingForUser($currentUser);

        $queueIsRunning = true;
        if ($setting->getQueueCheck() !== null){
            $queueIsRunning = false;
        }

        // Create the form
        $form = $this->createForm(SettingType::class, $setting);
        $form->handleRequest($request);

        // Handle form submission
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($setting);
            $this->entityManager->flush();

            $this->addFlash('success', 'Settings updated successfully!');

            // Redirect back to prevent re-submission and satisfy Turbo
            return $this->redirectToRoute('setting_edit');
        }

        return $this->render('setting/edit.html.twig', [
            'form' => $form,
            'queueIsRunning' => $queueIsRunning,
        ]);
    }

    #[Route('/check', name: 'check_queue')]
    public function triggerQueueCheck(MessageBusInterface $messageBus): Response
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();
        $messageBus->dispatch(new CheckQueue($currentUser->getId()));

        $setting = $this->settingService->getSettingForUser($currentUser);
        $setting->setQueueCheck(new DateTime());

        $this->entityManager->persist($setting);
        $this->entityManager->flush();

        return $this->redirectToRoute('setting_edit');
    }
}
