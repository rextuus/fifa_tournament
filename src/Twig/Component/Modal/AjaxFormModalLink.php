<?php

declare(strict_types=1);

namespace App\Twig\Component\Modal;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent(name: 'AjaxFormModalLink', template: 'components/modal/AjaxFormModalLink.html.twig')]
class AjaxFormModalLink
{
    public string $modalTitle;

    public string $formUrl;

    public ?string $classes = null;

    public ?string $linkId = null;

    public ?string $attributes = null;

    public ?string $declineText = null;

    public ?string $submitText = null;
}
