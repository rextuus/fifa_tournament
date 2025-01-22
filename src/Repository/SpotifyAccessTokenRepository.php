<?php

namespace App\Repository;

use App\Content\Spotify\NoAccessTokenFoundException;
use App\Entity\SpotifyAccessToken;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SpotifyAccessToken>
 */
class SpotifyAccessTokenRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SpotifyAccessToken::class);
    }

//    /**
//     * @return SpotifyAccessToken[] Returns an array of SpotifyAccessToken objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?SpotifyAccessToken
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
    public function save(SpotifyAccessToken $spotifyAccessToken): void
    {
        $this->getEntityManager()->persist($spotifyAccessToken);
        $this->getEntityManager()->flush();
    }

    /**
     * @throws NoAccessTokenFoundException
     */
    public function getNewestToken(): SpotifyAccessToken
    {
        $newestToken = $this->findOneBy([], ['id' => 'DESC']);

        if ($newestToken === null) {
            throw new NoAccessTokenFoundException('No tokens found');
        }

        return $newestToken;
    }
}
