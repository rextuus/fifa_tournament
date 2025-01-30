<?php

namespace App\Entity;

use App\Content\File\Enum\FileType;
use App\Content\Tournament\RoundType;
use App\Repository\RoundRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoundRepository::class)]
class Round
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $nr = null;

    #[ORM\Column]
    private ?int $numberOfFixtures = null;

    #[ORM\Column]
    private ?bool $processed = null;

    #[ORM\Column(type: 'string', enumType: RoundType::class)]
    private RoundType $roundType;

    #[ORM\ManyToOne(inversedBy: 'rounds')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Tournament $tournament = null;

    /**
     * @var Collection<int, Fixture>
     */
    #[ORM\OneToMany(targetEntity: Fixture::class, mappedBy: 'round', orphanRemoval: true)]
    private Collection $fixtures;

    public function __construct()
    {
        $this->fixtures = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNr(): ?int
    {
        return $this->nr;
    }

    public function setNr(int $nr): static
    {
        $this->nr = $nr;

        return $this;
    }

    public function getNumberOfFixtures(): ?int
    {
        return $this->numberOfFixtures;
    }

    public function setNumberOfFixtures(int $numberOfFixtures): static
    {
        $this->numberOfFixtures = $numberOfFixtures;

        return $this;
    }

    public function isProcessed(): ?bool
    {
        return $this->processed;
    }

    public function setProcessed(bool $processed): static
    {
        $this->processed = $processed;

        return $this;
    }

    public function getRoundType(): RoundType
    {
        return $this->roundType;
    }

    public function setRoundType(RoundType $roundType): static
    {
        $this->roundType = $roundType;

        return $this;
    }

    public function getTournament(): ?Tournament
    {
        return $this->tournament;
    }

    public function setTournament(?Tournament $tournament): static
    {
        $this->tournament = $tournament;

        return $this;
    }

    /**
     * @return Collection<int, Fixture>
     */
    public function getFixtures(): Collection
    {
        return $this->fixtures;
    }

    public function addFixture(Fixture $fixture): static
    {
        if (!$this->fixtures->contains($fixture)) {
            $this->fixtures->add($fixture);
            $fixture->setRound($this);
        }

        return $this;
    }

    public function removeFixture(Fixture $fixture): static
    {
        if ($this->fixtures->removeElement($fixture)) {
            // set the owning side to null (unless already changed)
            if ($fixture->getRound() === $this) {
                $fixture->setRound(null);
            }
        }

        return $this;
    }

    /**
     * @param array<int> $order
     * @return array<Fixture>
     */
    public function getFixturesByOrder(array $order): array
    {
        $fixtures = [];
        foreach ($order as $fixtureNr) {
            $fixtures[] = $this->fixtures->filter(
                function (Fixture $fixture) use ($fixtureNr) {
                    return $fixtureNr === $fixture->getId();
                }
            )->first();
        }

        return $fixtures;
    }
}
