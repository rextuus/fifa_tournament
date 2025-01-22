<?php

declare(strict_types=1);

namespace App\Content\File\Form;

use App\Entity\File;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CroppedImageUploadType extends AbstractType
{
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['width'] = $options['width'];
        $view->vars['height'] = $options['height'];
        $view->vars['current_image_url'] = $options['current_image_url'];
        $view->vars['default_image_path'] = $options['default_image_path'];
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setRequired(['width', 'height']);

        $resolver->setDefaults([
            'current_image_url' => null,
            'default_image_path' => 'build/images/thumbnail/company_default.png',
        ]);

        $resolver->setAllowedTypes('width', ['int']);
        $resolver->setAllowedTypes('height', ['int']);
        $resolver->setAllowedTypes('current_image_url', [File::class, 'null']);
        $resolver->setAllowedTypes('default_image_path', ['string']);
    }

    public function getParent(): string
    {
        return FileType::class;
    }
}
