<?php

namespace App\Controller;

use App\Content\File\Enum\ImageType;
use App\Content\File\Form\Data\EditProfileImageData;
use App\Content\File\Form\EditProfileImageType;
use App\Content\File\ImageService;
use App\Entity\Team;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/team')]
final class TeamController extends BaseController
{
    public function __construct(protected ImageService $imageService)
    {
        parent::__construct($imageService);
    }

    #[Route('/edit/{id}', name: 'team_edit')]
    public function edit(Team $team, Request $request): Response
    {
        $form = $this->createForm(
            EditProfileImageType::class,
            new EditProfileImageData(ImageType::USER_PROFILE_IMAGE),
            [
                'show_delete_button' => (bool) $team->getImageFile(),
                'current_image_url' => $team->getImageFile(),
                'default_image_path' => 'build/images/thumbnails/client_default.png',
            ]
        );

        //        dd($form);

        $form->handleRequest($request);

        return $this->render('match/edit.html.twig', [
            'team' => $team,
            'form' => $form,
        ]);
    }

    #[Route('/edit/profile-image/{id}', name: 'team_edit_profile_image')]
    public function editProfileImageAjax(Team $team, Request $request): Response
    {
        $form = $this->createAjaxForm(
            EditProfileImageType::class,
            new EditProfileImageData(ImageType::USER_PROFILE_IMAGE),
            $request,
            [
                'show_delete_button' => false,
                'current_image_url' => $team->getImageFile(),
                'default_image_path' => 'build/images/thumbnails/client_default.png',
            ],
        );

        //        dd($form);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            dd($form->getData());

            //            return $this->returnAjaxSuccessResponse(
            //                'app_client_detail',
            //                ['clientId' => $client->getClientId()],
            //                $request
            //            );
        }

        return $this->renderAjaxForm($form);
    }

    #[Route('/edit/profile-image-full/{id}', name: 'team_edit_profile_image2')]
    public function editProfileImage2(Team $team, Request $request): Response
    {
        $form = $this->createForm(
            EditProfileImageType::class,
            new EditProfileImageData(ImageType::TEAM_IMAGE),
            [
                'show_delete_button' => false,
                'show_save_button' => true,
                'current_image_url' => $team->getImageFile(),
                'default_image_path' => 'build/images/thumbnails/client_default.png',
            ],
        );

        //        dd($form);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->imageService->updateProfileImage($team, $form->getData(), null);
        }

        return $this->render('match/edit_plain.html.twig', [
            'team' => $team,
            'form' => $form,
        ]);
    }
}
