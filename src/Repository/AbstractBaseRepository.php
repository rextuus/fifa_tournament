<?php

declare(strict_types=1);

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManager;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;

/**
 * @template T of object
 * @template-extends ServiceEntityRepository<T>
 * @author   Markus Bierau <markus.bierau@doccheck.com>
 * @license  2023 DocCheck Community GmbH
 */
#[AutoconfigureTag('base.repository')]
abstract class AbstractBaseRepository extends ServiceEntityRepository
{
    public function persist(mixed $entity): void
    {
        /** @var EntityManager $em */
        $em = $this->getEntityManager();
        $em->persist($entity);
    }

    public function remove(mixed $entity): void
    {
        /** @var EntityManager $em */
        $em = $this->getEntityManager();
        $em->remove($entity);
    }

    /**
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function flush(): void
    {
        /** @var EntityManager $em */
        $em = $this->getEntityManager();
        $em->flush();
    }

    /**
     * @throws \Doctrine\ORM\ORMException
     */
    public function refresh(mixed $entity): void
    {
        /** @var EntityManager $em */
        $em = $this->getEntityManager();
        $em->refresh($entity);
    }
}
