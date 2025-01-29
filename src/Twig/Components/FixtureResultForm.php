<?php

declare(strict_types=1);

namespace App\Twig\Components;

use App\Form\Data\FixtureResultData;
use App\Form\FixtureResultType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\LiveCollectionTrait;

#[AsLiveComponent()]
class FixtureResultForm extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;
    use LiveCollectionTrait;

    #[LiveProp]
    public ?FixtureResultData $initialFormData = null;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(FixtureResultType::class, $this->initialFormData);
    }
}
