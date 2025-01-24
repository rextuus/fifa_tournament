// assets/controllers/goal_controller.js
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['button', 'goalValue'];

    connect() {
        // Initialization if required
        console.log('GoalController connected');
    }

    async increaseGoal(event) {
        event.preventDefault();

        // Get the necessary data (e.g., fixtureId, participantId, isHome)
        const fixtureId = this.element.dataset.goalFixtureId;
        const participantId = this.element.dataset.goalParticipantId;
        const isHome = this.element.dataset.goalIsHome; // Assumes you add these as data-* to your element

        try {
            // Make the AJAX request to your run route
            const response = await fetch(`/spotify/run/${fixtureId}/${participantId}?isHome=${isHome}`, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Failed to increase goal');
            }

            // Parse the response JSON
            const updatedGoalValue = await response.json(); // Adjust based on response data
            // Determine the correct value (homeGoals or awayGoals) to display
            const goals = isHome === "1" ? updatedGoalValue.homeGoals : updatedGoalValue.awayGoals;

            // Update the DOM with the correct value
            this.goalValueTarget.innerHTML = goals;
        } catch (error) {
            if (error = 'Failed to increase goal'){
                return;
            }
            console.error('Error: ', error);
        }
    }
}