// Клас Visit, що розширує форму для створення візиту в модалці
class Visit {

    constructor() {

        this.visitDiv = document.createElement('div');
        this.visitLabelGoal = document.createElement('label');
        this.visitInputGoal = document.createElement('input');
        this.visitLabelShortDesc = document.createElement('label');
        this.visitTextAreaShortDesc = document.createElement('textarea');
        this.visitLabelUrgency = document.createElement('label');
        this.visitSelectUrgency = document.createElement('select');
        this.visitOptionUrgencyHigh = document.createElement('option');
        this.visitOptionUrgencyNormal = document.createElement('option');
        this.visitOptionUrgencyLow = document.createElement('option');
        this.visitLabelFullName = document.createElement('label');
        this.visitInputFullName = document.createElement('input');
    }

    drawElems(selector) {

        this.visitDiv.className = 'modal__visit';
        this.visitLabelGoal.className = 'modal__goal-label';
        this.visitInputGoal.className = 'modal__goal-input';
        this.visitLabelShortDesc.className = "modal__desc-label";
        this.visitTextAreaShortDesc.className = "modal__desc-textarea";
        this.visitLabelUrgency.className = "modal__urgency-label";
        this.visitSelectUrgency.className = "modal__urgency-select";
        this.visitLabelFullName.className = "modal__fullname-label";
        this.visitInputFullName.className = "modal__fullname-input";

        this.visitLabelGoal.innerText = "Вкажіть мету візиту:";
        this.visitLabelShortDesc.innerText = "Короткий опис візиту(опціонально):";
        this.visitLabelUrgency.innerText = "Оберіть терміновість візиту:";
        this.visitOptionUrgencyHigh.innerText = "Невідкладна";
        this.visitOptionUrgencyNormal.innerText = "Пріорітетна";
        this.visitOptionUrgencyLow.innerText = "Звичайна";
        this.visitLabelFullName.innerText = "Введіть Ваше ПІБ:";

        this.visitDiv.id = "visit";
        this.visitInputGoal.id = "visit-goal";
        this.visitTextAreaShortDesc.id = "visit-desc";
        this.visitSelectUrgency.id = "visit-urgency";
        this.visitInputFullName.id = "visit-fullName";

        this.visitLabelGoal.setAttribute("for", "visit-goal");
        this.visitLabelShortDesc.setAttribute("for", "visit-desc");
        this.visitLabelFullName.setAttribute("for", "visit-fullName");

        this.visitInputGoal.setAttribute("required", "");
        this.visitSelectUrgency.setAttribute("required", "");
        this.visitInputFullName.setAttribute("required", "");

        this.visitInputGoal.placeholder = "Консультація";
        this.visitInputFullName.placeholder = "Іванов Іван";

        this.visitSelectUrgency.append( this.visitOptionUrgencyLow, this.visitOptionUrgencyNormal, this.visitOptionUrgencyHigh);

        this.visitDiv.append(this.visitLabelFullName, this.visitInputFullName, this.visitLabelGoal, this.visitInputGoal, this.visitLabelShortDesc, this.visitTextAreaShortDesc, this.visitLabelUrgency, this.visitSelectUrgency);

        document.querySelector(selector).append(this.visitDiv);
    }

    render(selector) {

        this.drawElems(selector);

    }

}

export default Visit;