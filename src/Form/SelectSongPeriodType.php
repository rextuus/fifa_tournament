<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SelectSongPeriodType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('start', RangeType::class, [
                'required' => true,
                'attr' => [
                    'type' => 'range',
                    'class' => 'form-range',
                    'min' => 0,
                    'max' => $options['trackDuration'], // Dynamically set the track duration
                    'value' => 0, // Default initial value
                    'step' => 1,
                    'id' => 'startSlider', // Ensure this matches your JS selector
                ],
                'label' => null,
            ])
            ->add('end', RangeType::class, [
                'required' => true,
                'attr' => [
                    'type' => 'range',
                    'class' => 'form-range',
                    'min' => 1,
                    'max' => $options['trackDuration'],
                    'value' => 60,
                    'step' => 1,
                    'id' => 'endSlider',
                ],
                'label' => null,
            ])
            ->add('save', SubmitType::class, [
                'attr' => ['class' => 'btn btn-primary'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'trackDuration' => 300, // Default duration of track
        ]);
    }
}