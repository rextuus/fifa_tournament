<?php

namespace App\Controller;

use App\Content\File\Enum\ImageType;
use App\Content\File\Form\Data\EditProfileImageData;
use App\Content\File\Form\EditProfileImageType;
use App\Content\File\ImageService;
use App\Content\Team\TeamService;
use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Team;
use App\Repository\ParticipantRepository;
use App\Repository\PlayerRepository;
use App\Repository\TeamRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/match')]
final class FixtureController extends AbstractController
{
    #[Route('/detail/{id}', name: 'match_detail')]
    public function detail(Fixture $fixture): Response
    {
        return $this->render('match/detail.html.twig', [
            'fixture' => $fixture,
        ]);
    }
}
