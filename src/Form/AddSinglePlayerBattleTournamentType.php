<?php
namespace App\Form;

use App\Entity\Player;
use App\Form\Data\AddSinglePlayerBattleTournamentData;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddSinglePlayerBattleTournamentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // Allow adding a single participant
            ->add('player', EntityType::class, [ // Changed 'players' to 'player' to reflect a single item
                'class' => Player::class, // The Player entity
                'choice_label' => 'ident', // Display the Player's "ident" property in the dropdown
                'expanded' => false, // Use a dropdown instead of radio buttons
                'multiple' => false, // Allow only one player to be selected
                'label' => 'Teilnehmer',
                'required' => false, // Player selection is optional
                'attr' => ['class' => 'form-control'], // Use the same form-control class for consistent styling
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AddSinglePlayerBattleTournamentData::class,
        ]);
    }
}