<?php

use Symfony\Component\Dotenv\Dotenv;

require dirname(__DIR__) . '/vendor/autoload.php';

if (method_exists(Dotenv::class, 'bootEnv')) {
    new Dotenv()->bootEnv(dirname(__DIR__) . '/.env');
}

// Das Layout bindet das gebaute SCSS ein (asset('styles/app.scss')). Fehlt es (frischer Checkout), einmal bauen.
if ([] === glob(dirname(__DIR__) . '/var/sass/*.output.css')) {
    passthru(
        escapeshellarg(PHP_BINARY)
        . ' '
        . escapeshellarg(dirname(__DIR__) . '/bin/console')
        . ' sass:build --env=test --quiet',
        $exitCode,
    );
    if (0 !== $exitCode) {
        throw new RuntimeException('sass:build ist fehlgeschlagen.');
    }
}
