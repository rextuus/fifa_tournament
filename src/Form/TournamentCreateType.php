<?php

namespace App\Form;

use App\Content\Tournament\TournamentLevel;
use App\Content\Tournament\TournamentType as TournamentTypeEnum; // Import the enum
use App\Entity\Tournament;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TournamentCreateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('ident', TextType::class, [
            'label' => 'Name des Turniers',
            'required' => true,
            'attr' => ['class' => 'form-control', 'placeholder' => 'z. B. Winter-Cup 2026'],
        ])->add('level', ChoiceType::class, [
            'label' => 'Startrunde (Teilnehmerplätze)',
            'required' => true,
            'choices' => array_combine(
                array_map(fn($level) => $level->name, TournamentLevel::cases()),
                TournamentLevel::cases(),
            ),
            'choice_label' => fn(TournamentLevel $choice) => $choice->getLabel(),
            'choice_value' => fn(?TournamentLevel $choice) => $choice?->value,
            'attr' => ['class' => 'form-select'],
        ])->add('type', ChoiceType::class, [ // Adding TournamentType
            'label' => 'Modus',
            'required' => true,
            'choices' => array_combine(
                array_map(fn($type) => $type->name, TournamentTypeEnum::cases()),
                TournamentTypeEnum::cases(),
            ),
            'choice_label' => fn(TournamentTypeEnum $choice) => match ($choice) {
                TournamentTypeEnum::CLASSIC => 'K.-o.-Turnier',
                TournamentTypeEnum::GROUP_BATTLE => 'Gruppen-Battle',
            },
            'choice_value' => fn(?TournamentTypeEnum $choice) => $choice?->value, // Use string enum value in data
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
