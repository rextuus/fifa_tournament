<?php

namespace App\Controller;

use App\Content\Participant\ParticipantService;
use App\Content\Team\TeamService;
use App\Content\Tournament\Calculation\TableFilter;
use App\Content\Tournament\TournamentService;
use App\Content\Tournament\TournamentState;
use App\Content\Tournament\TournamentType;
use App\Entity\BattleRound;
use App\Entity\Fixture;
use App\Entity\Participant;
use App\Entity\Team;
use App\Entity\TeamList;
use App\Entity\Tournament;
use App\Form\AddSinglePlayerBattleTournamentType;
use App\Form\Data\AddSinglePlayerBattleTournamentData;
use App\Form\ManageBattleTournamentType;
use App\Form\ManageTournamentType;
use App\Form\TeamSelectionData;
use App\Form\TeamSelectionType;
use App\Form\TournamentCreateType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/tournament')]
final class TournamentController extends AbstractController
{
    public function __construct(
        private readonly TournamentService $tournamentService,
        private readonly TeamService $teamService,
    ) {
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
        $form = $this->createForm(TournamentCreateType::class, $tournament);
        $form->handleRequest($request);

        // Handle form submission
        if ($form->isSubmitted() && $form->isValid()) {
            if($tournament->getType() === TournamentType::GROUP_BATTLE){
                $battleRound = new BattleRound();
                $battleRound->setTournament($tournament);
                $entityManager->persist($battleRound);
            }

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
        if ($tournament->getType() === TournamentType::GROUP_BATTLE){
            return $this->redirectToRoute('tournament_manage_group_battle', ['id' => $tournament->getId()]);
        }

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

    #[Route('/manage-group/{id}', name: 'tournament_manage_group_battle')]
    public function manageGroupBattle(Tournament $tournament, Request $request): Response {
        if ($tournament->getType() !== TournamentType::GROUP_BATTLE){
            return $this->redirectToRoute('tournament_manage', ['id' => $tournament->getId()]);
        }

        $showAddPlayer = false;
        if ($tournament->getRounds()->count() === 1){
            $showAddPlayer = true;
        }

        $form = $this->createForm(ManageBattleTournamentType::class, $tournament->getBattleRound());
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var BattleRound $battleRound */
            $battleRound = $form->getData();

            $this->tournamentService->addAndRemovePlayersToBattleRound($battleRound);

            return $this->redirectToRoute('tournament_manage_group_battle', ['id' => $tournament->getId()]);
        }

        $addForm = $this->createForm(
            AddSinglePlayerBattleTournamentType::class,
            new AddSinglePlayerBattleTournamentData()
        );

        $addForm->handleRequest($request);

        if ($addForm->isSubmitted() && $addForm->isValid()) {
            $playerToAdd = $addForm->getData()->getPlayer();
            // check Tournament not has this player already
            $players = $tournament->getBattleRound()->getPlayers();
            $hasPlayer = false;
            foreach ($players as $player) {
                if ($player === $playerToAdd) {
                    $hasPlayer = true;
                }
            }

            if ($hasPlayer){
                throw new \Exception('Player already added');
            }

            $this->tournamentService->addPlayerToBattleRound($playerToAdd, $tournament->getBattleRound());


            return $this->redirectToRoute('tournament_manage_group_battle', ['id' => $tournament->getId()]);
        }

        return $this->render('tournament/manage_battle.html.twig', [
            'tournament' => $tournament,
            'form' => $form->createView(),
            'addForm' => $addForm->createView(),
            'showAddPlayer' => $showAddPlayer,
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


            // check if for battle tournament some team is not set in round 1
            if ($tournament->getType() === TournamentType::GROUP_BATTLE) {
                $fallBackTeam = $this->teamService->getFallbackTeam();

                $round = $tournament->getRoundByNumber(1);
                foreach ($round->getFixtures() as $fixture) {
                    if ($fixture->getHomeParticipant() === $participant && $fixture->getHomeTeam() === $fallBackTeam) {
                        $fixture->setHomeTeam($data->getTeam());
                        $entityManager->persist($fixture);
                    }
                    if ($fixture->getAwayParticipant() === $participant && $fixture->getAwayTeam() === $fallBackTeam) {
                        $fixture->setAwayTeam($data->getTeam());
                        $entityManager->persist($fixture);
                    }
                }

                $entityManager->flush();
            }

            return $this->redirectToRoute(
                'tournament_team_selection',
                ['tournamentId' => $tournament->getId(), 'participantId' => $participant->getId()]
            );
        }

        $allowed = $tournament->getNumberOfChoices();
        if ($tournament->getType() === TournamentType::GROUP_BATTLE){
            $allowed = 1;
        }

        // Render the form
        return $this->render('tournament/select_teams.html.twig', [
            'tournament' => $tournament,
            'participant' => $participant,
            'listCount' => $teamList->getTeams()->count(),
            'allowed' => $allowed,
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
        if ($tournament->getType() === TournamentType::GROUP_BATTLE) {
            return $this->redirectToRoute('tournament_detail_group_battle', ['id' => $tournament->getId()]);
        }

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

    #[Route('/detail-group/{id}/{roundNr}', name: 'tournament_detail_group_battle')]
    public function detailGroupBattle(Tournament $tournament, int $roundNr = 1): Response
    {
        $fixtureOrder = $tournament->getBattleRound()->getFixtureOrder();
        $round = $tournament->getRoundByNumber($roundNr);
//dd($round->getFixtures());
        $orderedFixtures = $round->getFixtures()->toArray();
        $table = $this->tournamentService->calculateBattleRoundTable($tournament, $roundNr);
        $goalLeader = $table->getOrderedBy(TableFilter::PERSONAL_GOALS)[0];
        $shootingGallery = $table->getOrderedBy(TableFilter::AGAINST_GOALS)[0];

        if ($roundNr === 1){
            $orderedFixtures = $round->getFixturesByOrder($fixtureOrder);
        }


        if ($roundNr > 1){

            $table = $this->tournamentService->calculateBattleRoundTableByParticipants($tournament, $roundNr);
            $playerTableRound1 = $this->tournamentService->calculateBattleRoundTable($tournament, 1);
            $playerTableRound2 = $this->tournamentService->calculateBattleRoundTable($tournament, $roundNr);

            $merged = $playerTableRound1->mergeWith($playerTableRound2);

            $goalLeader = $merged->getOrderedBy(TableFilter::PERSONAL_GOALS)[0];
            $shootingGallery = $merged->getOrderedBy(TableFilter::AGAINST_GOALS)[0];
        }

        $playedCount = count(array_filter(
            $orderedFixtures,
            function (Fixture $fixture){
                return $fixture->getPlayed() !== null;
            }
        ));


        $rankedPlayers = $table->getOrderedBy(TableFilter::POINTS);

        $hasNext = $tournament->getRounds()->count() - $roundNr > 0;
        return $this->render('tournament/detail_battle.html.twig', [
            'tournament' => $tournament,
            'orderedFixtures' => $orderedFixtures,
            'goalLeader' => $goalLeader,
            'shootingGallery' => $shootingGallery,
            'rankedPlayers' => $rankedPlayers,
            'hasNext' => $hasNext,
            'next' => $roundNr + 1,
            'playedCount' => $playedCount,
        ]);
    }

}
