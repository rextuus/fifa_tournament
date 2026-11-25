#!/bin/sh
# eat – Startprüfung für app, worker und migrate (Produktions-Image).
# Auf securitas lief die Seite wegen APP_ENV=env (Tippfehler) öffentlich im Debug-Modus. Das darf nicht wieder
# passieren: Mit falschem oder fehlendem APP_ENV/APP_DEBUG startet der Container gar nicht erst.
set -eu

case "${APP_ENV:-}" in
  prod) ;;
  *) echo "eat: APP_ENV muss 'prod' sein (ist: '${APP_ENV:-}') – Start abgebrochen." >&2; exit 1 ;;
esac
case "${APP_DEBUG:-0}" in
  0|false) ;;
  *) echo "eat: APP_DEBUG muss 0 sein (ist: '${APP_DEBUG}') – Start abgebrochen." >&2; exit 1 ;;
esac
# Komodo lässt ein unbekanntes [[NAME]] wörtlich stehen.
case "${APP_SECRET:-}" in
  ''|*'[['*']]'*) echo "eat: APP_SECRET fehlt oder ist ein unaufgelöstes [[…]] – Secret in Komodo prüfen." >&2; exit 1 ;;
esac

exec docker-php-entrypoint "$@"
