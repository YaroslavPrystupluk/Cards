import Visit  from "./visit.js";
// Клас VisitTherapist розширує клас Visit, розширує форму для створення візиту Терапевта в модалці
class VisitTherapist extends Visit {

    constructor() {
        super();
        this.visitLabelAge = document.createElement('label');
        this.visitInputAge = document.createElement('input');
    }

    drawElems(selector) {
        super.drawElems(selector);

        this.visitLabelAge.className = "modal__age-label";
        this.visitInputAge.className = "modal__age-input";

        this.visitLabelAge.innerText = "Введіть ваш вік:";

        this.visitInputAge.id = "visit-age";

        this.visitLabelAge.setAttribute("for", "visit-age");

        this.visitInputAge.setAttribute("required", "");

        this.visitInputAge.placeholder = "50";

        this.visitDiv.append( this.visitLabelAge, this.visitInputAge);
    }

    render(selector) {
        super.drawElems(selector);

        this.drawElems(selector);

        this.visitOptionUrgencyLow.selected = true;
    }

}

export default VisitTherapist;