<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use App\Content\File\ImageService;
use App\Entity\File;
use Symfony\Component\DependencyInjection\Attribute\AutoconfigureTag;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

#[AutoconfigureTag('twig.extension')]
class ImageExtension extends AbstractExtension
{
    public function __construct(private readonly ImageService $imageService)
    {
    }

    /**
     * @return array<TwigFunction>
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('image_url', [$this, 'resolveImageUrl'], ['is_safe' => ['html']]),
        ];
    }

    public function resolveImageUrl(File $file, string $size = 'x-large'): string
    {
        return $this->imageService->resolveUrl($file, $size);
    }
}
