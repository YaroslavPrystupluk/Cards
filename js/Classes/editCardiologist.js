import Edit from "./edit.js";
import createButton from "../Functions/createButton.js";
import { buttonEditClose } from "../DataStorage/buttons.js";
import editCard from "../API/editCard.js";

// Клас EditCardiologist розширує клас Edit, редагує картку Кардіолога
class EditCardiologist extends Edit {

    constructor({ id, title, doctor, patientFullName, goal, description, urgency, status, age, bloodPressure, bmi, heartDiseases }) {
        super({ id, title, doctor, patientFullName, goal, description, urgency, status });
        this.age = age;
        this.bloodPressure = bloodPressure;
        this.bmi = bmi;
        this.heartDiseases = heartDiseases;
        this.editDivided = document.createElement('div');
        this.editDividedLeft = document.createElement('div');
        this.editDividedRight = document.createElement('div');
        this.editLabelBloodPressure = document.createElement('label');
        this.editInputBloodPressure = document.createElement('input');
        this.editLabelBMI = document.createElement('label');
        this.editInputBMI = document.createElement('input');
        this.editLabelHeartDiseases = document.createElement('label');
        this.editTextAreaHeartDiseases = document.createElement('textarea');
        this.editLabelAge = document.createElement('label');
        this.editInputAge = document.createElement('input');
    }

    drawElems(selector) {
        super.drawElems(selector);

        this.editDivided.className = "edit__divided-div";
        this.editDividedLeft.className = "edit__dividedleft-div";
        this.editDividedRight.className = "edit__dividedright-div";
        this.editLabelBloodPressure.className = "edit__bloodpressure-label";
        this.editInputBloodPressure.className = "edit__bloodpressure-input";
        this.editLabelBMI.className = "edit__BMI-label";
        this.editInputBMI.className = "edit__BMI-input";
        this.editLabelHeartDiseases.className = "edit__heartdiseases-label";
        this.editTextAreaHeartDiseases.className = "edit__heartdiseases-textarea";
        this.editLabelAge.className = "edit__age-label";
        this.editInputAge.className = "edit__age-input";

        this.editLabelBloodPressure.innerText = "Змінити показник тиску:";
        this.editLabelBMI.innerText = "Змінити індекс маси тіла:";
        this.editLabelHeartDiseases.innerText = "Змінити перенесені сердцево-судинні захворювання:";
        this.editLabelAge.innerText = "Змінити вік:";

        this.editInputBloodPressure.id = "edit-bloodPressure";
        this.editInputBMI.id = "edit-BMI";
        this.editTextAreaHeartDiseases.id = "edit-heartDiseases";
        this.editInputAge.id = "edit-age";

        this.editLabelBloodPressure.setAttribute("for", "edit-bloodPressure");
        this.editLabelBMI.setAttribute("for", "edit-BMI");
        this.editLabelHeartDiseases.setAttribute("for", "edit-heartDiseases");
        this.editLabelAge.setAttribute("for", "edit-age");

        this.editInputAge.value = this.age.children[0].innerText;
        this.editInputBloodPressure.value = this.bloodPressure.children[0].innerText;
        this.editInputBMI.value = this.bmi.children[0].innerText;
        this.editTextAreaHeartDiseases.value = this.heartDiseases.children[0].innerText;

        this.editDividedLeft.append(this.editLabelAge, this.editInputAge);
        this.editDividedRight.append(this.editLabelBloodPressure, this.editInputBloodPressure);
        this.editDivided.append(this.editDividedLeft, this.editDividedRight);
        this.editForm.append(this.editDivided, this.editLabelBMI, this.editInputBMI, this.editLabelHeartDiseases, this.editTextAreaHeartDiseases, this.buttonSendEdit);
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
                age: this.editInputAge.value,
                bloodPressure: this.editInputBloodPressure.value,
                bmi: this.editInputBMI.value,
                date: null,
                heartDiseases: this.editTextAreaHeartDiseases.value
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
                    this.bloodPressure.children[0].innerText = this.editInputBloodPressure.value;
                    this.bmi.children[0].innerText = this.editInputBMI.value;
                    this.heartDiseases.children[0].innerText = this.editTextAreaHeartDiseases.value;
                    this.editWrapper.remove();
                })
                .catch(error => console.error(error));

        });

    }

}

export default EditCardiologist;