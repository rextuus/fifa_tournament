<?php

namespace App\Controller;

use App\Content\Fixture\ScoringMap;
use App\Entity\Fixture;
use App\Form\Data\FixtureResultData;
use App\Form\FixtureResultType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/match')]
final class FixtureController extends BaseController
{
    #[Route('/detail/{id}', name: 'match_detail')]
    public function detail(Fixture $fixture, Request $request): Response
    {
//        $data = (new FixtureResultData());
//        $form = $this->createForm(FixtureResultType::class, $data);
//
//        $form->handleRequest($request);

//        if ($form->isSubmitted() && $form->isValid()) {
//            dd($form->getData());
//            return $this->redirectToRoute('match_detail', ['id' => $fixture->getId()]);
//        }

        return $this->render('match/detail.html.twig', [
//            'data' => $data,
//            'form' => $form,
            'fixture' => $fixture,
        ]);
    }

    #[Route('/edit/result/{id}', name: 'match_edit_result')]
    public function editProfileImageAjax(Fixture $fixture, Request $request, EntityManagerInterface $entityManager): Response
    {
        $data = (new FixtureResultData());
        $data->setHomeGoals($fixture->getHomeGoals());
        $data->setAwayGoals($fixture->getAwayGoals());

        $players = array_merge(
            $fixture->getHomeParticipant()->getPlayers()->toArray(),
            $fixture->getAwayParticipant()->getPlayers()->toArray()
        );

        $soringMap = new ScoringMap($players, $fixture->getScorers());
        foreach ($soringMap->getMap() as $player => $scoreValue) {
            $data->setPlayerGoal($player, $scoreValue);
        }

        $form = $this->createAjaxForm(FixtureResultType::class, $data,$request, ['players' => $players]);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var FixtureResultData $data */
            $data = $form->getData();

            $fixture->setHomeGoals($data->getHomeGoals());
            $fixture->setAwayGoals($data->getAwayGoals());
            $fixture->setPlayed(new \DateTime());
            $fixture->setScorers($data->getPlayerGoals());

            $entityManager->persist($fixture);
            $entityManager->flush();

            return $this->returnAjaxSuccessResponse(
                'match_detail',
                ['id' => $fixture->getId()],
                $request
            );
        }

        return $this->renderAjaxForm($form);
    }
}
