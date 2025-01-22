import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
    static outlets = ['modal-common']
    static values = {
        formUrl: String,
        title: String,
        declineText: String,
        submitText: String
    }

    async openModal(event)
    {
        event.preventDefault()

        this.modalCommonOutlet.openCommonModal(event, {
            title: this.titleValue,
            content: await loadContentFromUrl(this.formUrlValue),
            isAjax: this.isAjaxValue,
            method: this.methodValue,
            isFormSubmit: true,
            submitText: this.submitTextValue,
            declineText: this.declineTextValue,
        });
    }
}

async function loadContentFromUrl(url, method = 'GET') {
    return fetch(url, {
        method: method,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
        .then(response => response.text())
        .then(html => {
            return html;
        })
        .catch(error => {
            console.log(error);
        });
}
