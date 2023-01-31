import Edit from "./edit.js";
import createButton from "../Functions/createButton.js";
import {buttonEditClose} from "../DataStorage/buttons.js";
import editCard from "../API/editCard.js";

// Клас EditTherapist розширує клас Edit, редагує картку Терапевта
class EditTherapist extends Edit {

    constructor({id, title, doctor, patientFullName, goal, description, urgency, status, age}) {
        super({id, title, doctor, patientFullName, goal, description, urgency, status});
        this.age = age;
        this.editLabelAge = document.createElement('label');
        this.editInputAge = document.createElement('input');
    }

    drawElems(selector) {
        super.drawElems(selector);

        this.editLabelAge.className = "edit__age-label";
        this.editInputAge.className = "edit__age-input";

        this.editLabelAge.innerText = "Змінити вік:";

        this.editInputAge.id = "edit-age";

        this.editLabelAge.setAttribute("for", "edit-age");

        this.editInputAge.value = this.age.children[0].innerText;

        this.editForm.append( this.editLabelAge, this.editInputAge, this.buttonSendEdit);
    }

    render(selector) {
        super.drawElems(selector);

        this.drawElems(selector);

        createButton(buttonEditClose);

        this.editOptionOpen.selected = true;

        this.chooseUrg();

        this.editBack.addEventListener('click', () => {
            this.editWrapper.remove();
        });

        this.buttonSendEdit.addEventListener('click', (e) => {
            e.preventDefault();
            editCard({
                id: this.id,
                title: this.title.innerText,
                doctor: this.doctor.children[0].innerText,
                patientFullName: this.editInputFullName.value,
                goal: this.editInputGoal.value,
                description: this.editTextAreaShortDesc.value,
                urgency: this.editSelectUrgency.value,
                status: this.editSelectStatus.value,
                age: this.editInputAge.value
            })
                .then(response => {
                    const cards = JSON.parse(localStorage.getItem("Cards"));
                    const indexElem = cards.findIndex(card => card.id === this.id);

                    cards[indexElem] = response;
                    localStorage.setItem("Cards", JSON.stringify(cards));
                    
                    this.patientFullName.children[0].innerText = this.editInputFullName.value;
                    this.goal.children[0].innerText = this.editInputGoal.value;
                    this.description.children[0].innerText = this.editTextAreaShortDesc.value;
                    this.urgency.children[0].innerText = this.editSelectUrgency.value;
                    this.status.children[0].innerText = this.editSelectStatus.value;
                    this.age.children[0].innerText = this.editInputAge.value;
                    this.editWrapper.remove();
                })
                .catch(error => console.error(error));

        });
    }

}

export default EditTherapist;