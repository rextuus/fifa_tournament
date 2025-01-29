<?php

namespace App\Repository;

use App\Entity\Participant;
use App\Entity\Player;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Participant>
 */
class ParticipantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Participant::class);
    }

//    /**
//     * @return Participant[] Returns an array of Participant objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Participant
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

    /**
     * @param array<Player> $players
     * @return array<Participant>
     */
    public function findParticipantsByPlayerCombination(array $players): array
    {
        $qb = $this->createQueryBuilder('p');

        // Match participants with exactly the provided players.
        return $qb
            ->innerJoin('p.players', 'player') // Join participants with players
            ->where($qb->expr()->in('player.id', ':player_ids')) // Ensure provided players are in participant
            ->andHaving('COUNT(player.id) = :count') // Ensure the participant has exactly the same number of players
            ->andWhere(
                $qb->expr()->eq('SIZE(p.players)', ':count') // Ensure no extra players in the participant
            )
            ->setParameter('player_ids', array_map(fn(Player $player) => $player->getId(), $players))
            ->setParameter('count', count($players)) // Exact number of players
            ->groupBy('p.id') // Group by participant for counting
            ->getQuery()
            ->getResult();
    }
}
