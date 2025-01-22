<?php

namespace App\Form;

use App\Entity\Participant;
use App\Entity\Player;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ParticipantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('ident', TextType::class, [
                'label' => 'Participant Identifier',
                'required' => true,
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('players', EntityType::class, [
                'class' => Player::class, // The Player entity
                'choice_label' => 'ident', // Display the Player's "ident" property in the dropdown
                'multiple' => true, // Allow multiple players to be selected
                'expanded' => false, // Use a dropdown UI, not checkboxes
                'label' => 'Associated Players',
                'required' => false, // Players are optional
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Participant::class, // Entity mapped to this form
        ]);
    }
}