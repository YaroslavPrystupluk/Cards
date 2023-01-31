import Visit  from "./visit.js";
// Клас VisitCardiologist розширує клас Visit, розширує форму для створення візиту Кардіолога в модалці
class VisitCardiologist extends Visit {

    constructor() {
        super();
        this.visitDivided = document.createElement('div');
        this.visitDividedLeft = document.createElement('div');
        this.visitDividedRight = document.createElement('div');
        this.visitLabelBloodPressure = document.createElement('label');
        this.visitInputBloodPressure = document.createElement('input');
        this.visitLabelBMI = document.createElement('label');
        this.visitInputBMI = document.createElement('input');
        this.visitLabelHeartDiseases = document.createElement('label');
        this.visitTextAreaHeartDiseases = document.createElement('textarea');
        this.visitLabelAge = document.createElement('label');
        this.visitInputAge = document.createElement('input');
    }

    drawElems(selector) {
        super.drawElems(selector);

        this.visitDivided.className = "modal__divided-div";
        this.visitDividedLeft.className = "modal__dividedleft-div";
        this.visitDividedRight.className = "modal__dividedright-div";
        this.visitLabelBloodPressure.className = "modal__bloodpressure-label";
        this.visitInputBloodPressure.className = "modal__bloodpressure-input";
        this.visitLabelBMI.className = "modal__BMI-label";
        this.visitInputBMI.className = "modal__BMI-input";
        this.visitLabelHeartDiseases.className = "modal__heartdiseases-label";
        this.visitTextAreaHeartDiseases.className = "modal__heartdiseases-textarea";
        this.visitLabelAge.className = "modal__age-label";
        this.visitInputAge.className = "modal__age-input";

        this.visitLabelBloodPressure.innerText = "Введіть ваш звичайний тиск:";
        this.visitLabelBMI.innerText = "Введіть ваш індекс маси тіла:";
        this.visitLabelHeartDiseases.innerText = "Перенесені сердцево-судинні захворювання:";
        this.visitLabelAge.innerText = "Введіть ваш вік:";

        this.visitInputBloodPressure.id = "visit-bloodPressure";
        this.visitInputBMI.id = "visit-BMI";
        this.visitTextAreaHeartDiseases.id = "visit-heartDiseases";
        this.visitInputAge.id = "visit-age";

        this.visitLabelBloodPressure.setAttribute("for", "visit-bloodPressure");
        this.visitLabelBMI.setAttribute("for", "visit-BMI");
        this.visitLabelHeartDiseases.setAttribute("for", "visit-heartDiseases");
        this.visitLabelAge.setAttribute("for", "visit-age");

        this.visitInputBloodPressure.setAttribute("required", "");
        this.visitInputBMI.setAttribute("required", "");
        this.visitTextAreaHeartDiseases.setAttribute("required", "");
        this.visitInputAge.setAttribute("required", "");

        this.visitInputAge.placeholder = "50";
        this.visitInputBMI.placeholder = "23";
        this.visitInputBloodPressure.placeholder = "120/70";
        this.visitTextAreaHeartDiseases.placeholder = "Аритмія";

        this.visitDividedLeft.append(this.visitLabelAge, this.visitInputAge);
        this.visitDividedRight.append(this.visitLabelBloodPressure, this.visitInputBloodPressure);
        this.visitDivided.append(this.visitDividedLeft, this.visitDividedRight);
        this.visitDiv.append( this.visitDivided, this.visitLabelBMI, this.visitInputBMI,  this.visitLabelHeartDiseases, this.visitTextAreaHeartDiseases);
    }

    render(selector) {
        super.drawElems(selector);

        this.drawElems(selector);

        this.visitOptionUrgencyLow.selected = true;
    }

}

export default VisitCardiologist;