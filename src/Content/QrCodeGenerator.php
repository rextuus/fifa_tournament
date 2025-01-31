<?php

namespace App\Content;

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\Label\Font\OpenSans;
use Endroid\QrCode\Label\LabelAlignment;
use Endroid\QrCode\RoundBlockSizeMode;
use Endroid\QrCode\Writer\WebPWriter;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class QrCodeGenerator
{
    public function __construct(private UrlGeneratorInterface $router)
    {
    }

    public function generateQrCode(string $route, int $id, ?string $type = null): string
    {
        $args = ['id' => $id];
        if ($type) {
            $args['type'] = $type;
        }

        $qrCodeUrl = $this->router->generate(
            $route,
            $args,
            UrlGeneratorInterface::ABSOLUTE_URL
        );

        if (str_contains($qrCodeUrl, 'localhost')) {
            $qrCodeUrl = str_replace('localhost', '192.168.178.56', $qrCodeUrl);
        }

        // Adjust to version 5 style
        $builder = Builder::create()
            ->writer(new WebPWriter())
            ->writerOptions([])
            ->data($qrCodeUrl)
            ->encoding(new Encoding('UTF-8'))
            ->errorCorrectionLevel(ErrorCorrectionLevel::High)
            ->size(200)
            ->margin(10)
            ->roundBlockSizeMode(RoundBlockSizeMode::Margin)
            ->labelText('')
            ->labelFont(new OpenSans(20))
            ->labelAlignment(LabelAlignment::Center);

        $result = $builder->build();
        return $result->getDataUri();
    }

    public function generateQrCodeForSongSearch(string $route, int $id): string
    {
        $qrCodeUrl = $this->router->generate(
            'spotify_search',
            ['id' => $id],
            UrlGeneratorInterface::ABSOLUTE_URL
        );

        if (str_contains($qrCodeUrl, 'localhost')) {
            $qrCodeUrl = str_replace('localhost', '192.168.178.56', $qrCodeUrl);
        }

        // Adjust to version 5 style
        $builder = Builder::create()
            ->writer(new WebPWriter())
            ->writerOptions([])
            ->data($qrCodeUrl)
            ->encoding(new Encoding('UTF-8'))
            ->errorCorrectionLevel(ErrorCorrectionLevel::High)
            ->size(200)
            ->margin(10)
            ->roundBlockSizeMode(RoundBlockSizeMode::Margin)
            ->labelText('')
            ->labelFont(new OpenSans(20))
            ->labelAlignment(LabelAlignment::Center);

        $result = $builder->build();
        return $result->getDataUri();
    }
}