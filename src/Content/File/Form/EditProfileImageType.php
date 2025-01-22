<?php

declare(strict_types=1);

namespace App\Content\File\Form;

use App\Entity\File;
use App\Content\File\Form\Data\EditProfileImageData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EditProfileImageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add(
            'profileImage',
            CroppedImageUploadType::class,
            [
                'label' => false,
                'width' => 250,
                'height' => 250,
                'current_image_url' => $options['current_image_url'],
                'default_image_path' => $options['default_image_path'],
            ]
        );

        if ($options['show_delete_button']) {
            $builder->add('deleteProfileImage', CheckboxType::class, ['label' => 'Löschen']);
        }

        if ($options['show_save_button']) {
            $builder->add('save', SubmitType::class, ['label' => 'Speichern', 'attr' => ['class' => 'btn btn-primary position-relative mt-3']]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(
            [
                'data_class' => EditProfileImageData::class,
                'show_delete_button' => false,
                'show_save_button' => false,
                'current_image_url' => null,
                'default_image_path' => 'build/images/thumbnail/company_default.png',
            ]
        );

        $resolver->setAllowedTypes('show_delete_button', ['bool']);
        $resolver->setAllowedTypes('current_image_url', [File::class, 'null']);
        $resolver->setAllowedTypes('default_image_path', ['string']);
        $resolver->setAllowedTypes('show_save_button', ['bool']);
    }
}
