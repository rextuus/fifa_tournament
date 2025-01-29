<?php

namespace App\Form;

use App\Content\Tournament\TournamentLevel;
use App\Entity\BattleRound;
use App\Entity\Participant;
use App\Entity\Player;
use App\Entity\Tournament;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ManageBattleTournamentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // Allow adding/removing participants
            ->add('players', EntityType::class, [
                'class' => Player::class, // The Participant entity
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
            'data_class' => BattleRound::class,
        ]);
    }
}