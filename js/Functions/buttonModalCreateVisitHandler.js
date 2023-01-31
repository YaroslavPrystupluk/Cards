import ModalCreateVisit from "../Classes/modalCreateVisit.js";

// Обробник для кнопки, що створює візит
function buttonModalCreateVisitHandler() {
    new ModalCreateVisit().render('.wrapper');
}

export default buttonModalCreateVisitHandler;