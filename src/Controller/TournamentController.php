<?php

namespace App\Controller;

use App\Content\Tournament\Calculation\TournamentCalculationService;
use App\Content\Tournament\TournamentService;
use App\Content\Tournament\TournamentState;
use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Round;
use App\Entity\Team;
use App\Entity\TeamList;
use App\Entity\Tournament;
use App\Form\ManageTournamentType;
use App\Form\TeamSelectionData;
use App\Form\TeamSelectionType;
use App\Form\TournamentType;
use App\Repository\TeamRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/tournament')]
final class TournamentController extends AbstractController
{
    public function __construct(private readonly TournamentService $tournamentService) {
    }

    #[Route('/list', name: 'tournament_list')]
    public function list(EntityManagerInterface $entityManager): Response
    {
        // Fetch all tournaments, including participants
        $tournaments = $entityManager->getRepository(Tournament::class)->findAll();

        return $this->render('tournament/list.html.twig', [
            'tournaments' => $tournaments,
        ]);
    }

    #[Route('/create', name: 'tournament_create', methods: ['GET', 'POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        // Create a new Tournament instance
        $tournament = new Tournament();

        // Create the form
        $form = $this->createForm(TournamentType::class, $tournament);
        $form->handleRequest($request);

        // Handle form submission
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($tournament);
            $entityManager->flush();

            // Redirect to a success page or list of tournaments
            return $this->redirectToRoute('tournament_list'); // Update to your actual route for tournaments
        }

        // Render the form in the template
        return $this->render('tournament/create.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/manage/{id}', name: 'tournament_manage')]
    public function manage(
        Tournament $tournament,
        Request $request,
        EntityManagerInterface $entityManager
    ): Response {
        // Create a form for managing the tournament
        $form = $this->createForm(ManageTournamentType::class, $tournament);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var Tournament $tournament */
            $tournament = $form->getData();
            $allowedChoices = $this->tournamentService->calculateTeamAmountPerParticipant($tournament);
            $tournament->setNumberOfChoices($allowedChoices);

            $entityManager->flush();

            $this->addFlash('success', 'Tournament updated successfully.');

            return $this->redirectToRoute('tournament_manage', ['id' => $tournament->getId()]);
        }

        return $this->render('tournament/manage.html.twig', [
            'tournament' => $tournament,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{tournamentId}/participant/{participantId}/select-teams', name: 'tournament_team_selection')]
    public function selectTeams(
        #[MapEntity(id: 'tournamentId')] Tournament $tournament,
        #[MapEntity(id: 'participantId')] Participant $participant,
        Request $request,
        EntityManagerInterface $entityManager
    ): Response {
        // Fetch the existing TeamList or create a new one
        $teamList = $entityManager->getRepository(TeamList::class)->findOneBy([
            'tournament' => $tournament,
            'participant' => $participant,
        ]);

        if (!$teamList) {
            $teamList = new TeamList();
            $teamList->setTournament($tournament);
            $teamList->setParticipant($participant);
        }

        // Link the form to the team list
        $excludeTeams = '0';
        if ($teamList->getTeams()->count() > 0) {
            $excludeTeams = implode(
                ',',
                array_map(
                    fn(Team $team) => $team->getId(),
                    $teamList->getTeams()->toArray()
                )
            );
        }

        $form = $this->createForm(
            TeamSelectionType::class,
            new TeamSelectionData(),
            ['excluded_teams' => $excludeTeams]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var TeamSelectionData $data */
            $data = $form->getData();
            $teamList->addTeam($data->getTeam());
            // After selection, persist or flush the updated team list
            $entityManager->persist($teamList);
            $entityManager->flush();

            $this->addFlash('success', 'Teams successfully selected!');
            return $this->redirectToRoute(
                'tournament_team_selection',
                ['tournamentId' => $tournament->getId(), 'participantId' => $participant->getId()]
            );
        }

        // Render the form
        return $this->render('tournament/select_teams.html.twig', [
            'tournament' => $tournament,
            'participant' => $participant,
            'listCount' => $teamList->getTeams()->count(),
            'form' => $form->createView(),
        ]);
    }

    #[Route('/remove/{teamListId}/{teamId}', name: 'tournament_team_remove')]
    public function removeTeams(
        #[MapEntity(id: 'teamListId')] TeamList $teamList,
        #[MapEntity(id: 'teamId')] Team $team,
        EntityManagerInterface $entityManager
    ): Response {
        $teamToRemove = array_search($team, $teamList->getTeams()->toArray());
        if ($teamToRemove !== false) {
            $teamList->removeTeam($team);
            $entityManager->persist($teamList);
            $entityManager->flush();
        }

        $this->addFlash('success', 'Teams successfully selected!');
        return $this->redirectToRoute(
            'tournament_team_selection',
            [
                'tournamentId' => $teamList->getTournament()->getId(),
                'participantId' => $teamList->getParticipant()->getId()
            ]
        );
    }

    #[Route('/calculate/{id}', name: 'tournament_calculate')]
    public function calculate(Tournament $tournament, TournamentService $tournamentService): Response
    {
        if ($tournament->getState() !== TournamentState::OPEN || !$this->tournamentService->isValid($tournament)) {
            return $this->redirectToRoute('dashboard');
        }

        $tournamentService->calculateRoundsForTournament($tournament);

        $this->addFlash('success', 'Tournament brackets/standings have been calculated.');

        return $this->redirectToRoute('tournament_manage', ['id' => $tournament->getId()]);
    }

    #[Route('/detail/{id}', name: 'tournament_detail')]
    public function detail(Tournament $tournament): Response
    {
        $numberOfRounds = $tournament->getRounds()->count();
        $fixtures = [];
        for ($roundNr = 1; $roundNr <= $numberOfRounds; $roundNr++) {
            $fixtures = array_merge($fixtures, $tournament->getRoundByNumber($roundNr)->getFixtures()->toArray());
        }

        $matrix = $this->tournamentService->generateTournamentMatrix($numberOfRounds, $fixtures);

        return $this->render('tournament/detail.html.twig', [
            'tournament' => $tournament,
            'matrix' => $matrix,
        ]);
    }
}
