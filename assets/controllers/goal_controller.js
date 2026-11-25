import { Controller } from '@hotwired/stimulus';

/*
 * Tor-Pad im Spiel-Detail: Klick auf einen Spieler zählt ein Tor (GET /spotify/run/…), startet ggf. die Torhymne
 * und zeigt das Tor-Overlay (#goal-overlay, falls in den Einstellungen aktiv). Antippen des Overlays schließt es.
 */
export default class extends Controller {
    static targets = ['goalValue'];

    async increaseGoal(event) {
        event.preventDefault();

        const button = event.target.closest('button');
        const playerId = button?.dataset.playerId;

        if (!playerId || button.disabled) {
            return;
        }

        button.classList.remove('is-scored');
        void button.offsetWidth; // Animation neu starten
        button.classList.add('is-scored');
        if (navigator.vibrate) {
            navigator.vibrate(60);
        }

        this.showOverlay();

        const fixtureId = this.element.dataset.goalFixtureId;
        const participantId = this.element.dataset.goalParticipantId;
        const isHome = this.element.dataset.goalIsHome;

        try {
            const response = await fetch(
                `/spotify/run/${fixtureId}/${participantId}/${playerId}?isHome=${isHome}`,
                { method: 'GET' }
            );

            if (!response.ok) {
                throw new Error('Failed to increase goal');
            }

            const updated = await response.json();
            const goals = isHome === '1' ? updated.homeGoals : updated.awayGoals;

            this.goalValueTarget.textContent = goals;
            this.goalValueTarget.classList.remove('bump');
            void this.goalValueTarget.offsetWidth;
            this.goalValueTarget.classList.add('bump');

            const scoreEl = document.querySelector(isHome === '1' ? '[data-score-home]' : '[data-score-away]');
            if (scoreEl) {
                scoreEl.textContent = goals;
            }
        } catch (error) {
            // Tor wurde nicht gezählt – Anzeige bleibt unverändert.
        }
    }

    showOverlay() {
        const overlay = document.getElementById('goal-overlay');
        if (!overlay) {
            return;
        }

        overlay.classList.remove('d-none');
        const hide = () => overlay.classList.add('d-none');
        overlay.addEventListener('click', hide, { once: true });
        clearTimeout(this.overlayTimer);
        this.overlayTimer = setTimeout(hide, 20000);
    }
}
