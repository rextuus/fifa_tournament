<?php

declare(strict_types=1);

namespace App\Tests\Content\Tournament\Calculation;

use App\Content\Tournament\Calculation\BattleRoundTable;
use App\Content\Tournament\Calculation\TableFilter;
use App\Entity\Player;
use PHPUnit\Framework\TestCase;

class BattleRoundTableTest extends TestCase
{
    public function testGetOrderedPlayersBy(): void
    {
        // Create mock Player objects
        $player1 = $this->createMock(Player::class);
        $player1->method('getId')->willReturn(1);

        $player2 = $this->createMock(Player::class);
        $player2->method('getId')->willReturn(2);

        $player3 = $this->createMock(Player::class);
        $player3->method('getId')->willReturn(3);

        // Create the BattleRoundTable instance
        $table = new BattleRoundTable();

        // Add players to the table
        $table->addPlayer($player1);
        $table->addPlayer($player2);
        $table->addPlayer($player3);

        // Add stats for sorting logic
        $table->addWin($player1); // 1 win, 3 points
        $table->addDraw($player2); // 1 draw, 1 point
        $table->addLoose($player3); // 1 loss, 0 points
        $table->addPersonalGoals($player1, 5); // Player 1 with 5 personal goals
        $table->addPersonalGoals($player2, 2); // Player 2 with 2 personal goals
        $table->addPersonalGoals($player3, 1); // Player 3 with 1 personal goal

        // Test point-based sorting
        $orderedPlayers = $table->getOrderedPlayersBy(TableFilter::POINTS);

        // Asserts the players are sorted as expected
        $this->assertSame(
            [$player1, $player2, $player3], // Expected order
            $orderedPlayers,
            'Players should be ordered by points descending, with ties resolved by secondary key.'
        );

        // Test sorting on a different filter
        $orderedPlayersByGoals = $table->getOrderedPlayersBy(TableFilter::PERSONAL_GOALS);

        // Asserts players are sorted by personal goals
        $this->assertSame(
            [$player1, $player2, $player3], // Expected order by goals
            $orderedPlayersByGoals,
            'Players should be ordered by personal goals descending.'
        );
    }
}
