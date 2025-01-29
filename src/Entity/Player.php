<?php

namespace App\Entity;

use App\Content\File\DefaultImageType;
use App\Content\File\ImageAwareInterface;
use App\Entity\Base\ImageFileAwareTrait;
use App\Repository\PlayerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
class Player implements ImageAwareInterface
{
    use ImageFileAwareTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $ident = null;

    /**
     * @var Collection<int, Participant>
     */
    #[ORM\ManyToMany(targetEntity: Participant::class, mappedBy: 'players')]
    private Collection $participants;

    /**
     * @var Collection<int, BattleRound>
     */
    #[ORM\ManyToMany(targetEntity: BattleRound::class, mappedBy: 'players')]
    private Collection $battleRounds;

    public function __construct()
    {
        $this->participants = new ArrayCollection();
        $this->battleRounds = new ArrayCollection();
    }

    public function setId(?int $id): Player
    {
        $this->id = $id;
        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdent(): ?string
    {
        return $this->ident;
    }

    public function setIdent(string $ident): static
    {
        $this->ident = $ident;

        return $this;
    }

    /**
     * @return Collection<int, Participant>
     */
    public function getParticipants(): Collection
    {
        return $this->participants;
    }

    public function addParticipant(Participant $participant): static
    {
        if (!$this->participants->contains($participant)) {
            $this->participants->add($participant);
            $participant->addPlayer($this);
        }

        return $this;
    }

    public function removeParticipant(Participant $participant): static
    {
        if ($this->participants->removeElement($participant)) {
            $participant->removePlayer($this);
        }

        return $this;
    }

    public function getDefaultImageType(): DefaultImageType
    {
        return DefaultImageType::USER_PROFILE;
    }

    /**
     * @return Collection<int, BattleRound>
     */
    public function getBattleRounds(): Collection
    {
        return $this->battleRounds;
    }

    public function addBattleRound(BattleRound $battleRound): static
    {
        if (!$this->battleRounds->contains($battleRound)) {
            $this->battleRounds->add($battleRound);
            $battleRound->addPlayer($this);
        }

        return $this;
    }

    public function removeBattleRound(BattleRound $battleRound): static
    {
        if ($this->battleRounds->removeElement($battleRound)) {
            $battleRound->removePlayer($this);
        }

        return $this;
    }
}
