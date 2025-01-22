<?php

namespace App\Form;

use App\Content\Tournament\TournamentLevel;
use App\Entity\Participant;
use App\Entity\Tournament;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ManageTournamentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // Set the tournament level using the enum
            ->add('level', ChoiceType::class, [
                'label' => 'Tournament Level',
                'required' => true,
                'choices' => array_combine(
                    array_map(fn($level) => $level->name, TournamentLevel::cases()),
                    TournamentLevel::cases()
                ),
                'choice_label' => fn($choice) => $choice->name . ' (' . $choice->value . ')',
                'choice_value' => fn(?TournamentLevel $choice) => $choice?->value,
                'attr' => ['class' => 'form-select'],
            ])
            // Allow adding/removing participants
            ->add('participants', EntityType::class, [
                'class' => Participant::class, // The Participant entity
                'choice_label' => 'ident', // Display the Participant's "ident" property in the dropdown
                'multiple' => true, // Allow selection of multiple participants
                'expanded' => false, // Use a dropdown instead of checkboxes
                'label' => 'Teilnehmer',
                'required' => false, // Participants are optional
                'attr' => ['class' => 'form-control'], // Use the same form-control class for consistent styling
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Tournament::class,
        ]);
    }
}