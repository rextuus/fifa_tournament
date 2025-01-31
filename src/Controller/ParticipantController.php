<?php

namespace App\Controller;

use App\Content\File\Enum\ImageType;
use App\Content\File\Form\Data\EditProfileImageData;
use App\Content\File\Form\EditProfileImageType;
use App\Content\File\ImageService;
use App\Content\QrCodeGenerator;
use App\Entity\Participant;
use App\Form\ParticipantType;
use App\Repository\ParticipantRepository;
use App\Repository\PlayerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

#[Route('/participant')]
final class ParticipantController extends BaseController
{
    public function __construct(protected ImageService $imageService, protected QrCodeGenerator $qrCodeGenerator)
    {
        parent::__construct($imageService);
    }

    #[Route('/manage', name: 'participant_manage')]
    public function manage(Request $request, ParticipantRepository $participantRepository): Response
    {
        $participants = $participantRepository->findAll();

        return $this->render('participant/list.html.twig', [
            'participants' => $participants,
        ]);
    }

    #[Route('/create', name: 'participant_create')]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        // Create a new Participant instance
        $participant = new Participant();

        // Create and handle the form
        $form = $this->createForm(ParticipantType::class, $participant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Save the participant to the database
            $entityManager->persist($participant);
            $entityManager->flush();

            // Redirect to the participant management page
            return $this->redirectToRoute('participant_manage');
        }

        // Render the form
        return $this->render('participant/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/edit/{id}', name: 'participant_edit')]
    public function edit(
        Request $request,
        Participant $participant,
        EntityManagerInterface $entityManager,
        PlayerRepository $playerRepository,
    ): Response {
        // Fetch all players to display in the form
        $players = $playerRepository->findAll();

        // Create the form and pre-fill it with the participant's current data
        $form = $this->createForm(ParticipantType::class, $participant, [
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Persist changes
            $entityManager->flush();

            // Redirect after successful edit
            return $this->redirectToRoute('participant_manage');
        }

        $qrCodeDataUri = $this->qrCodeGenerator->generateQrCode('participant_edit_profile_image_full', $participant->getId());

        // Render the edit template
        return $this->render('participant/edit.html.twig', [
            'form' => $form->createView(),
            'participant' => $participant,
            'qrCodeDataUri' => $qrCodeDataUri,
            'players' => $players,  // Pass the players list to the template
        ]);
    }

    #[Route('/edit/profile-image/{id}', name: 'participant_edit_profile_image')]
    public function editProfileImageAjax(Participant $participant, Request $request): Response
    {
        $form = $this->createAjaxForm(
            EditProfileImageType::class,
            new EditProfileImageData(ImageType::PARTICIPANT_PROFILE_IMAGE),
            $request,
            [
                'show_delete_button' => false,
                'current_image_url' => $participant->getImageFile(),
                'default_image_path' => 'build/images/thumbnails/client_default.png',
            ],
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->updateProfileImage($participant, $form->getData());
        }

        return $this->renderAjaxForm($form);
    }

    #[Route('/edit/profile-image-full/{id}', name: 'participant_edit_profile_image_full')]
    public function editProfileImage2(Participant $participant, Request $request): Response
    {
        $form = $this->createForm(
            EditProfileImageType::class,
            new EditProfileImageData(ImageType::PARTICIPANT_PROFILE_IMAGE),
            [
                'show_delete_button' => false,
                'show_save_button' => true,
                'current_image_url' => $participant->getImageFile(),
                'default_image_path' => 'build/images/thumbnails/client_default.png',
            ],
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->updateProfileImage($participant, $form->getData());
        }

        return $this->render('match/edit_plain.html.twig', [
            'team' => $participant,
            'form' => $form,
        ]);
    }

    // Todo remove or improve
    #[Route('/participant/delete/{id}', name: 'participant_delete', methods: ['POST'])]
    public function delete(Request $request, Participant $participant, EntityManagerInterface $entityManager): Response
    {
        // Generate a CSRF token for security
        $submittedToken = $request->request->get('_token');

        // Check if the CSRF token is valid
        if ($this->isCsrfTokenValid('delete-participant', $submittedToken)) {
            $entityManager->remove($participant);
            $entityManager->flush();

            // Optionally, add a flash message for feedback
            $this->addFlash('success', 'Participant deleted successfully.');
        } else {
            // Optionally, add a flash message for invalid CSRF token
            $this->addFlash('error', 'Invalid CSRF token.');
        }

        // Redirect back to the participant management page
        return $this->redirectToRoute('participant_manage');
    }
}
