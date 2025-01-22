<?php

namespace App\Content\Team;

enum StarRating: string
{
    case HALF_STAR = '0.5';
    case ONE_STAR = '1.0';
    case ONE_AND_HALF_STAR = '1.5';
    case TWO_STAR = '2.0';
    case TWO_AND_HALF_STAR = '2.5';
    case THREE_STAR = '3.0';
    case THREE_AND_HALF_STAR = '3.5';
    case FOUR_STAR = '4.0';
    case FOUR_AND_HALF_STAR = '4.5';
    case FIVE_STAR = '5.0';

    public function toFloat(): float
    {
        // Convert to a float
        $floatValue = floatval($this->value);

        // Check if it's effectively an integer
        if (fmod($floatValue, 1.0) === 0.0) {
            return (int) $floatValue; // Return as integer
        }

        return $floatValue;
    }
}
