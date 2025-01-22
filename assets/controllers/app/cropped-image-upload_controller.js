import {Controller} from '@hotwired/stimulus';
import * as Croppie from 'croppie';

export default class extends Controller {
    static targets = [ "fileInput", "cropper", "cropperWrapper", "imageWrapper", "label" ];

    static values = {
        width: Number,
        height: Number,
    }

    croppie = null;
    currentFilename = null;
    timeout =  null;

    connect() {
        this.croppie = new Croppie(
            this.cropperTarget,
            {
                enableExif: true,
                viewport: {
                    width: this.widthValue,
                    height: this.heightValue,
                    type: 'circle'
                },
                boundary: {
                    width: this.widthValue,
                    height: this.heightValue
                }
            }
        );
        console.log(this.croppie);

        this.cropperTarget.addEventListener('update', () => this.cropImageWithTimeout());
    }

    disconnect() {
        this.croppie.destroy();
        this.croppie = null;
        this.currentFilename = null;

        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = null;
    }

    cropImageWithTimeout() {
        this.fileInputTarget.disabled = true;

        const spinner = this.labelTarget.querySelector('#spinner');
        if (spinner) {
            spinner.classList.remove('hidden');
        }

        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => this.cropImageAndClearTimeout(), 500);

        this.fileInputTarget.disabled = false;

        if (spinner) {
            spinner.classList.add('hidden');
        }
    }

    cropImageAndClearTimeout() {
        this.cropImage();
        this.timeout = null;
    }

    readFile(event) {
        const input = event.target;

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = (event) => this.initCropper(event);

            this.currentFilename = input.files[0].name;
            reader.readAsDataURL(input.files[0]);
        }
    }

    initCropper(event) {
        this.imageWrapperTarget.classList.add('hidden');
        this.cropperWrapperTarget.classList.remove('hidden');

        this.initCropperWithUrl(event.target.result)
    }

    initCropperWithUrl(imageUrl) {
        this.cropperWrapperTarget.classList.add('ready');
        this.croppie.bind({url: imageUrl}).then(function () {
            console.log('Bind complete');
        });
    }

    cropImage() {
        this.croppie.result({
            type: 'blob',
            size: 'viewport',
            format: 'png',
            circle: false,
            quality: 1
        }).then((blob) => this.addBlobDataToInput(blob));
    }

    addBlobDataToInput(blob) {
        let filenameSplitted = this.currentFilename.split('.');
        filenameSplitted[filenameSplitted.length - 1] = 'png'

        const myFile = new File([blob], filenameSplitted.join('.'), {
            type: 'image/png',
            lastModified: new Date(),
        });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(myFile);
        this.fileInputTarget.files = dataTransfer.files;
    }
}
