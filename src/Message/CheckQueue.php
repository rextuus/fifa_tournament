<?php

namespace App\Message;

final class CheckQueue
{
    public function __construct(
        private readonly int $userId,
    ) {
    }

    public function getUserId(): int
    {
        return $this->userId;
    }
}
