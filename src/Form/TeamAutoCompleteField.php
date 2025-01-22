<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\Team;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Autocomplete\Form\AsEntityAutocompleteField;
use Symfony\UX\Autocomplete\Form\BaseEntityAutocompleteType;

#[AsEntityAutocompleteField]
class TeamAutoCompleteField extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'class' => Team::class,
            'placeholder' => 'Team auswählen',

            // choose which fields to use in the search
            // if not passed, *all* fields are used
            //'searchable_fields' => ['name'],

            // if the autocomplete endpoint needs to be secured
            //'security' => 'ROLE_FOOD_ADMIN',
            'query_builder' => function (Options $options) {
                return function (EntityRepository $er) use ($options) {
                    $qb = $er->createQueryBuilder('o');

                    $excludedFoods = $options['extra_options']['excluded_teams'] ?? [];
//                    $excludedFoods = array_map(fn($team) => $team->getId(), $excludedFoods);
                    if ([] !== $excludedFoods) {
                        $qb->andWhere($qb->expr()->notIn('o.id', $excludedFoods));
                    }

                    return $qb;
                };
            }
            // ... any other normal EntityType options
            // e.g. query_builder, choice_label
        ]);
    }

    public function getParent(): string
    {
        return BaseEntityAutocompleteType::class;
    }
}
