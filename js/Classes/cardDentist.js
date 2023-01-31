import Card from "./card.js";
import EditDentist from "./editDentist.js";

// Клас CardDentist розширує клас Card,  рендерить картку Дантиста
class CardDentist extends Card {

    constructor({id, title, status, doctor, patientFullName, goal, description, urgency, date}) {

        super({id, title, status, doctor, patientFullName, goal, description, urgency});

        this.date = date;
        this.dateArr = date.split("-");
        this.dateP = document.createElement('p');

    }

    drowElems(selector) {

        super.drowElems(selector);

        this.dateP.className = "card__date";

        this.dateP.innerText = `Дата останнього візиту: ${this.dateArr[2]}.${this.dateArr[1]}.${this.dateArr[0]}р.`;

        this.cardHiddenDiv.append(this.dateP);

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
        date: this.dateP,
        dateValue: this.date
    }

    this.editBtn.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        
        new EditDentist(editData).render('.wrapper');
    });

    }

}

export default CardDentist;