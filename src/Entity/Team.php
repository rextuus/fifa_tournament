<?php

namespace App\Entity;

use App\Content\File\DefaultImageType;
use App\Content\File\ImageAwareInterface;
use App\Content\Team\StarRating;
use App\Entity\Base\ImageFileAwareTrait;
use App\Repository\TeamRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TeamRepository::class)]
class Team implements ImageAwareInterface
{
    use ImageFileAwareTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255)]
    private string $name;

    #[ORM\Column(type: 'string', length: 255)]
    private string $league;

    #[ORM\Column(type: 'string', nullable: false, enumType: StarRating::class)]
    private StarRating $stars;

    #[ORM\Column(type: 'text', nullable: false)]
    private string $imageLink;

    #[ORM\Column(type: 'text', nullable: false)]
    private string $teamLink;

    /**
     * @var Collection<int, Fixture>
     */
    #[ORM\OneToMany(targetEntity: Fixture::class, mappedBy: 'homeTeam')]
    private Collection $fixtures;

    /**
     * @var Collection<int, TeamList>
     */
    #[ORM\ManyToMany(targetEntity: TeamList::class, mappedBy: 'teams')]
    private Collection $teamLists;

    public function __construct()
    {
        $this->fixtures = new ArrayCollection();
        $this->teamLists = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getStars(): StarRating
    {
        return $this->stars;
    }

    public function setStars(StarRating $stars): self
    {
        $this->stars = $stars;

        return $this;
    }

    public function getImageLink(): string
    {
        return $this->imageLink;
    }

    public function setImageLink(string $imageLink): self
    {
        $this->imageLink = $imageLink;

        return $this;
    }

    public function getTeamLink(): string
    {
        return $this->teamLink;
    }

    public function setTeamLink(string $teamLink): Team
    {
        $this->teamLink = $teamLink;
        return $this;
    }

    public function getLeague(): string
    {
        return $this->league;
    }

    public function setLeague(string $league): Team
    {
        $this->league = $league;
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
            $fixture->setHomeTeam($this);
        }

        return $this;
    }

    public function removeFixture(Fixture $fixture): static
    {
        if ($this->fixtures->removeElement($fixture)) {
            // set the owning side to null (unless already changed)
            if ($fixture->getHomeTeam() === $this) {
                $fixture->setHomeTeam(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TeamList>
     */
    public function getTeamLists(): Collection
    {
        return $this->teamLists;
    }

    public function addTeamList(TeamList $teamList): static
    {
        if (!$this->teamLists->contains($teamList)) {
            $this->teamLists->add($teamList);
            $teamList->addTeam($this);
        }

        return $this;
    }

    public function removeTeamList(TeamList $teamList): static
    {
        if ($this->teamLists->removeElement($teamList)) {
            $teamList->removeTeam($this);
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->name;
    }

    public function getDefaultImageType(): DefaultImageType
    {
        return DefaultImageType::TEAM_PROFILE;
    }
}
