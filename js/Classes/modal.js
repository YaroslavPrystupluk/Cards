import createButton from "../Functions/createButton.js";
import {buttonModalClose} from "../DataStorage/buttons.js";

// Клас Card, що рендерить модалку в найбільш загальному вигляді
class Modal {

    constructor() {
        this.modalWrapper = document.createElement('div');
        this.modalBack = document.createElement('div');
        this.modal = document.createElement('div');
    }

    drawElems(selector) {

        this.modalWrapper.className = 'modal-wrapper';
        this.modalBack.className = 'modal-back'
        this.modal.className = 'modal';

        this.modalWrapper.append(this.modal, this.modalBack);
        document.querySelector(selector).append(this.modalWrapper);
    }


    render(selector) {

        this.drawElems(selector);

        createButton(buttonModalClose);

        this.modalBack.addEventListener('click', () => {
            this.modalWrapper.remove();
        });

    }
}

export default Modal;