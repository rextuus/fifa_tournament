<?php

declare(strict_types=1);

namespace App\Tests\Content\Tournament\Calculation;

use App\Content\Tournament\Calculation\FixtureMap;
use App\Content\Tournament\Calculation\TournamentCalculationService;
use App\Content\Tournament\TournamentLevel;
use App\Entity\Participant;
use App\Entity\Player;
use App\Entity\Tournament;
use PHPUnit\Framework\TestCase;

class TournamentCalculationServiceTest extends TestCase
{
    private TournamentCalculationService $tournamentCalculationService;

    public function setUp(): void
    {
        $this->tournamentCalculationService = new TournamentCalculationService();

        parent::setUp();
    }

    public function testCalculateRound32(): void
    {
        $tournamentLevel = TournamentLevel::ROUND_OF_32;

        /** @var array<Participant> $participants */
        $participants = [];
        for ($i = 0; $i <= 16; ++$i) {
            $participants[$i] = $this->createParticipantFixture($i);
        }

        $players = [];
        for ($i = 0; $i <= 9; ++$i) {
            $players[$i] = $this->createPlayerFixture($i);
        }

        $participants[0]->setPlayers([$players[0], $players[1]]);
        $participants[1]->setPlayers([$players[2], $players[3]]); // neither 0 nor 1 in => first
        $participants[2]->setPlayers([$players[0], $players[7], $players[8]]); // 0 in
        $participants[3]->setPlayers([$players[0], $players[6]]); // 0 in
        $participants[4]->setPlayers([$players[4], $players[5], $players[1]]); // 1 in
        $participants[5]->setPlayers([$players[0], $players[1], $players[2]]); // 0 and 1 in => last
        $participants[6]->setPlayers([$players[6], $players[7]]); // neither 0 nor 1 in => second
        $participants[7]->setPlayers([$players[6], $players[3]]); // neither 0 nor 1 in => second
        $participants[8]->setPlayers([$players[9], $players[2]]); // neither 0 nor 1 in => second
        $participants[9]->setPlayers([$players[3], $players[7]]); // neither 0 nor 1 in => second
        $participants[10]->setPlayers([$players[8], $players[2]]); // neither 0 nor 1 in => second
        $participants[11]->setPlayers([$players[1], $players[3]]); // neither 0 nor 1 in => second
        $participants[12]->setPlayers([$players[5], $players[9]]); // neither 0 nor 1 in => second
        $participants[13]->setPlayers([$players[7], $players[8]]); // neither 0 nor 1 in => second
        $participants[14]->setPlayers([$players[1], $players[2]]); // neither 0 nor 1 in => second
        $participants[15]->setPlayers([$players[5], $players[6]]); // neither 0 nor 1 in => second
        $participants[16]->setPlayers([$players[2], $players[8]]); // neither 0 nor 1 in => second

        $participantsToTest = [];


        for ($numberOfPlayers = 2; $numberOfPlayers < 17; $numberOfPlayers++) {
            for ($j = 0; $j < $numberOfPlayers; $j++) {
                $participantsToTest[] = $participants[$j];
            }

            $tournament = new Tournament();
            foreach ($participantsToTest as $participant) {
                $tournament->addParticipant($participant);
            }
            $tournament->setLevel($tournamentLevel);

            $fixtureMap = $this->tournamentCalculationService->calculate($tournament);
            $this->assertInstanceOf(FixtureMap::class, $fixtureMap);
        }
    }

    /**
     * @dataProvider getTournamentLevel
     */
    public function testCalculate($tournamentLevel): void
    {
        // Number of participants and players
        $numParticipants = 32;
        $numPlayers = 10;

        // Create the players pool
        $players = [];
        for ($i = 0; $i < $numPlayers; ++$i) {
            $players[$i] = $this->createPlayerFixture($i);
        }

        // Create the participants array
        $participants = [];
        for ($i = 0; $i < $numParticipants; ++$i) {
            $participants[$i] = $this->createParticipantFixture($i);

            // Assign 1 to 3 random players to the participant
            $numPlayersForParticipant = rand(1, 3); // Random number of players (1 to 3)
            $randomPlayers = array_rand($players, $numPlayersForParticipant); // Get random keys

            // Ensure $randomPlayers is an array
            if (!is_array($randomPlayers)) {
                $randomPlayers = [$randomPlayers];
            }

            // Assign the selected players to the participant
            $participants[$i]->setPlayers(array_map(fn($key) => $players[$key], $randomPlayers));
        }

        // Print participants for verification
//        foreach ($participants as $index => $participant) {
//            $playerIds = array_map(fn($player) => $player->getId(), $participant->getPlayers()->toArray());
//            echo "Participant {$index} has players: " . implode(', ', $playerIds) . PHP_EOL;
//        }

        $participantsToTest = [];

        for ($numberOfPlayers = 2; $numberOfPlayers <= $numParticipants; $numberOfPlayers++) {
            for ($j = 0; $j < $numberOfPlayers; $j++) {
                $participantsToTest[] = $participants[$j];
            }

            $tournament = new Tournament();
            foreach ($participantsToTest as $participant) {
                $tournament->addParticipant($participant);
            }
            $tournament->setLevel($tournamentLevel);

            if ($numParticipants > $tournamentLevel->value) {
                $this->expectExceptionMessage(
                    'To much participants (' . $numberOfPlayers . ') for tournament level: ' . $tournamentLevel->value
                );
            }

            $fixtureMap = $this->tournamentCalculationService->calculate($tournament);
            $this->assertInstanceOf(FixtureMap::class, $fixtureMap);
        }
    }

    public function getTournamentLevel(): array
    {
        return [
            TournamentLevel::ROUND_OF_128->name => [TournamentLevel::ROUND_OF_128],
            TournamentLevel::ROUND_OF_64->name => [TournamentLevel::ROUND_OF_64],
            TournamentLevel::ROUND_OF_32->name => [TournamentLevel::ROUND_OF_32],
            TournamentLevel::ROUND_OF_16->name => [TournamentLevel::ROUND_OF_16],
            TournamentLevel::QUARTER_FINAL->name => [TournamentLevel::QUARTER_FINAL],
            TournamentLevel::SEMI_FINAL->name => [TournamentLevel::SEMI_FINAL],
            TournamentLevel::FINAL->name => [TournamentLevel::FINAL],
        ];
    }

    private function createPlayerFixture(int $id): Player
    {
        $player = new Player();
        $player->setId($id);
        $player->setIdent('xxxx');

        return $player;
    }

    private function createParticipantFixture(int $id): Participant
    {
        $participant = new Participant();
        $participant->setId($id);
        $participant->setIdent('xxxx');

        return $participant;
    }

    public function testCalculateParticipantPlayerSimilarityMap(): void
    {
        /** @var array<Participant> $participants */
        $participants = [];
        for ($i = 1; $i <= 7; ++$i) {
            $participants[$i] = $this->createParticipantFixture($i);
        }

        $players = [];
        for ($i = 1; $i <= 10; ++$i) {
            $players[$i] = $this->createPlayerFixture($i);
        }

        $participants[1]->setPlayers([$players[1], $players[2]]);
        $participants[2]->setPlayers([$players[3], $players[4]]); // neither 1 nor 2 in => first
        $participants[3]->setPlayers([$players[1], $players[8], $players[9]]); // 1 in
        $participants[4]->setPlayers([$players[1], $players[7]]); // 1 in
        $participants[5]->setPlayers([$players[5], $players[6], $players[2]]); // 2 in
        $participants[6]->setPlayers([$players[1], $players[2], $players[3]]); // 1 and 2 in => last
        $participants[7]->setPlayers([$players[7], $players[8]]); // neither 1 nor 2 in => second

        $result = $this->tournamentCalculationService->calculateParticipantPlayerSimilarityMap(
            $participants,
            $participants[1]
        );
        $this->assertEquals([2, 7, 3, 4, 5, 6], $result);
    }

    public function testGetFixtureAmountForRound(): void
    {
        $result = $this->tournamentCalculationService->getFixtureAmountForRound(64, 1);
        $this->assertEquals(32, $result);
        $result = $this->tournamentCalculationService->getFixtureAmountForRound(64, 2);
        $this->assertEquals(16, $result);
        $result = $this->tournamentCalculationService->getFixtureAmountForRound(64, 3);
        $this->assertEquals(8, $result);
        $result = $this->tournamentCalculationService->getFixtureAmountForRound(64, 4);
        $this->assertEquals(4, $result);
        $result = $this->tournamentCalculationService->getFixtureAmountForRound(64, 5);
        $this->assertEquals(2, $result);
        $result = $this->tournamentCalculationService->getFixtureAmountForRound(64, 6);
        $this->assertEquals(1, $result);
        $result = $this->tournamentCalculationService->getFixtureAmountForRound(64, 7);
        $this->assertNull($result);
    }
}
