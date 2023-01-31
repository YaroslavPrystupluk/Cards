import Edit from "./edit.js";
import createButton from "../Functions/createButton.js";
import {buttonEditClose} from "../DataStorage/buttons.js";
import editCard from "../API/editCard.js";

// Клас EditDentist розширує клас Edit, редагує картку Дантиста
class EditDentist extends Edit {

    constructor({id, title, doctor, patientFullName, goal, description, urgency, status, date, dateValue}) {
        super({id, title, doctor, patientFullName, goal, description, urgency, status});
        this.date = date;
        this.dateValue = dateValue;
        this.editLabelDate = document.createElement('label');
        this.editInputDate = document.createElement('input');
    }

    drawElems(selector) {
        super.drawElems(selector);

        this.editLabelDate.className = "edit__date-label";
        this.editInputDate.className = "edit__date-input";

        this.editLabelDate.innerText = "Змінити дату останнього візиту:";

        this.editInputDate.id = "edit-date";

        this.editInputDate.value = this.dateValue;

        this.editInputDate.type = "date";
 
        this.editForm.append( this.editLabelDate, this.editInputDate, this.buttonSendEdit);
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
                age: null,
                bloodPressure: null,
                bmi: null,
                date: this.editInputDate.value,
                heartDiseases: null
            })
                .then(response => {
                    const cards = JSON.parse(localStorage.getItem("Cards"));
                    const indexElem = cards.findIndex(card => card.id === this.id);

                    cards[indexElem] = response;
                    localStorage.setItem("Cards", JSON.stringify(cards));
                    
                    const dateArr = this.editInputDate.value.split("-");
                    this.patientFullName.children[0].innerText = this.editInputFullName.value;
                    this.goal.children[0].innerText = this.editInputGoal.value;
                    this.description.children[0].innerText = this.editTextAreaShortDesc.value;
                    this.urgency.children[0].innerText = this.editSelectUrgency.value;
                    this.status.children[0].innerText = this.editSelectStatus.value;
                    this.date.innerText = `Дата останнього візиту: ${dateArr[2]}.${dateArr[1]}.${dateArr[0]}р.`;
                    this.editWrapper.remove();
                })
                .catch(error => console.error(error));

        });
    }

}

export default EditDentist;