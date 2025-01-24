<?php

namespace App\Entity;

use App\Repository\SettingRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SettingRepository::class)]
class Setting
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $maximumSongDuration = null;

    #[ORM\OneToOne(inversedBy: 'setting', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column]
    private ?int $songPlayTimeLimit = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMaximumSongDuration(): ?int
    {
        return $this->maximumSongDuration;
    }

    public function setMaximumSongDuration(int $maximumSongDuration): static
    {
        $this->maximumSongDuration = $maximumSongDuration;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getSongPlayTimeLimit(): ?int
    {
        return $this->songPlayTimeLimit;
    }

    public function setSongPlayTimeLimit(int $songPlayTimeLimit): static
    {
        $this->songPlayTimeLimit = $songPlayTimeLimit;

        return $this;
    }
}
