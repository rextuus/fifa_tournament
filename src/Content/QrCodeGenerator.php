<?php

namespace App\Content;

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Builder\BuilderInterface;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\Label\Font\OpenSans;
use Endroid\QrCode\Label\LabelAlignment;
use Endroid\QrCode\RoundBlockSizeMode;
use Endroid\QrCode\Writer\PngWriter;
use Endroid\QrCode\Writer\WebPWriter;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class QrCodeGenerator
{
    public function __construct(private UrlGeneratorInterface $router)
    {
    }

    public function generateQrCode(string $route, int $id): string
    {
        $qrCodeUrl = $this->router->generate(
            $route,
            ['id' => $id],
            UrlGeneratorInterface::ABSOLUTE_URL
        );

        if (str_contains($qrCodeUrl, 'localhost')) {
            $qrCodeUrl = str_replace('localhost', '192.168.178.56', $qrCodeUrl);
        }

        $builder = new Builder(
            writer: new WebPWriter(),
            writerOptions: [],
            validateResult: false,
            data: $qrCodeUrl,
            encoding: new Encoding('UTF-8'),
            errorCorrectionLevel: ErrorCorrectionLevel::High,
            size: 200,
            margin: 10,
            roundBlockSizeMode: RoundBlockSizeMode::Margin,
            labelText: '',
            labelFont: new OpenSans(20),
            labelAlignment: LabelAlignment::Center,
            logoPath: '',
            logoResizeToWidth: 50,
            logoPunchoutBackground: true
        );

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

        $builder = new Builder(
            writer: new WebPWriter(),
            writerOptions: [],
            validateResult: false,
            data: $qrCodeUrl,
            encoding: new Encoding('UTF-8'),
            errorCorrectionLevel: ErrorCorrectionLevel::High,
            size: 200,
            margin: 10,
            roundBlockSizeMode: RoundBlockSizeMode::Margin,
            labelText: '',
            labelFont: new OpenSans(20),
            labelAlignment: LabelAlignment::Center,
            logoPath: '',
            logoResizeToWidth: 50,
            logoPunchoutBackground: true
        );

        $result = $builder->build();

        return $result->getDataUri();
    }
}
