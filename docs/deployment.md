# eat (FIFA-Turniere) betreiben – Komodo auf abyss

Teams, Spielpläne und Ergebnisse für die Turnierabende. Läuft als Komodo-Stack `eat` auf abyss, öffentlich unter
https://eat.wh-company.de (Caddy auf dem VPS → WireGuard → `10.0.0.2:8199`). Bis 20.11.2026 lief eat nativ
(Apache/MySQL 8.0) auf securitas unter `/var/www/fifa_tournament`; der Umzug ist [unten](#umzug-von-securitas-einmalig)
beschrieben.

Dateien dazu:

| Datei | Zweck |
|---|---|
| `compose.prod.yaml` | Alle Produktionsdienste, selbsttragend |
| `docker/php/Dockerfile` | Images `eat-app:prod` (PHP 8.5 FPM, Assets per AssetMapper + sass-bundle) und `eat-web:prod` (Caddy + `public/`) |
| `docker/php/entrypoint.sh` | Startprüfung: ohne `APP_ENV=prod`, `APP_DEBUG=0` und echtes `APP_SECRET` startet nichts |
| `deploy/komodo/eat.toml` | Komodo Resource Sync: Stack `eat` + Procedure `eat-backup` |
| `deploy/komodo/pre-deploy.sh` | Vor jedem Deploy: Platzhalter prüfen, DB sichern |
| `deploy/komodo/post-deploy.sh` | Nach jedem Deploy: Zustand ins Log, alte eat-Images aufräumen |
| `deploy/komodo/db-backup.sh` | Dump mit Rotation (Dienst `backup`) |
| `.env.prod.dist` | Alle Variablen, Secrets markiert, mit Komodo-Namen |

## Was auf dem Server läuft

| Dienst | Image | Aufgabe | Healthcheck |
|---|---|---|---|
| `database` | `mysql:8.4.13` | Datenbank `eat` (Volume `eat_database_data`) | `mysqladmin ping` |
| `migrate` | `eat-app:prod` | Einmal pro Deploy `doctrine:migrations:migrate`, beendet sich | – (Exit 0) |
| `app` | `eat-app:prod` | PHP-FPM (Symfony 8.1, PHP 8.5) | FPM-Ping |
| `worker` | `eat-app:prod` | `messenger:consume async` (Spotify-Warteschlange wiederherstellen, CheckQueue); Neustart nach 1 h / 128 MB | `dbal:run-sql SELECT 1` |
| `web` | `eat-web:prod` | Caddy, einziger Host-Port `10.0.0.2:8199`; `/img/*` → imgproxy | `/healthz` (Caddy → PHP → DB) |
| `imgproxy` | `ghcr.io/imgproxy/imgproxy:v4.0.25` | Bildgrößen (60/126/250/500 px, quadratisch) aus den Originalen, nur lesend, nur über `web` erreichbar | `imgproxy health` |
| `backup` | `mysql:8.4.13` | Nur auf Abruf (Profil `backup`): DB-Dump | – |

Keine Dev-Dienste (kein Mailpit, kein Adminer, kein offener DB-Port). Mails gibt es nicht (`MAILER_DSN=null://null`).

**Daten**

| Was | Wo auf abyss | Gesichert durch |
|---|---|---|
| Datenbank | Volume `eat_database_data` | `eat-backup` (täglich 03:15) + Pre-Deploy → `/srv/eat/backups`; offsite über `backup.target` |
| Originalbilder (Uploads, Team-Wappen) | `/srv/eat/images` (Bind-Mount, gehört UID/GID 82 = www-data im Image) | offsite über `backup.offsite_paths` |
| Spotify-Tokens | in der Datenbank (Tabelle `spotify_access_token`, je Benutzer) | mit der DB |
| Caddy-Zustand | Volumes `eat_caddy_data`, `eat_caddy_config` | nicht nötig |

**Bilder:** `ImageService` erzeugt für jedes Bild eine signierte URL `/img/<signatur>/rs:fill:…/…webp`; Caddy reicht
sie an imgproxy weiter, das die passende Größe aus `/srv/eat/images` berechnet. Gespeichert wird davon nichts (früher
LiipImagine mit Vorschau-Cache). Die URL enthält einen Cachebuster (Datei-ID + Änderungszeit), daher darf der Browser
lange cachen. Ohne `IMGPROXY_KEY` (lokal) liefert `/media/original/{id}` das Original.

Nichts liegt im Stack-Ordner `/etc/komodo/stacks/eat` außer dem Code und der von Komodo geschriebenen
`.env.prod.local`.

**Debug-Modus ist ausgeschlossen:** `APP_ENV=prod`/`APP_DEBUG=0` stehen fest in `compose.prod.yaml` (nicht in der
Env-Datei) und im Image; `entrypoint.sh` bricht bei allem anderen ab; dev-Pakete (Profiler, DebugBundle) sind gar
nicht im Image. (securitas lief wegen `APP_ENV=env` öffentlich im Debug-Modus.)

**Registrierung** unter `/register` ist in Produktion aus (`REGISTRATION_ENABLED=0`, Seite 404, Knopf weg).
Benutzer legst du mit `app:create-default-user` an (siehe [Hilfsbefehle](#hilfsbefehle)).

## Variablen und Secrets

Komodo → Settings → Variables, jeweils mit Häkchen **Secret**:

| Komodo-Variable | Env-Name | Woher |
|---|---|---|
| `EAT_APP_SECRET` | `APP_SECRET` | securitas: `APP_SECRET` aus `/var/www/fifa_tournament/.env` (bzw. `.env.local`) – dann bleiben Remember-me-Cookies gültig. Sonst `openssl rand -hex 32` |
| `EAT_MYSQL_PASSWORD` | `MYSQL_PASSWORD` | neu: `openssl rand -hex 24` (DB-Benutzer `eat` in MySQL 8.4) |
| `EAT_MYSQL_ROOT_PASSWORD` | `MYSQL_ROOT_PASSWORD` | neu: `openssl rand -hex 24` |
| `EAT_SPOTIFY_CLIENT_ID` | `SPOTIFY_CLIENT_ID` | securitas `.env` bzw. developer.spotify.com → Dashboard → App |
| `EAT_SPOTIFY_CLIENT_SECRET` | `SPOTIFY_CLIENT_SECRET` | wie oben |
| `EAT_IMGPROXY_KEY` | `IMGPROXY_KEY` | neu: `openssl rand -hex 32` |
| `EAT_IMGPROXY_SALT` | `IMGPROXY_SALT` | neu: `openssl rand -hex 32` |
| `EAT_SENTRY_DSN` | `SENTRY_DSN` | optional, securitas `.env`. Ohne Sentry: Zeile `SENTRY_DSN = …` im Environment von `eat.toml` löschen |

Die MySQL-Passwörter gelten nur beim allerersten Start (leeres Volume). Danach nie mehr ändern bzw. nur zusammen
mit `ALTER USER` in der Datenbank. Alle Secrets zusätzlich im Passwortmanager ablegen.

Nicht geheim und fest in `eat.toml`: `DEFAULT_URI=https://eat.wh-company.de`,
`SPOTIFY_REDIRECT_URI=https://eat.wh-company.de/spotify/callback`, `HTTP_BIND=10.0.0.2`, `HTTP_PORT=8199`,
`REVERSE_PROXY_IPS=10.0.0.1`, `FORCED_RUNNING_TIME=30`, `REGISTRATION_ENABLED=0`, `MAILER_DSN=null://null`,
`MYSQL_DATABASE=eat`, `MYSQL_USER=eat`, `IMAGE_HOST_DIR=/srv/eat/images`, `BACKUP_DIR=/srv/eat/backups`,
`BACKUP_KEEP=14`.

!!! warning "Keine Platzhalter in Kommentare"
    Komodo schreibt den ganzen `environment`-Block (auch Kommentare) nach `.env.prod.local` und ersetzt ein
    unbekanntes `[[NAME]]` nicht. `pre-deploy.sh` bricht ab, sobald dort noch `[[…]]` steht – also nie
    `[[…]]` in Kommentare des Blocks schreiben.

## Deployment über Komodo

### Was bei einem Deploy passiert

1. Komodo zieht `master` (`git pull` im Stack-Ordner) und schreibt `.env.prod.local`.
2. **Pre Deploy** (`pre-deploy.sh`, im Periphery-Container): `.env.prod.local` vorhanden/lesbar? Projekt und
   `VOLUME_PREFIX` passen zusammen? Kein unaufgelöstes `[[…]]`? Dann Dump `eat-db-<zeit>-pre-deploy.sql.gz`
   (beim allerersten Deploy ohne Datenbank übersprungen). Exit ≠ 0 bricht ab.
3. `docker compose -p eat -f compose.prod.yaml --env-file .env.prod.local build` (`run_build`), dann
   `up -d --wait --wait-timeout 300`: `database` gesund → `migrate` → `app`/`worker` → `web`.
4. **Post Deploy** (`post-deploy.sh`): Dienste-Status, `/healthz`, letzte Migrationszeile, alte eat-Images löschen.

### Einmalige Einrichtung

1. **GitHub:** Repo `rextuus/fifa_tournament` zum Token `komodo-abyss` hinzufügen (GitHub → Settings → Developer
   settings → Fine-grained tokens → Repository access).
2. **abyss** (per SSH):
   ```bash
   sudo install -d -m 700 /srv/eat/backups
   sudo install -d -m 750 -o 82 -g 82 /srv/eat/images
   ```
   Beide Ordner legt Docker absichtlich nicht selbst an (`create_host_path: false`) – fehlt einer, scheitert der
   Start bzw. die Sicherung laut statt still ins Leere zu schreiben.
3. **Komodo → Settings → Variables:** die acht (bzw. sieben ohne Sentry) Secrets aus der Tabelle oben.
4. **Komodo → Syncs → New Resource Sync:** Mode „Git Repo“, Repo `rextuus/fifa_tournament`, Branch `master`,
   Account `rextuus`, Resource Path `deploy/komodo/eat.toml`, „Delete Unmatched“ **aus** → Refresh → Änderungen
   prüfen (Stack `eat`, Procedure `eat-backup`) → Execute Sync. Der Sync deployt nicht (`deploy = false`).

### Deploy im Alltag

Pushen nach `master`, dann in Komodo Stack `eat` → **Deploy**. Es gibt kein Auto-Deploy (kein Webhook, kein Poll).

### Rollback

- **Code:** Im Stack unter **Commit** den letzten guten Hash eintragen → **Deploy**, danach das Feld wieder leeren
  (ein Resource Sync setzt es ohnehin auf `commit = ""` zurück).
- **Migrationen** laufen nur vorwärts. Hat eine neue Version die Datenbank umgebaut, zusätzlich den Dump vom Deploy
  (`…-pre-deploy.sql.gz`) einspielen ([Wiederherstellen](#wiederherstellen-datenbank)).
- **Scheitert `migrate`**, meldet Komodo den Deploy als fehlgeschlagen; `app`/`worker` sind dann schon ersetzt,
  starten aber nicht – **die Seite ist unten**. Log von `migrate` ansehen, Fehler beheben und neu deployen oder
  zurückrollen (Commit + ggf. Dump, weil MySQL Tabellenänderungen nicht zurücknimmt).

## Sicherung

| Wann | Wer | Datei in `/srv/eat/backups` | Bleiben liegen |
|---|---|---|---|
| täglich 03:15 (Europe/Berlin) | Komodo-Procedure `eat-backup` | `eat-db-<UTC-Zeit>-daily.sql.gz` | 14 (`BACKUP_KEEP`) |
| vor jedem Deploy | `pre-deploy.sh` | `eat-db-<UTC-Zeit>-pre-deploy.sql.gz` | 14 |
| von Hand | du | `eat-db-<UTC-Zeit>-manuell.sql.gz` | 14 |

- Rotation je Anlass getrennt. Dump erst unter seinem Namen, wenn vollständig (Abschlusszeile, `CREATE TABLE`,
  `gzip -t`). Rechte 600/700, root, `umask 077`. Unaufgelöstes `[[…]]` beim Root-Passwort → Abbruch.
- Die Procedure ruft `RunStackService` mit `no_deps` auf: Läuft der Stack nicht, scheitert der Dump absichtlich und
  Komodo alarmiert (`failure_alert`). Komodo macht dabei vorher ein `git pull` im Stack-Ordner, deployt aber nichts.
- **Bilder** (`/srv/eat/images`) sind nicht im Dump. Außer Haus sichert sie die nächtliche Offsite-Sicherung von
  abyss (05:15, restic → B2) über `backup.offsite_paths` im homelab-Inventar; die Dumps über `backup.target`.
- Von Hand: Komodo → Procedure `eat-backup` → Run, oder auf abyss:
  ```bash
  cd /etc/komodo/stacks/eat
  sudo docker compose -p eat -f compose.prod.yaml --env-file .env.prod.local run --rm --no-TTY --no-deps backup manuell
  ```

### Wiederherstellen (Datenbank)

Auf abyss, aus einem lokalen Dump:

```bash
cd /etc/komodo/stacks/eat
DC="sudo docker compose -p eat -f compose.prod.yaml --env-file .env.prod.local"
$DC stop web worker app
# Dump wählen (neueste zuerst)
sudo ls -1t /srv/eat/backups/
sudo gunzip -c /srv/eat/backups/eat-db-<zeit>-<anlass>.sql.gz \
  | $DC exec -T database sh -c 'mysql --default-character-set=utf8mb4 -uroot -p"$MYSQL_ROOT_PASSWORD"'
$DC start app
$DC exec app php bin/console doctrine:migrations:migrate --no-interaction
$DC exec app php bin/console doctrine:schema:validate
$DC start worker web
```

Die Dumps enthalten `CREATE DATABASE`/`USE eat` (`--databases`) und ersetzen die Tabellen vollständig.

**Aus der Offsite-Sicherung** (abyss weg oder Dumps/Bilder beschädigt): Wiederherstellung vom Arbeitsrechner mit dem
Key `restore-readonly`, siehe homelab `docs/offsite.md`, Abschnitt „Wiederherstellen“. Gebraucht werden
`/srv/eat/backups` (Dump einspielen wie oben) und `/srv/eat/images` (zurück nach `/srv/eat/images`, danach
`sudo chown -R 82:82 /srv/eat/images`).

## Hilfsbefehle

Alle auf abyss im Stack-Ordner, mit `DC` wie oben:

```bash
cd /etc/komodo/stacks/eat
DC="sudo docker compose -p eat -f compose.prod.yaml --env-file .env.prod.local"

# Benutzer anlegen (Registrierung ist aus). Leerzeichen vor dem Befehl: landet nicht in der Shell-History.
 $DC exec app php bin/console app:create-default-user name@example.org 'Passwort'

# Team-Datenbank von FIFA Index holen bzw. Wappen nachladen (schreibt nach /srv/eat/images/team)
$DC exec app php bin/console app:crawl-teams
$DC exec app php bin/console app:crawl-team-emblems

# Runden und Spiele für ein Turnier erzeugen
$DC exec app php bin/console app:generate-tournament-fixtures

# Messenger: Stand der Warteschlangen, fehlgeschlagene Nachrichten
$DC exec app php bin/console messenger:stats
$DC exec app php bin/console messenger:failed:show
$DC exec app php bin/console messenger:failed:retry

# Migrationen / Schema
$DC exec app php bin/console doctrine:migrations:status
$DC exec app php bin/console doctrine:schema:validate
```

Optionen der Befehle: `… <befehl> --help`.

## Fehlersuche

| Symptom | Nachsehen |
|---|---|
| Deploy bricht im Pre Deploy ab: „In Komodo fehlen diese Variablen“ | Variable(n) in Komodo anlegen, Namen exakt wie gemeldet |
| „APP_ENV muss 'prod' sein“ / „APP_SECRET fehlt“ im Log von app/worker/migrate | `entrypoint.sh` hat den Start verweigert – `EAT_APP_SECRET` prüfen |
| `bind source path does not exist: /srv/eat/images` (oder `/srv/eat/backups`) | Ordner anlegen ([Einrichtung](#einmalige-einrichtung)) |
| Upload schlägt fehl, `Permission denied` unter `/srv/eat/images` | `sudo chown -R 82:82 /srv/eat/images` |
| `web` unhealthy | `curl -s http://10.0.0.2:8199/healthz` auf abyss; `{"database":"unavailable"}` → `database` prüfen |
| Seite lädt, aber Links/Weiterleitungen auf `http://` | `REVERSE_PROXY_IPS` muss `10.0.0.1` sein; Caddy auf dem VPS muss X-Forwarded-Proto setzen (tut er standardmäßig) |
| Spotify-Login: „INVALID_CLIENT: Invalid redirect URI“ | Im Spotify-Developer-Dashboard `https://eat.wh-company.de/spotify/callback` als Redirect URI eintragen |
| Tor-Hymne läuft weiter / Warteschlange wird nicht wiederhergestellt | `worker` läuft? `$DC logs worker`, `messenger:stats`, `messenger:failed:show` |
| Bild fehlt (`/img/…` antwortet 404) | Original in `/srv/eat/images` vorhanden (Pfad = Spalten `path`/`name`/`extension` der Tabelle `file`)? `$DC logs imgproxy` |
| `/img/…` antwortet 403 | Signatur passt nicht: `EAT_IMGPROXY_KEY`/`_SALT` in app und imgproxy gleich? (beide aus derselben Env-Datei) |
| imgproxy: `permission denied` | Rechte unter `/srv/eat/images`: Gruppe 82 muss lesen dürfen (`sudo chown -R 82:82 …`, Ordner 750, Dateien 640) |

Logs: Komodo → Stack `eat` → Service → Log, oder `$DC logs --tail 100 <dienst>`. Symfony schreibt in Produktion
JSON nach stderr (nur ab Fehlern, mit den Zeilen davor).

## Umzug von securitas (einmalig)

Ausgangslage: Seite auf securitas seit 20.11.2026 abgeschaltet (`a2dissite eat eat-le-ssl`), Ordner
`/var/www/fifa_tournament` und Datenbanken `eat` (≈ 1 MB) und `fifa` (leer, wird nicht übernommen) unverändert.
**Keine Ausfallzeit:** Die Seite ist ohnehin aus; DNS wird erst nach dem Smoke-Test umgestellt. Dauer insgesamt
etwa eine Stunde, davon Datenübernahme wenige Minuten.

### 0. Vorher

- [ ] Ungepushte Änderungen von securitas sind im Repo (bekannt: `templates/tournament/manage_battle.html.twig`).
      Auf securitas prüfen, ob es noch mehr gibt:
      ```bash
      cd /var/www/fifa_tournament && git status --short && git diff --stat
      ```
      Hinweis: `SpotifyController` importierte eine Klasse `App\Twig\Helper\GoalHymnEntityWrapper`, die es im Repo
      nicht gibt (Import inzwischen entfernt) – falls `src/Twig/Helper/` auf securitas existiert, mit ins Repo holen.
- [ ] Werte aus der securitas-`.env` ablesen (nicht kopieren, nur in Komodo/Passwortmanager übertragen):
      ```bash
      cd /var/www/fifa_tournament
      grep -hE '^(APP_SECRET|SPOTIFY_CLIENT_ID|SPOTIFY_CLIENT_SECRET|SENTRY_DSN|IMAGE_DIR|FORCED_RUNNING_TIME)=' .env .env.local 2>/dev/null
      ```
      `IMAGE_DIR` zeigt, wo die Originalbilder liegen (Standard `data/images` relativ zu `/var/www/fifa_tournament`).
- [ ] Code committet und gepusht, [Einmalige Einrichtung](#einmalige-einrichtung) erledigt (Token, Ordner,
      Variablen, Resource Sync).

### 1. Daten auf securitas einpacken

```bash
# Datenbank (MySQL 8.0). Ohne --databases: lässt sich in jede Datenbank einspielen.
sudo mysqldump --single-transaction --quick --routines --triggers --hex-blob \
  --default-character-set=utf8mb4 --set-gtid-purged=OFF --no-tablespaces eat \
  | gzip > ~/eat-umzug.sql.gz
gunzip -t ~/eat-umzug.sql.gz && zcat ~/eat-umzug.sql.gz | tail -1     # muss "-- Dump completed" sein

# Originalbilder (ohne den Liip-Vorschau-Cache public/media – den gibt es nicht mehr)
sudo tar -C /var/www/fifa_tournament/data/images -czf ~/eat-images.tgz .
tar -tzf ~/eat-images.tgz | head
chmod 600 ~/eat-umzug.sql.gz ~/eat-images.tgz
```

Beide Dateien auf abyss nach `/tmp` bringen (z. B. über den Arbeitsrechner mit `scp`).

### 2. Erster Deploy (leer)

Komodo → Stack `eat` → **Deploy**. Pre Deploy meldet „Noch keine Datenbank vorhanden – Sicherung übersprungen“,
`migrate` legt das Ausgangsschema an (`Version20261125000000`, `Version20261125000100`), alle Dienste werden healthy.
Kurz prüfen (auf abyss): `curl -s http://10.0.0.2:8199/healthz` → `{"status":"ok","database":"ok"}`.

### 3. Datenbank übernehmen (MySQL 8.0 → 8.4)

```bash
cd /etc/komodo/stacks/eat
DC="sudo docker compose -p eat -f compose.prod.yaml --env-file .env.prod.local"
$DC stop web worker app
sudo gunzip -c /tmp/eat-umzug.sql.gz | $DC exec -T database sh -c 'mysql --default-character-set=utf8mb4 -uroot -p"$MYSQL_ROOT_PASSWORD" eat'
$DC start app
$DC exec app php bin/console doctrine:migrations:status
$DC exec app php bin/console doctrine:migrations:migrate --no-interaction
$DC exec app php bin/console doctrine:schema:validate
```

Erwartet:

- Der Dump ersetzt alle Tabellen, die er enthält (`DROP TABLE IF EXISTS` + `CREATE TABLE`). Was er nicht enthält
  (z. B. `messenger_messages`, `doctrine_migration_versions`), bleibt vom ersten Deploy stehen.
- `migrations:status`: Executed 2, New 0, **Executed Unavailable 0**. Steht bei „Executed Unavailable“ etwas (der
  Dump brachte eine eigene `doctrine_migration_versions` mit alten Versionen mit):
  ```bash
  $DC exec app php bin/console doctrine:migrations:version --delete --all --no-interaction
  $DC exec app php bin/console doctrine:migrations:migrate --no-interaction
  ```
  Die Ausgangsmigration erkennt die vorhandenen Tabellen und vermerkt sich nur als ausgeführt („Schema existiert
  bereits (Import von securitas)“), ohne etwas zu ändern.
- `schema:validate`: beide Teile **OK**. Meldet „Database: not in sync“, wich das Schema auf securitas vom Code ab
  (dort lief früher `schema:update`). Dann den Unterschied ansehen und als Migration ins Repo bringen, **nicht**
  `schema:update --force` in Produktion:
  ```bash
  $DC exec app php bin/console doctrine:schema:update --dump-sql
  ```
  Lokal mit dem Dump nachstellen, `doctrine:migrations:diff` erzeugen, prüfen, committen, deployen.

### 4. Bilder übernehmen

```bash
sudo tar -C /srv/eat/images -xzf /tmp/eat-images.tgz
sudo chown -R 82:82 /srv/eat/images
sudo find /srv/eat/images -type d -exec chmod 750 {} + ; sudo find /srv/eat/images -type f -exec chmod 640 {} +
$DC start worker web
sudo shred -u /tmp/eat-umzug.sql.gz; sudo rm /tmp/eat-images.tgz
```

Die Pfade in der Tabelle `file` sind relativ (z. B. `ab/cd/bild-123.png`, `team/FC Barcelona.png`) und passen
unverändert zu `/srv/eat/images`.

Danach einmal von Hand sichern (Komodo → Procedure `eat-backup` → Run) und prüfen, dass
`/srv/eat/backups/eat-db-…-daily.sql.gz` entstanden ist.

### 5. Smoke-Test (vor der DNS-Umstellung)

Vom Arbeitsrechner über einen SSH-Tunnel (die Seite ist noch nicht öffentlich):

```bash
ssh -N -L 8199:10.0.0.2:8199 abyss
# Browser: http://localhost:8199
```

- [ ] `http://localhost:8199/healthz` → `{"status":"ok","database":"ok"}`
- [ ] Login mit einem bestehenden Konto von securitas (Passwort-Hashes sind übernommen)
- [ ] Dashboard, Turnierliste, ein bestehendes Turnier (Detail + Verwalten), Teilnehmer, Einstellungen
- [ ] Bilder: Team-Wappen und Profilbilder erscheinen (`/img/…` → imgproxy); ein Profilbild hochladen
- [ ] Ein Testturnier anlegen und wieder löschen bzw. ein Ergebnis eintragen
- [ ] `/register` → 404
- [ ] Spotify erst nach Schritt 6 (die Redirect-URI zeigt auf die echte Domain)

### 6. Öffentlich schalten

1. **Spotify-Developer-Dashboard** (developer.spotify.com → App → Settings → Redirect URIs):
   `https://eat.wh-company.de/spotify/callback` eintragen (die alte securitas-URI kann bleiben oder raus).
2. **homelab-Repo** (Inventar-Eintrag unten): `inventory.yaml` ergänzen, dann
   `bin/inventory`, `bin/gen-docs`, `bin/gen-caddy`, `bin/gen-offsite`, committen,
   `bin/caddy-deploy` (Trockenlauf), `bin/caddy-deploy --apply`.
3. **DNS** bei Strato: `eat.wh-company.de` auf den VPS (wie die anderen Projekt-Domains) und auf securitas
   `eat.wh-company.de` aus `HOSTNAMES_WH` in `~master/strato_update.sh` entfernen – sonst setzt das DynDNS-Skript
   die Domain bei der nächsten IP-Änderung zurück auf securitas.
4. Nach der DNS-Umstellung holt Caddy auf dem VPS das Zertifikat. Prüfen:
   `curl -sI https://eat.wh-company.de/healthz`, dann im Browser Login und **Spotify verbinden** (Einstellungen →
   Spotify-Login, Tor-Hymne testen).
5. homelab: `bin/monitors` → `bin/monitors --apply`, `bin/check` grün.

### Rückfallebene

securitas bleibt bis zur Freigabe unverändert (Ordner, DB `eat`, vHosts nur deaktiviert). Geht etwas schief:

- **Vor der DNS-Umstellung:** nichts zu tun – die Seite war nie öffentlich auf abyss. Fehler beheben, Schritt 3/4
  wiederholen (der Import ersetzt die Tabellen).
- **Nach der DNS-Umstellung:** DNS zurück auf securitas, Domain wieder in `HOSTNAMES_WH`,
  `sudo a2ensite eat eat-le-ssl && sudo systemctl reload apache2` – **vorher `APP_ENV=prod` in der securitas-`.env`
  setzen**, sonst läuft die Seite wieder im Debug-Modus. Achtung: Was inzwischen auf abyss eingetragen wurde, fehlt
  dann auf securitas.
- Nach ein paar Tagen ohne Probleme: auf securitas `/var/www/fifa_tournament` und die Datenbanken `eat`/`fifa`
  sichern (z. B. nach `/home/master/abschied`) und entfernen, vHosts und Zertifikat löschen.

### Eintrag im homelab-Inventar

Vorschlag für `inventory.yaml` (homelab), Abschnitt `projects:` – Endzustand nach dem Cutover:

```yaml
  eat:
    description: FIFA-Turniere – Teams, Spielpläne und Ergebnisse für die Turnierabende
    repo: rextuus/fifa_tournament
    branch: master
    host: abyss
    komodo_stack: eat
    compose_project: eat
    status: live-komodo
    ingress: caddy
    domains:
      - eat.wh-company.de
    monitor: { path: /healthz }
    port: 8199
    bind: 10.0.0.2
    # Kein caddy:-Block nötig: Caddy setzt X-Forwarded-* selbst, keine Streams/Websockets, Uploads klein (≤ 16 MB).
    data:
      - Named Volume eat_database_data (MySQL 8.4)
      - /srv/eat/images (Bind-Mount, Originalbilder; gehört 82:82)
      - /srv/eat/backups
    backup:
      time: "03:15"
      what: DB
      target: /srv/eat/backups
      active: true
      offsite_paths:
        - /srv/eat/images # Uploads und Team-Wappen, nicht im Dump
      notes: Komodo-Procedure eat-backup, täglich 03:15; dazu ein Dump vor jedem Deploy. Je Anlass bleiben 14.
    notes: >-
      Von securitas umgezogen (Cutover <Datum>; vorher /var/www/fifa_tournament, Apache/MySQL 8.0, lief wegen
      APP_ENV=env im Debug-Modus). Symfony 8.1/PHP 8.5, Messenger-Worker für die Spotify-Tor-Hymnen. Registrierung
      aus, Benutzer per app:create-default-user. Mails: keine.
```

Solange DNS noch auf securitas zeigt (zwischen Schritt 2 und 6), passt stattdessen `status: migrating`,
`ingress: legacy`, `legacy_host: securitas` (dann darf die Domain noch nicht im Caddyfile stehen).

## Lokaler Probelauf

Auf dem Entwicklungsrechner, mit eigenem Projektnamen, eigenem `VOLUME_PREFIX` und Wegwerf-Ordnern:

```bash
cp .env.prod.dist .env.prod.local          # ausfüllen: Zufalls-Secrets, VOLUME_PREFIX=eatprobe,
                                           # HTTP_BIND=127.0.0.1, HTTP_PORT=18199, IMAGE_HOST_DIR/BACKUP_DIR auf
                                           # Wegwerf-Ordner (images: chown 82:82, backups: root, 700)
docker compose -p eatprobe -f compose.prod.yaml --env-file .env.prod.local up -d --build --wait
# Pre-/Post-Deploy realistisch im Periphery-Image (Pfad des Repos 1:1 einhängen, Bind-Mounts löst der Host auf):
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v "$PWD:$PWD" -w "$PWD" -e COMPOSE_PROJECT=eatprobe \
  --entrypoint sh ghcr.io/moghtech/komodo-periphery:2 deploy/komodo/pre-deploy.sh
# aufräumen (nur die Probe-Volumes!)
docker compose -p eatprobe -f compose.prod.yaml --env-file .env.prod.local down -v
rm .env.prod.local
```

Ohne `VOLUME_PREFIX` verweigert `pre-deploy.sh` den Lauf unter einem anderen Projektnamen als `eat`.

## Entwicklung

Lokal läuft alles in Docker (`compose.yaml`, Projekt `eat-dev`, Docker-Stufe `dev`) und wird über das `Makefile`
bedient – lokal installiertes PHP ist nicht nötig (Symfony 8.1 braucht PHP ≥ 8.4). Dienste: `app` (PHP-FPM),
`web` (Caddy, http://localhost:8000), `worker` (Messenger) und `sass` (baut `assets/styles/app.scss` bei Änderungen).
Datenbank ist SQLite (`var/data.db`), Bilder kommen im Original aus `data/images` (ohne `IMGPROXY_KEY` kein imgproxy).
JavaScript braucht keinen Build (AssetMapper, `importmap.php`; neue Pakete mit `importmap:require`).

```bash
make setup        # erstes Mal: starten, composer/importmap install, Schema anlegen, Login admin@eat.local / admin123
make up           # danach: starten → http://localhost:8000
make up-lan       # zusätzlich im WLAN erreichbar, zum Testen am Handy (http://<LAN-IP>:8001)
make qa           # mago lint/analyze/format, Twig-Lint, PHPUnit
make help         # alle Befehle
```

Die Migrationen sind MySQL-spezifisch (Produktion); lokal legt `make db` das SQLite-Schema per
`doctrine:schema:update` aus dem Mapping an. Der Worker hält Code im Speicher – nach PHP-Änderungen
`make worker-restart`. Eigene Ports (`WEB_PORT`, `WEB_LAN_PORT`, `WEB_LAN_IP`) optional in `.env.docker.local`.

Tests: Unit-Tests der Turnierberechnung plus Smoke-Tests (`tests/Smoke`: `/healthz`, Login, Registrierung aus,
Dashboard, Turnier anlegen/verwalten/ansehen, Teilnehmer) gegen eine SQLite-Testdatenbank.

**mago** (wie optatio/wedora, `mago.toml`): Altlasten stehen in `mago-lint-baseline.toml` und
`mago-analyze-baseline.toml`; nur neue Befunde schlagen fehl. Nach dem Beheben alter Befunde die Baselines schrumpfen:
`vendor/bin/mago lint --remove-outdated-baseline-entries --baseline mago-lint-baseline.toml` (analog `analyze`).
