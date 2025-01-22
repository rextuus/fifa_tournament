import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ['range',"maximum", "start", "end", "startLabel", "endLabel", "currentLabel"];

    connect() {
        this.updateLabels(); // Initialize labels on page load
    }

    adjust() {
        let startValue = parseInt(this.startTarget.value, 10);
        let endValue = parseInt(this.endTarget.value, 10);
        const range = parseInt(this.rangeTarget.innerHTML, 10);
        const maximum = parseInt(this.maximumTarget.innerHTML, 10);

        // end should be after start
        if (startValue >= endValue) {
            endValue = startValue + range;
        }

        if (endValue - startValue > range) {
            endValue = startValue + range;

        }

        // Update input values
        this.startTarget.value = startValue;
        this.endTarget.value = endValue;

        this.updateLabels();
    }

    updateLabels() {
        let startMinute = Math.floor(this.startTarget.value / 60);
        let startSecond = (this.startTarget.value % 60).toString().padStart(2, '0');

        let endMinute = Math.floor(this.endTarget.value / 60);
        let endSecond = (this.endTarget.value % 60).toString().padStart(2, '0');

        this.startLabelTarget.textContent = `${startMinute}:${startSecond}`;
        this.endLabelTarget.textContent = `${endMinute}:${endSecond}`;
        this.currentLabelTarget.textContent = this.endTarget.value - this.startTarget.value;
    }
}