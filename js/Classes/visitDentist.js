import Visit  from "./visit.js";
// Клас VisitDentist розширує клас Visit, розширує форму для створення візиту Дантиста в модалці
class VisitDentist extends Visit {

    constructor() {
        super();
        this.visitLabelDate = document.createElement('label');
        this.visitInputDate = document.createElement('input');
    }

    drawElems(selector) {
        super.drawElems(selector);

        this.visitLabelDate.className = "modal__date-label";
        this.visitInputDate.className = "modal__date-input";

        this.visitLabelDate.innerText = "Введіть дату останнього візиту:";

        this.visitInputDate.id = "visit-date";

        this.visitLabelDate.setAttribute("for", "visit-date");

        this.visitInputDate.setAttribute("required", "");

        this.visitInputDate.type = "date";

        this.visitDiv.append( this.visitLabelDate, this.visitInputDate);
    }

    render(selector) {
        super.drawElems(selector);

        this.drawElems(selector);

        this.visitOptionUrgencyLow.selected = true;
    }

}

export default VisitDentist;