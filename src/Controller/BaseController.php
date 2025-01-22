<?php

declare(strict_types=1);

namespace App\Controller;

use App\Content\File\Form\Data\EditProfileImageData;
use App\Content\File\ImageAwareInterface;
use App\Content\File\ImageService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class BaseController extends AbstractController
{
    public function __construct(private readonly ImageService $imageService)
    {
    }

    protected function updateProfileImage(ImageAwareInterface $entity, EditProfileImageData $data): void
    {
        $this->imageService->updateProfileImage($entity, $data, null);
    }

    protected function createAjaxForm(
        string $formTypeClass,
        mixed $data,
        Request $request,
        array $options = [],
    ): FormInterface {
        $options['action'] = $request->getUri();

        return $this->createForm($formTypeClass, $data, $options);
    }

    protected function renderAjaxForm(FormInterface $form): Response
    {
        return $this->render('layout/_form.html.twig', ['form' => $form]);
    }

    /**
     * @param array<string, mixed> $routeParams
     */
    protected function returnAjaxSuccessResponse(
        string $routeName,
        array $routeParams,
        Request $request,
        bool $ajaxRedirect = false,
        bool $redirectToPage = false,
    ): RedirectResponse|Response {
        if ($request->isXmlHttpRequest()) {
            $headers = [];
            if ($ajaxRedirect) {
                $headers['X-REDIRECT-URI'] = $this->generateUrl($routeName, $routeParams);
            }
            if ($redirectToPage) {
                $headers['X-REDIRECT-TO-PAGE'] = true;
            }

            return new Response(null, 204, $headers);
        }

        return $this->redirectToRoute($routeName, $routeParams);
    }
}
