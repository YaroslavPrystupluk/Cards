import Card from "./card.js";
import EditCardiologist from "./editCardiologist.js";

// Клас CardCardiologist розширує клас Card,  рендерить картку Кардіолога
class CardCardiologist extends Card {

    constructor({ id, title, status, doctor, patientFullName, goal, description, urgency, age, bloodPressure, bmi, heartDiseases }) {

        super({ id, title, status, doctor, patientFullName, goal, description, urgency });

        this.age = age;
        this.bloodPressure = bloodPressure;
        this.bmi = bmi;
        this.heartDiseases = heartDiseases;
        this.ageP = document.createElement('p');
        this.bloodPressureP = document.createElement('p');
        this.bmiP = document.createElement('p');
        this.heartDiseasesP = document.createElement('p');
    }

    drowElems(selector) {

        super.drowElems(selector);

        this.ageP.className = "card__age";
        this.bloodPressureP.className = "card__bloodPressure";
        this.bmiP.className = "card__bmi";
        this.heartDiseasesP.className = "card__heartDiseases";

        this.ageP.innerHTML = `Вік пацієнта: <span>${this.age}</span>р.`;
        this.bloodPressureP.innerHTML = `Звичайний тиск пацієнта: <span>${this.bloodPressure}</span>.`;
        this.bmiP.innerHTML = `Індекс маси тіла пацієнта: <span>${this.bmi}</span>.`;
        this.heartDiseasesP.innerHTML = `Перенесені сердцево-судинні захворювання: <span>${this.heartDiseases}</span>.`;

        this.cardHiddenDiv.append(this.ageP, this.bloodPressureP, this.bmiP, this.heartDiseasesP);

    }

    render(selector) {

        super.render(selector);

        this.drowElems(selector);

        const editData = {
            id: this.id,
            title: this.titleH3,
            doctor: this.doctorP,
            patientFullName: this.patientFullNameP,
            goal: this.patientGoalP,
            description: this.patientDescriptionP,
            urgency: this.patientUrgencyP,
            status: this.statusP,
            age: this.ageP,
            bloodPressure: this.bloodPressureP,
            bmi: this.bmiP,
            heartDiseases: this.heartDiseasesP
        }

        this.editBtn.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            
            new EditCardiologist(editData).render('.wrapper');
        });
        

    }

}

export default CardCardiologist;