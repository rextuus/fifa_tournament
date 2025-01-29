<?php

namespace App\Form;

use App\Content\Fixture\ScoringMap;
use App\Form\Data\FixtureResultData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FixtureResultType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Add static fields for home and away goals
        $builder
            ->add('homeGoals', IntegerType::class, [
                'label' => 'Home Goals',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Enter home goals'],
            ])
            ->add('awayGoals', IntegerType::class, [
                'label' => 'Away Goals',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Enter away goals'],
            ]);

        // Add dynamic player fields
        $builder->addEventListener(FormEvents::POST_SET_DATA, function (FormEvent $event) use ($options) {
            $form = $event->getForm();
            $data = $event->getData(); // This will be the FixtureResultData object

            $playerGoals = $data instanceof FixtureResultData ? $data->getPlayerGoals() : [];

            foreach ($options['players'] as $index => $player) {
                $playerId = $player->getId();

                $form->add('player_' . $playerId, IntegerType::class, [
                    'label' => $player->getIdent(),
                    'mapped' => false, // Not directly mapped to FixtureResultData
                    'data' => $playerGoals[$playerId] ?? null, // Pre-fill if data exists
                    'required' => false,
                    'attr' => [
                        'class' => 'form-control',
                        'placeholder' => 'Enter goals for ' . $player->getIdent(),
                    ],
                ]);
            }
        });

        // Update FixtureResultData's playerGoals array on submission
        $builder->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
            $formData = $event->getData();
            $form = $event->getForm();

            if ($formData instanceof FixtureResultData) {
                $playerGoals = [];

                foreach ($form->all() as $fieldName => $field) {
                    if (str_starts_with($fieldName, 'player_')) {
                        $playerId = (int)str_replace('player_', '', $fieldName);
                        $goals = $field->getData(); // Get the submitted value
                        $playerGoals[$playerId] = $goals;
                    }
                }

                $formData->setPlayerGoals($playerGoals);
            }
        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => FixtureResultData::class,
            'players' => [], // Default: no players
        ]);

        $resolver->setAllowedTypes('players', 'array');
    }
}