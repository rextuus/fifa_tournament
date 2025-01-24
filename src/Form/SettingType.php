<?php

namespace App\Form;

use App\Entity\Setting;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SettingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('maximumSongDuration', IntegerType::class, [
                'label' => 'Maximum Song Duration (seconds)',
                'attr' => [
                    'class' => 'form-control',
                    'min' => 0,
                    'max' => 300,
                ],
            ])
            ->add('songPlayTimeLimit', IntegerType::class, [
                'label' => 'Song Play Time Limit (seconds)',
                'attr' => [
                    'class' => 'form-control',
                    'min' => 0,
                    'max' => 300,
                ],

            ]);

        $builder->add('save', SubmitType::class, ['label' => 'Speichern']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Setting::class,
        ]);
    }
}