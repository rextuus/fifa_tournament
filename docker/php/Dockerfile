# syntax=docker/dockerfile:1
# eat – Produktions-Images (compose.prod.yaml). Stufen:
#   base    PHP-FPM mit allen Erweiterungen
#   dev     lokale Entwicklung (compose.yaml, Makefile): php.ini-development, Code per Bind-Mount
#   vendor  Composer-Abhängigkeiten ohne dev
#   prod    App-Image für app, worker, migrate; baut die Assets (AssetMapper + sass-bundle, kein Node)
#   web     Caddy mit public/ aus prod (index.php, kompilierte Assets unter /assets)
FROM php:8.5.13-fpm-alpine AS base

RUN apk add --no-cache icu-libs icu-data-full libzip libpng libjpeg-turbo libwebp freetype fcgi \
 && apk add --no-cache --virtual .build-deps $PHPIZE_DEPS icu-dev libzip-dev libpng-dev libjpeg-turbo-dev \
      libwebp-dev freetype-dev linux-headers \
 && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
 && docker-php-ext-install -j"$(nproc)" intl pdo_mysql zip gd \
 && pecl install apcu \
 && docker-php-ext-enable apcu \
 && apk del .build-deps

COPY --from=composer:2.9 /usr/bin/composer /usr/bin/composer
COPY docker/php/conf.d/app.ini $PHP_INI_DIR/conf.d/zz-app.ini
COPY docker/php/php-fpm.d/zz-app.conf /usr/local/etc/php-fpm.d/zz-app.conf

# Originalbilder (Bind-Mount /srv/eat/images auf dem Host, gehört dort 82:82 = www-data).
RUN mkdir -p /srv/eat/images && chown www-data:www-data /srv/eat/images

WORKDIR /srv/app

# Lokale Entwicklung: Code kommt per Bind-Mount, läuft als Host-Benutzer (compose.yaml: user UID:GID).
FROM base AS dev
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"
COPY docker/php/conf.d/dev.ini $PHP_INI_DIR/conf.d/zzz-dev.ini
ENV HOME=/tmp COMPOSER_HOME=/tmp/composer

FROM base AS vendor
COPY composer.json composer.lock symfony.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist --no-interaction --no-progress

FROM base AS prod
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
# Fest eingebaut; compose.prod.yaml setzt dieselben Werte, entrypoint.sh bricht bei Abweichung ab.
ENV APP_ENV=prod APP_DEBUG=0
COPY --from=vendor /srv/app/vendor ./vendor
COPY --chown=www-data:www-data . .
# Beim Bauen reicht ein Platzhalter-Secret; zur Laufzeit kommt das echte aus der Umgebung.
# post-install-cmd: cache:clear, assets:install, importmap:install (lädt assets/vendor von jsDelivr).
# sass:build lädt beim ersten Mal das Dart-Sass-Programm (GitHub); asset-map:compile schreibt public/assets.
RUN composer dump-autoload --no-dev --classmap-authoritative --no-interaction \
 && composer dump-env prod \
 && export APP_SECRET=build-only HOME=/tmp \
 && composer run-script --no-dev post-install-cmd \
 && php bin/console sass:build \
 && php bin/console asset-map:compile \
 && rm -rf var/cache/* var/dart-sass \
 && php bin/console cache:warmup \
 && mkdir -p var/uploads \
 && chown -R www-data:www-data var
COPY docker/php/entrypoint.sh /usr/local/bin/eat-entrypoint
USER www-data
ENTRYPOINT ["eat-entrypoint"]
CMD ["php-fpm"]

# Caddy mit den öffentlichen Dateien (index.php, kompilierte Assets) aus dem Produktions-Image.
FROM caddy:2.11.9-alpine AS web
COPY docker/caddy/Caddyfile /etc/caddy/Caddyfile
COPY --from=prod /srv/app/public /srv/app/public
