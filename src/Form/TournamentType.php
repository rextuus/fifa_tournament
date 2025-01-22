<?php

namespace App\Form;

use App\Content\Tournament\TournamentLevel;
use App\Entity\Tournament;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TournamentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('ident', TextType::class, [
                'label' => 'Tournament Identifier',
                'required' => true,
                'attr' => ['class' => 'form-control', 'placeholder' => 'e.g., Tournament2023'],
            ])
            ->add('level', ChoiceType::class, [
                'label' => 'Tournament Level',
                'required' => true,
                'choices' => array_combine(
                    array_map(fn($level) => $level->name, TournamentLevel::cases()), // Display enum names
                    TournamentLevel::cases() // Save enum objects
                ),
                'choice_label' => fn($choice) => $choice->name . ' (' . $choice->value . ')', // Visible labels: "ROUND_OF_32 (32)"
                'choice_value' => fn(?TournamentLevel $choice) => $choice?->value, // Use enum value (integer) in the form's submission data
                'attr' => ['class' => 'form-select'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Tournament::class,
        ]);
    }
}