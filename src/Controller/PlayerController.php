<?php

namespace App\Controller;

use App\Content\File\Enum\ImageType;
use App\Content\File\Form\Data\EditProfileImageData;
use App\Content\File\Form\EditProfileImageType;
use App\Content\File\ImageService;
use App\Content\QrCodeGenerator;
use App\Entity\Player;
use App\Form\PlayerType;
use App\Repository\PlayerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/player')]
final class PlayerController extends BaseController
{
    public function __construct(
        protected readonly ImageService $imageService,
        private readonly QrCodeGenerator $qrCodeGenerator,
    ) {
        parent::__construct($imageService);
    }

    #[Route('/create', name: 'player_create')]
    public function createPlayer(
        Request $request,
        EntityManagerInterface $entityManager,
        PlayerRepository $playerRepository,
    ): Response {
        // Handle form submission
        if ($request->isMethod('POST')) {
            // Get form data
            $playerIdent = $request->request->get('playerIdent');

            // Create and persist the new Player
            $player = new Player();
            $player->setIdent($playerIdent);
            $entityManager->persist($player);
            $entityManager->flush();

            // Redirect to the same page to avoid duplicate submissions
            return $this->redirectToRoute('player_create');
        }

        // Fetch all players to display in the template
        $players = $playerRepository->findAll();

        // Render template and pass players to it
        return $this->render('player/create.html.twig', [
            'players' => $players,
        ]);
    }

    #[Route('/edit/{id}', name: 'player_edit')]
    public function edit(Request $request, Player $player, EntityManagerInterface $entityManager): Response
    {
        // Create a form for editing the player
        $form = $this->createForm(PlayerType::class, $player);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Persist the updated player information
            $entityManager->flush();

            // Redirect back to the player management page
            return $this->redirectToRoute('player_create');
        }

        $qrCodeDataUri = $this->qrCodeGenerator->generateQrCode(
            'player_edit_profile_image_full',
            $player->getId()
        );

        // Render the player edit template
        return $this->render('player/edit.html.twig', [
            'form' => $form->createView(),
            'qrCodeDataUri' => $qrCodeDataUri,
            'player' => $player,
        ]);
    }

    #[Route('/edit/profile-image/{id}', name: 'player_edit_profile_image')]
    public function editProfileImageAjax(Player $player, Request $request): Response
    {
        $form = $this->createAjaxForm(
            EditProfileImageType::class,
            new EditProfileImageData(ImageType::PLAYER_PROFILE_IMAGE),
            $request,
            [
                'show_delete_button' => false,
                'current_image_url' => $player->getImageFile(),
                'default_image_path' => 'build/images/thumbnails/client_default.png',
            ],
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->updateProfileImage($player, $form->getData());
        }

        return $this->renderAjaxForm($form);
    }

    #[Route('/edit/profile-image-full/{id}', name: 'player_edit_profile_image_full')]
    public function editProfileImage2(Player $player, Request $request): Response
    {
        $form = $this->createForm(
            EditProfileImageType::class,
            new EditProfileImageData(ImageType::PLAYER_PROFILE_IMAGE),
            [
                'show_delete_button' => false,
                'show_save_button' => true,
                'current_image_url' => $player->getImageFile(),
                'default_image_path' => 'build/images/thumbnails/client_default.png',
            ],
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->updateProfileImage($player, $form->getData());
        }

        return $this->render('match/edit_plain.html.twig', [
            'team' => $player,
            'form' => $form,
        ]);
    }
}
