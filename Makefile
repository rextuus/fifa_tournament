export UID := $(shell id -u)
export GID := $(shell id -g)

# Optional: eigene Werte für Compose (WEB_PORT, WEB_LAN_IP, WEB_LAN_PORT) in .env.docker.local.
ENV_FILE ?= .env.docker.local
DC        = docker compose $(if $(wildcard $(ENV_FILE)),--env-file $(ENV_FILE))
PHP       = $(DC) exec -T app php
COMPOSER  = $(DC) exec -T app composer
WEB_PORT ?= 8000
LAN_IP   ?= $(shell hostname -I 2>/dev/null | awk '{print $$1}')

EMAIL    ?= admin@eat.local
PASSWORD ?= admin123

.DEFAULT_GOAL := help
.PHONY: help secrets setup up up-lan down restart ps logs sh console install db user worker-restart sass \
	test mago-lint mago-analyze mago-fmt fmt lint-twig qa

help: ## Diese Hilfe
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'

secrets: ## APP_SECRET in .env.local anlegen, falls er fehlt (überschreibt nichts)
	@touch .env.local
	@grep -q '^APP_SECRET=.\+' .env.local || ( echo "APP_SECRET=$$(openssl rand -hex 32)" >> .env.local && echo "APP_SECRET in .env.local erzeugt" )

setup: up install db user ## Erstes Hochfahren: starten, Abhängigkeiten, Datenbank, Login-Benutzer
	@echo; echo "Fertig: http://localhost:$(WEB_PORT)  (Login: $(EMAIL) / $(PASSWORD))"

up: secrets ## Umgebung starten (app, worker, sass-Watcher, web) → http://localhost:8000
	$(DC) up -d --build --wait
	@echo; echo "Läuft: http://localhost:$(WEB_PORT)"

up-lan: secrets ## Wie up, zusätzlich im Heimnetz erreichbar (Handy-Test) → http://<LAN-IP>:8001
	WEB_LAN_IP=$(LAN_IP) $(DC) up -d --build --wait
	@echo; echo "Lokal: http://localhost:$(WEB_PORT)   Handy (gleiches WLAN): http://$(LAN_IP):$${WEB_LAN_PORT:-8001}"
	@echo "Hinweis: Der Spotify-Login funktioniert nur über localhost (Redirect-URI)."

down: ## Alles stoppen
	$(DC) down

restart: down up ## Neu starten

ps: ## Zustand der Container
	$(DC) ps

logs: ## Logs verfolgen (alle Dienste; einzeln: make logs S=worker)
	$(DC) logs -f --tail=100 $(S)

sh: ## Shell im app-Container
	$(DC) exec app sh

console: ## Symfony-Konsole, z. B. make console CMD="debug:router"
	$(PHP) bin/console $(CMD)

install: ## Composer-Abhängigkeiten und Importmap-Pakete installieren
	$(COMPOSER) install
	$(PHP) bin/console importmap:install

# Die Migrationen sind MySQL-spezifisch (Produktion). Lokal kommt das SQLite-Schema aus dem Mapping – wie in den Tests.
db: ## Datenbank (SQLite, var/data.db) anlegen bzw. ans Mapping anpassen
	$(PHP) bin/console doctrine:schema:update --force

user: ## Login-Benutzer anlegen (EMAIL=… PASSWORD=…, Standard admin@eat.local / admin123)
	-$(PHP) bin/console app:create-default-user $(EMAIL) $(PASSWORD)

worker-restart: ## Worker nach PHP-Änderungen neu starten (hält sonst alten Code)
	$(DC) restart worker

sass: ## SCSS einmalig bauen (läuft sonst automatisch im Dienst sass)
	$(PHP) bin/console sass:build

test: ## PHPUnit (eigene SQLite-Testdatenbank var/test.db)
	$(PHP) vendor/bin/phpunit

mago-lint: ## Mago Linter
	$(PHP) vendor/bin/mago lint

mago-analyze: ## Mago Analyzer
	$(PHP) vendor/bin/mago analyze

mago-fmt: ## Mago Formatter (prüfen)
	$(PHP) vendor/bin/mago format --check

fmt: ## Mago Formatter (anwenden)
	$(PHP) vendor/bin/mago format

lint-twig: ## Twig-Templates prüfen
	$(PHP) bin/console lint:twig templates

qa: mago-lint mago-analyze mago-fmt lint-twig test ## Alle Prüfungen
