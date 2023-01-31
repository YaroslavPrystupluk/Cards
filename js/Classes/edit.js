// Клас Edit, що рендерить картку
class Edit {

    constructor({id, title, doctor, patientFullName, goal, description, urgency, status}) {
        this.id = id;
        this.title = title;
        this.doctor = doctor;
        this.patientFullName = patientFullName;
        this.goal = goal;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
        this.editWrapper = document.createElement('div');
        this.editBack = document.createElement('div');
        this.edit = document.createElement('div');
        this.editForm = document.createElement('form');
        this.editLabelStatus = document.createElement('label');
        this.editSelectStatus = document.createElement('select');
        this.editOptionOpen = document.createElement('option');
        this.editOptionDone = document.createElement('option');
        this.editLabelGoal = document.createElement('label');
        this.editInputGoal = document.createElement('input');
        this.editLabelShortDesc = document.createElement('label');
        this.editTextAreaShortDesc = document.createElement('textarea');
        this.editLabelUrgency = document.createElement('label');
        this.editSelectUrgency = document.createElement('select');
        this.editOptionUrgencyHigh = document.createElement('option');
        this.editOptionUrgencyNormal = document.createElement('option');
        this.editOptionUrgencyLow = document.createElement('option');
        this.editLabelFullName = document.createElement('label');
        this.editInputFullName = document.createElement('input');
        this.buttonSendEdit = document.createElement('button');
    }

    drawElems(selector) {

        this.editWrapper.className = 'edit-wrapper';
        this.editBack.className = 'edit-back'
        this.edit.className = 'edit';
        this.editForm.className = 'edit__form edit__form--edit';
        this.editLabelStatus.className = "edit__status-label";
        this.editSelectStatus.className = "edit__status-select";
        this.editLabelGoal.className = 'edit__goal-label';
        this.editInputGoal.className = 'edit__goal-input';
        this.editLabelShortDesc.className = "edit__desc-label";
        this.editTextAreaShortDesc.className = "edit__desc-textarea";
        this.editLabelUrgency.className = "edit__urgency-label";
        this.editSelectUrgency.className = "edit__urgency-select";
        this.editLabelFullName.className = "edit__fullname-label";
        this.editInputFullName.className = "edit__fullname-input";
        this.buttonSendEdit.className = "edit__btn-send";
        
        this.editLabelStatus.innerText = "Змінити статус візиту:"
        this.editOptionOpen.innerText = "Open";
        this.editOptionDone.innerText = "Done";
        this.editLabelGoal.innerText = "Змінити мету візиту:";
        this.editLabelShortDesc.innerText = "Змінити опис візиту:";
        this.editLabelUrgency.innerText = "Змінити терміновість візиту:";
        this.editOptionUrgencyHigh.innerText = "Невідкладна";
        this.editOptionUrgencyNormal.innerText = "Пріорітетна";
        this.editOptionUrgencyLow.innerText = "Звичайна";
        this.editLabelFullName.innerText = "Змінити ПІБ пацієнта:";
        this.buttonSendEdit.innerText = "Редагувати";

        this.editInputGoal.id = "edit-goal";
        this.editTextAreaShortDesc.id = "edit-desc";
        this.editInputFullName.id = "edit-fullName";

        this.editLabelGoal.setAttribute("for", "edit-goal");
        this.editLabelShortDesc.setAttribute("for", "edit-desc");
        this.editLabelFullName.setAttribute("for", "edit-fullName");

        this.editInputFullName.value = this.patientFullName.children[0].innerText;
        this.editInputGoal.value = this.goal.children[0].innerText;
        this.editTextAreaShortDesc.value = this.description.children[0].innerText;

        this.editSelectUrgency.append( this.editOptionUrgencyLow, this.editOptionUrgencyNormal, this.editOptionUrgencyHigh);
        this.editSelectStatus.append(this.editOptionOpen, this.editOptionDone);
        this.editForm.append(this.editLabelStatus, this.editSelectStatus, this.editLabelFullName, this.editInputFullName, this.editLabelGoal, this.editInputGoal, this.editLabelShortDesc, this.editTextAreaShortDesc, this.editLabelUrgency, this.editSelectUrgency);
        this.edit.append(this.editForm);
        this.editWrapper.append(this.edit, this.editBack);
        document.querySelector(selector).append(this.editWrapper);
    }

    chooseUrg() {
        let switcher = this.urgency.children[0].innerText;
        if (switcher === "Невідкладна") {
            this.editOptionUrgencyHigh.selected = true;
        } else if (switcher === "Пріорітетна") {
            this.editOptionUrgencyHigh.selected = true;
        } else {
            this.editOptionUrgencyLow.selected = true;
        }

    }


    render(selector) {

        this.drawElems(selector);

    }
}

export default Edit;