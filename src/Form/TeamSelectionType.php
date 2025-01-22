<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TeamSelectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('team', TeamAutoCompleteField::class, [
            'extra_options' => [
                'excluded_teams' => $options['excluded_teams'],
            ]
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TeamSelectionData::class,
            'excluded_teams' => [],
        ]);

        $resolver->setAllowedTypes('excluded_teams', 'string');
    }
}