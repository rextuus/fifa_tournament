<?php

declare(strict_types=1);

namespace App\Content\File;

use App\Entity\File;
use App\Repository\AbstractBaseRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends AbstractBaseRepository<File>
 *
 * @method File|null   find($id, $lockMode = null, $lockVersion = null)
 * @method File|null   findOneBy(array $criteria, array $orderBy = null)
 * @method array<File> findAll()
 * @method array<File> findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FileRepository extends AbstractBaseRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, File::class);
    }
}
