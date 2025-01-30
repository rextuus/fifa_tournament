<?php

namespace App\Controller;

use App\Content\Fixture\FixtureService;
use App\Content\Fixture\ScoringMap;
use App\Content\SettingService;
use App\Content\Tournament\ResultType;
use App\Entity\Fixture;
use App\Entity\Result;
use App\Form\Data\FixtureResultData;
use App\Form\FixtureResultType;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/match')]
final class FixtureController extends BaseController
{
    #[Route('/detail/{id}', name: 'match_detail')]
    public function detail(Fixture $fixture, SettingService $settingService): Response
    {
//        $data = (new FixtureResultData());
//        $form = $this->createForm(FixtureResultType::class, $data);
//
//        $form->handleRequest($request);

//        if ($form->isSubmitted() && $form->isValid()) {
//            dd($form->getData());
//            return $this->redirectToRoute('match_detail', ['id' => $fixture->getId()]);
//        }
        $settings = $settingService->getSettingForUser($this->getUser());

        return $this->render('match/detail.html.twig', [
//            'data' => $data,
//            'form' => $form,
            'fixture' => $fixture,
            'settings' => $settings,
        ]);
    }

    #[Route('/edit/result/{id}', name: 'match_edit_result')]
    public function saveResult(
        Fixture $fixture,
        Request $request,
        EntityManagerInterface $entityManager,
        FixtureService $fixtureService
    ): Response {
        $fixtureService->checkTournamentRoundIsCompleted($fixture);

        $data = (new FixtureResultData());
        $data->setHomeGoals($fixture->getHomeGoals());
        $data->setAwayGoals($fixture->getAwayGoals());

        $players = array_merge(
            $fixture->getHomeParticipant()->getPlayers()->toArray(),
            $fixture->getAwayParticipant()->getPlayers()->toArray()
        );

        $scoringMap = $fixtureService->getScoringMap($fixture);
        foreach ($scoringMap->getMap() as $player => $scoreValue) {
            $data->setPlayerGoal($player, $scoreValue);
        }

        $form = $this->createAjaxForm(FixtureResultType::class, $data,$request, ['players' => $players]);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var FixtureResultData $data */
            $data = $form->getData();

            $fixture->setHomeGoals($data->getHomeGoals());
            $fixture->setAwayGoals($data->getAwayGoals());
            if (!$fixture->isTwoLeg()) {
                $fixture->setPlayed(new DateTime());
            }
            $fixture->setScorers($data->getPlayerGoals());

            $result = new Result();
            $result->setHomeGoals($data->getHomeGoals());
            $result->setAwayGoals($data->getAwayGoals());
            $result->setPlayerGoals($data->getPlayerGoals());
            $result->setPlayed(new DateTime());

            // check which leg was played
            if (!$fixture->isTwoLeg()) {
                $fixture->setFirstLeg($result);
                $fixture->setPlayed(new DateTime());
            } else {
                if ($fixture->getFirstLeg() === null) {
                    $fixture->setFirstLeg($result);
                    $fixture->setHomeGoals(0);
                    $fixture->setAwayGoals(0);
                    $fixture->setScorers([]);
                }else{
                    $fixture->setPlayed(null);
                    if ($fixture->getSecondLeg() === null) {
                        $fixture->setSecondLeg($result);
                        // check if is done now
                        $resultTypeLegOne = $fixture->getFirstLeg()->calculateType();
                        $resultTypeLegTwo = $result->calculateType();

                        $thirdRoundNeeded = false;
                        if ($resultTypeLegOne === ResultType::DRAW && $resultTypeLegTwo === ResultType::DRAW) {
                            $thirdRoundNeeded = true;
                        }
                        if ($resultTypeLegOne === ResultType::HOME && $resultTypeLegTwo === ResultType::AWAY) {
                            $thirdRoundNeeded = true;
                        }
                        if ($resultTypeLegOne === ResultType::AWAY && $resultTypeLegTwo === ResultType::HOME) {
                            $thirdRoundNeeded = true;
                        }
                        $fixture->setHomeGoals(0);
                        $fixture->setAwayGoals(0);
                        $fixture->setScorers([]);

                        if (!$thirdRoundNeeded) {
                            $fixture->setPlayed(new DateTime());
                        }
                    } else {
                        $fixture->setThirdLeg($result);
                        $fixture->setPlayed(new DateTime());
                    }
                }
            }

            $entityManager->persist($fixture);
            $entityManager->flush();

            $fixtureService->checkTournamentRoundIsCompleted($fixture);
            return $this->returnAjaxSuccessResponse(
                'match_detail',
                ['id' => $fixture->getId()],
                $request
            );
        }

        return $this->renderAjaxForm($form);
    }
}
