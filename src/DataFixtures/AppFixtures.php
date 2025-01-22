<?php

namespace App\DataFixtures;

use App\Content\Team\StarRating;
use App\Content\Team\TeamImportService;
use App\Content\Tournament\TournamentLevel;
use App\Content\Tournament\TournamentService;
use App\Content\Tournament\TournamentState;
use App\Entity\Participant;
use App\Entity\Player;
use App\Entity\Team;
use App\Entity\TeamList;
use App\Entity\Tournament;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function __construct(
        private readonly TeamImportService $teamImportService,
        private readonly TournamentService $tournamentService
    ) {
    }

    public function load(ObjectManager $manager): void
    {
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

        // Step 3: Create a Tournament
        $participantsToCreate = 30;
        $level = TournamentLevel::ROUND_OF_32;
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
            foreach ($assignedPlayers as $player) {
                $participant->addPlayer($player);
            }

            $tournament->addParticipant($participant);
            $manager->persist($teamList);
            $manager->persist($participant);
        }

        $manager->persist($tournament);

        // Commit all changes to the database
        $manager->flush();

        // Step 5: Calculate rounds for the tournament
        $this->tournamentService->calculateRoundsForTournament($tournament);
    }
}