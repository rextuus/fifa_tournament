import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['button', 'goalValue'];

    connect() {
        console.log('GoalController connected');
    }

    async increaseGoal(event) {
        event.preventDefault();

        const button = event.target.closest('button');
        const playerId = button.dataset.playerId;

        if (!playerId) {
            return; // Exit if the player ID is missing
        }

        // Show the GIF overlay
        const overlay = document.getElementById('goal-overlay');
        overlay.classList.remove('d-none'); // Make it visible

        // Hide the overlay after 20 seconds
        setTimeout(() => {
            overlay.classList.add('d-none'); // Hide it after 20s
        }, 20000);

        // Fetch required data and logic goes here
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

            const updatedGoalValue = await response.json();
            const goals = isHome === '1' ? updatedGoalValue.homeGoals : updatedGoalValue.awayGoals;

            this.goalValueTarget.innerHTML = goals;
        } catch (error) {

            // console.error('Error: ', error);
        }
    }
}