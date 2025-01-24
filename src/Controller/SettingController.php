<?php

namespace App\Controller;

use App\Content\SettingService;
use App\Entity\User;
use App\Form\SettingType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/setting')]
final class SettingController extends AbstractController
{
    #[Route('/edit', name: 'setting_edit')]
    public function edit(
        Request $request,
        SettingService $settingService,
        EntityManagerInterface $entityManager
    ): RedirectResponse|Response {
        /** @var User $currentUser */
        $currentUser = $this->getUser();

        // Fetch or initialize the settings
        $setting = $settingService->getSettingForUser($currentUser);

        // Create the form
        $form = $this->createForm(SettingType::class, $setting);
        $form->handleRequest($request);

        // Handle form submission
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($setting);
            $entityManager->flush();

            $this->addFlash('success', 'Settings updated successfully!');

            // Redirect back to prevent re-submission and satisfy Turbo
            return $this->redirectToRoute('setting_edit');
        }

        return $this->render('setting/edit.html.twig', [
            'form' => $form,
        ]);
    }
}
