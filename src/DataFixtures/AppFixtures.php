<?php

namespace App\DataFixtures;

use App\Content\Fixture\FixtureService;
use App\Content\Team\StarRating;
use App\Content\Team\TeamImportService;
use App\Content\Tournament\TournamentLevel;
use App\Content\Tournament\TournamentService;
use App\Content\Tournament\TournamentState;
use App\Content\Tournament\TournamentType;
use App\Entity\BattleRound;
use App\Entity\Participant;
use App\Entity\Player;
use App\Entity\Result;
use App\Entity\Team;
use App\Entity\TeamList;
use App\Entity\Tournament;
use App\Entity\User;
use App\Form\Data\FixtureResultData;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(
        private readonly TeamImportService $teamImportService,
        private readonly TournamentService $tournamentService,
        private UserPasswordHasherInterface $passwordHasher,
        private FixtureService $fixtureService,
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail('a@a.a');
        $hashedPassword = $this->passwordHasher->hashPassword($user, 'a');
        $user->setPassword($hashedPassword);
        $manager->persist($user);


        // Step 1: Import Teams
        $this->teamImportService->importTeams(StarRating::FIVE_STAR); // Adjust to the desired star rating for teams

        // Step 2: Create a pool of 8 players
        $playerNames = [
            'Lionel Messi',
            'Cristiano Ronaldo',
            'Kylian Mbappé',
            'Neymar Jr.',
            'Erling Haaland',
            'Robert Lewandowski',
            'Kevin De Bruyne',
            'Mohamed Salah'
        ];
        $players = [];
        foreach ($playerNames as $playerName) {
            $player = new Player();
            $player->setIdent($playerName);
            $manager->persist($player);
            $players[] = $player; // Store the player in the array for random assignment
        }
        $this->createBattleTournament($manager, $players);


        // Step 5: Calculate rounds for the tournament
//        $this->tournamentService->calculateRoundsForTournament($tournament);
    }

    private function createBattleTournament(ObjectManager $manager, array $players): void
    {
        // Step 3: Create a Tournament
        $playersToAdd = 5;
        $level = TournamentLevel::QUARTER_FINAL;
        $numberOfChoices = 1;

        $tournament = new Tournament();
        $tournament->setIdent('Sample Tournament')
            ->setLevel($level) // Adjust to match your enum
            ->setState(TournamentState::OPEN)
            ->setType(TournamentType::GROUP_BATTLE)
            ->setNumberOfChoices($numberOfChoices)
            ->setIsTwoLeg(false);

        $battleRound = new BattleRound();
        $tournament->setBattleRound($battleRound);

        $manager->persist($tournament);

        // Commit all changes to the database
        $manager->flush();

        $battleRound = $tournament->getBattleRound();
        for ($playerNr = 0; $playerNr < $playersToAdd; $playerNr++) {
            $battleRound->addPlayer($players[$playerNr]);
        }

        // add players to tournamnent => will auto create participant
        $this->tournamentService->addAndRemovePlayersToBattleRound($battleRound);

        // add 1 team for each participant
        $teamRepository = $manager->getRepository(Team::class);
        foreach ($tournament->getParticipants() as $participant) {
            $teamList = new TeamList();
            $teamList->setTournament($tournament);
            $teamList->setParticipant($participant);

            $allTeams = $teamRepository->findAll(); // Fetch all teams
            shuffle($allTeams); // Shuffle for randomness
            $selectedTeams = array_slice($allTeams, 0, 1);

            foreach ($selectedTeams as $team) {
                $teamList->addTeam($team);
            }

            $participant->addTeamList($teamList);

            $manager->persist($teamList);
            $manager->persist($participant);
        }

        $manager->flush();

        // start tournament
        $this->tournamentService->calculateRoundsForTournament($tournament);


        // set results
        $fixturesToFill = 15;
        $order = $tournament->getBattleRound()->getFixtureOrder();
        $fixtures = $tournament->getRoundByNumber(1)->getFixturesByOrder($order);

        $fixturesToFill = count($fixtures) - 1;
        $counter = 0;
        foreach ($fixtures as $fixture){
            $result = new Result();
            $result->setHomeGoals(0);
            $result->setAwayGoals(0);
            $homePlayers = $fixture->getHomeParticipant()->getPlayers()->toArray();
            $awayPlayers = $fixture->getAwayParticipant()->getPlayers()->toArray();
            shuffle($homePlayers);
            shuffle($awayPlayers);

            $allPlayers = array_merge($homePlayers, $awayPlayers);

            // get a random number between 0 and 10
            $totalGoals = random_int(0, 10);
            for ($goalNr = 0; $goalNr < $totalGoals; $goalNr++) {
                // pick ramdom player from players
                /** @var array<Player> $player */
                $player = array_slice($allPlayers, random_int(0, count($allPlayers) - 1), 1);

                $fixture->addScorer($player[0]->getId());
                if (in_array($player[0], $homePlayers)) {
                    $fixture->setHomeGoals($fixture->getHomeGoals() + 1);
                    $result->setHomeGoals($result->getHomeGoals() + 1);
                }
                if (in_array($player[0], $awayPlayers)) {
                    $fixture->setAwayGoals($fixture->getAwayGoals() + 1);
                    $result->setAwayGoals($result->getAwayGoals() + 1);
                }
            }

            $fixture->setFirstLeg($result);

            // set a random generated date to fixture.played
            $yesterday = new \DateTime('yesterday');
            $randomSeconds = random_int(0, 86399);
            $randomDateTime = (clone $yesterday)->add(new \DateInterval("PT{$randomSeconds}S"));

            $data = new FixtureResultData();
            $scoringMap = $this->fixtureService->getScoringMap($fixture);
            foreach ($scoringMap->getMap() as $player => $scoreValue) {
                $data->setPlayerGoal($player, $scoreValue);
            }

            if ($counter < $fixturesToFill){
                $fixture->setPlayed($randomDateTime);
                $result->setPlayed($randomDateTime);
            }
            $result->setPlayerGoals($data->getPlayerGoals());

            $manager->persist($result);
            $manager->persist($fixture);
            $counter++;
        }

        $manager->flush();
    }

    /**
     * @param ObjectManager $manager
     * @param array $players
     * @return array
     */
    private function createClassicTournament(ObjectManager $manager, array $players): array
    {
// Step 3: Create a Tournament
        $participantsToCreate = 3;
        $level = TournamentLevel::QUARTER_FINAL;
        $numberOfChoices = (int)floor($level->getNumberOfParticipantPlaces() / $participantsToCreate);

        $tournament = new Tournament();
        $tournament->setIdent('Sample Tournament')
            ->setLevel($level) // Adjust to match your enum
            ->setState(TournamentState::OPEN)
            ->setNumberOfChoices($numberOfChoices)
            ->setIsTwoLeg(false);

        // Step 4: Create Participants and their TeamLists
        $teamRepository = $manager->getRepository(Team::class);
        for ($i = 1; $i <= $participantsToCreate; $i++) { // Create 30 participants
            $participant = new Participant();
            $participantNames = [
                'Nuttenpreller',
                'Pimmelbande',
                'Whiskey Walters',
                'Vollzeitwichser',
                'Anal-Anarchisten'
            ];

            shuffle($participantNames); // Shuffle for randomness
            $participantName = array_slice($participantNames, 0, 1);
            $participant->setIdent("{$participantName[0]} {$i}");

            // Assign a TeamList to each participant
            $teamList = new TeamList();
            $teamList->setTournament($tournament);
            $teamList->setParticipant($participant);

            // Add 3 random teams to the TeamList
            $allTeams = $teamRepository->findAll(); // Fetch all teams
            shuffle($allTeams); // Shuffle for randomness
            $selectedTeams = array_slice($allTeams, 0, $numberOfChoices);

            foreach ($selectedTeams as $team) {
                $teamList->addTeam($team);
            }

            $participant->addTeamList($teamList);

            // Assign 2-3 random players to the participant
            shuffle($players); // Shuffle the player pool for randomness
            $assignedPlayers = array_slice($players, 0, random_int(2, 3));

            $tournament->addParticipant($participant);
            $manager->persist($teamList);
            $manager->persist($participant);
        }
        return array($tournament, $participantNames, $allTeams, $players);
    }
}