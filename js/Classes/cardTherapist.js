import Card from "./card.js";
import EditTherapist from "./editTherapist.js";

// Клас CardTherapist розширує клас Card,  рендерить картку Терапевта
class CardTherapist extends Card {

    constructor({id, title, status, doctor, patientFullName, goal, description, urgency, age}) {

        super({id, title, status, doctor, patientFullName, goal, description, urgency});

        this.age = age;
        this.ageP = document.createElement('p');

    }

    drowElems(selector) {

        super.drowElems(selector);

        this.ageP.className = "card__age";

        this.ageP.innerHTML = `Вік пацієнта: <span>${this.age}</span>р.`;

        this.cardHiddenDiv.append(this.ageP);

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
    }

    this.editBtn.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        
        new EditTherapist(editData).render('.wrapper');
    });

    }

}

export default CardTherapist;