import {Controller} from '@hotwired/stimulus';
import Modal from 'bootstrap/js/src/modal';
import Tooltip from 'bootstrap/js/src/tooltip';

export default class extends Controller {
    static targets = ['modalTitle', 'modalContent', 'submitText', 'declineText', 'modal'];

    static values = {
        url: String,
        isAjax: Boolean,
        isFormSubmit: Boolean,
        method: String
    }

    modal = null;

    /**
     * @param {Object} event
     * @param {Object} options
     * @param {string} options.title
     * @param {string} options.content
     * @param {string} options.url
     * @param {string} options.submitText
     * @param {string} options.declineText
     * @param {boolean} options.isAjax
     * @param {string} options.method
     * @param {boolean} options.isFormSubmit
     */
    async openCommonModal(event, options) {
        event.preventDefault();

        const defaultOptions = {
            title: null,
            content: null,
            url: null,
            submitText: null,
            declineText: null,
            isAjax: false,
            method: 'GET',
            isFormSubmit: false
        };

        const modalOptions = Object.assign({}, defaultOptions, options);

        this.modalTitleTarget.innerHTML = modalOptions.title;
        this.modalContentTarget.innerHTML = modalOptions.content;

        if (!modalOptions.submitText && !modalOptions.isFormSubmit) {
            this.submitTextTarget.classList.add('hidden');
        } else {
            this.submitTextTarget.classList.remove('hidden');
            this.submitTextTarget.innerHTML = modalOptions.submitText;
        }

        if (modalOptions.declineText) {
            this.declineTextTarget.innerHTML = modalOptions.declineText;
        }

        this.urlValue = modalOptions.url;
        this.isAjaxValue = modalOptions.isAjax;
        this.methodValue = modalOptions.method;
        this.isFormSubmitValue = modalOptions.isFormSubmit;

        if (!this.modal) {
            this.modal = new Modal(this.modalTarget);
        }

        this._assignToolTipsInCommonModal();

        this.modal.show();
    }

    submitCommonModal(event) {
        if (this.isFormSubmitValue) {
            this._submitCommonModalWithForm(event);
        } else {
            this._submitUrlValue(event, this.urlValue, this.methodValue);
        }
    }

    async _submitUrlValue(event, url, method) {
        event.preventDefault();

        if (this.isAjaxValue) {
            fetch(url, {
                method: method,
                headers: {'X-Requested-With': 'XMLHttpRequest'}
            })
                .then(response => response.text())
                .then(json => {
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                });
        } else if (method === 'GET' && typeof Turbo !== 'undefined') {
            Turbo.visit(url);
        } else {
            window.location.href = url;
        }
    }

    async _submitCommonModalWithForm(event) {
        event.preventDefault();

        const form = this.modalContentTarget.getElementsByTagName('form')[0];

        const response = await fetch(form.action, {
            method: 'post',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            body: new FormData(form)
        });

        if (!response.ok) {
            this.modalContentTarget.innerHTML = await response.text();
            this._assignToolTipsInCommonModal();
        } else {
            if (response.headers.has('x-redirect-uri')) {
                if (response.headers.has('x-redirect-to-page')
                    && response.headers.get('x-redirect-to-page')
                ) {
                    this.modal.hide();
                    window.location.href = response.headers.get('x-redirect-uri');
                } else {
                    this.modalBodyTarget.innerHTML = await loadContentFromUrl(response.headers.get('x-redirect-uri'))
                    this._assignToolTipsInCommonModal();
                }
            } else {
                //close form modal
                this.modal.hide();
                window.location.reload();
            }
        }
    }

    _assignToolTipsInCommonModal() {
        const tooltipElements = this.modalContentTarget.querySelectorAll('[data-toggle="tooltip"]');

        tooltipElements.forEach(element => {
            const placement = element.getAttribute('data-placement') || 'auto';
            new Tooltip(element, {placement: placement});
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