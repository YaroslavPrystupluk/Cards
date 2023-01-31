import Modal from "./modal.js";
import VisitCardiologist from "./visitCardiologist.js";
import VisitDentist from "./visitDentist.js";
import VisitTherapist from "./visitTherapist.js";
import createButton from "../Functions/createButton.js";
import removeElement from "../Functions/removeElement.js";
import {buttonSendVisit} from "../DataStorage/buttons.js";

// Клас ModalCreateVisit розширює клас Modal, що рендерить модалку для створення візитів
class ModalCreateVisit extends Modal {

    constructor() {

        super();

        this.modalForm = document.createElement('form');
        this.modalLabelDoctor = document.createElement('label');
        this.modalSelectDoctor = document.createElement('select');
        this.modalOptionNobody = document.createElement('option');
        this.modalOptionTherapist = document.createElement('option');
        this.modalOptionСardiologist = document.createElement('option');
        this.modalOptionDentist = document.createElement('option');
    }

    drawElems(selector) {
        super.drawElems(selector);

        this.modalForm.className = 'modal__form modal__form--visit';
        this.modalLabelDoctor.className = "modal__doctor-label";
        this.modalSelectDoctor.className = "modal__doctor-select";

        this.modalLabelDoctor.innerText = "Записатись на прийом:"
        this.modalOptionNobody.innerText = "Оберіть лікаря";
        this.modalOptionTherapist.innerText = "Терапевт";
        this.modalOptionСardiologist.innerText = "Кардіолог";
        this.modalOptionDentist.innerText = "Дантист";

        this.modalSelectDoctor.id = "doctor-select";
   
        this.modalSelectDoctor.append(this.modalOptionNobody, this.modalOptionTherapist, this.modalOptionСardiologist, this.modalOptionDentist);
        this.modalForm.append(this.modalLabelDoctor, this.modalSelectDoctor);
        this.modal.append(this.modalForm);
    }

    render(selector) {

        super.render(selector);

        this.drawElems(selector);

        this.modalOptionNobody.selected = true;

        this.modalSelectDoctor.addEventListener('change', () => {

            if(document.querySelector('.modal__validation')) { removeElement('.modal__validation'); }

            if (document.querySelector('.modal__visit')) {
                removeElement('.modal__visit');
                removeElement('.modal__btn-send');
            }
            
            if (this.modalSelectDoctor.value !== "Оберіть лікаря") {

                if(this.modalSelectDoctor.value === "Кардіолог") new VisitCardiologist().render('.modal__form--visit');

                else if(this.modalSelectDoctor.value === "Дантист") new VisitDentist().render('.modal__form--visit');

                else new VisitTherapist().render('.modal__form--visit');

                createButton(buttonSendVisit);
            }
        });

    }
}

export default ModalCreateVisit;