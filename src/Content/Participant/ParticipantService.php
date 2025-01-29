<?php

declare(strict_types=1);

namespace App\Content\Participant;

use App\Entity\BattleRound;
use App\Entity\Participant;
use App\Repository\ParticipantRepository;
use App\Repository\PlayerRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

class ParticipantService
{

    public function __construct(
        private ParticipantRepository $participantRepository,
        private PlayerRepository $playerRepository,
        private EntityManagerInterface $entityManager
    ) {
    }

    /**
     * @return array<Participant>
     */
    public function checkBattleRoundParticipantsExist(BattleRound $battleRound): array
    {
        $participantsForRound = [];

        $players = $battleRound->getPlayers()->toArray();
        foreach ($players as $index => $player) {
            foreach ($players as $index2 => $partner) {
                if ($index <= $index2) {
                    continue;
                }

                if ($player->getId() === $partner->getId()) {
                    continue;
                }

                $participants = $this->participantRepository->findParticipantsByPlayerCombination([$player, $partner]);
                if (count($participants) > 0) {
                    $participantsForRound[] = $participants[0];
                    continue;
                };

                $newParticipant = new Participant();
                $newParticipant->setPlayers([$player, $partner]);
                $newParticipant->setIdent(
                    sprintf('%s - %s', $player->getIdent(), $partner->getIdent())
                );

                $participantsForRound[] = $newParticipant;
            }
        }

        return $participantsForRound;
    }
}
