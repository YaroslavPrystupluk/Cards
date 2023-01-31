import removeElement from "./removeElement.js";
import visitValidator from "./visitValidator.js";
import escapeHtml from "./escapeHtml.js";
import cardAdd from "../API/cardAdd.js";
import CardCardiologist from "../Classes/cardCardiologist.js";
import CardDentist from "../Classes/cardDentist.js";
import CardTherapist from "../Classes/cardTherapist.js";

// Обробник для кнопки, що відправляє запит авторизації
function buttonModalSendVisitHandler() {
    let validated = null;
    const doctor = document.querySelector('#doctor-select').value;
    const name = document.querySelector('#visit-fullName') ? escapeHtml(document.querySelector('#visit-fullName').value) : null;
    const goal = document.querySelector('#visit-goal') ? escapeHtml(document.querySelector('#visit-goal').value) : null;
    const visitDesc = document.querySelector('#visit-desc') ? escapeHtml(document.querySelector('#visit-desc').value) : null;
    const visitUrgency = document.querySelector('#visit-urgency').value;
    const age = document.querySelector('#visit-age') ?escapeHtml(document.querySelector('#visit-age').value) : null;
    const date = document.querySelector('#visit-date') ? escapeHtml(document.querySelector('#visit-date').value) : null;
    const bmi = document.querySelector('#visit-BMI') ? escapeHtml(document.querySelector('#visit-BMI').value) : null;
    const bloodPressure = document.querySelector('#visit-bloodPressure') ? escapeHtml(document.querySelector('#visit-bloodPressure').value) : null;
    const heartDiseases = document.querySelector('#visit-heartDiseases') ? escapeHtml(document.querySelector('#visit-heartDiseases').value) : null;
    const filterText = document.querySelector('#filter-text');
    const filterStatus = document.querySelector('#filter-status');
    const filterUrgency = document.querySelector('#filter-urgency');

    if(document.querySelector('.modal__validation')) { removeElement('.modal__validation');}

    document.querySelector('.modal').insertAdjacentHTML('afterbegin', '<div class="modal__validation"></div>');

    validated = visitValidator({name, goal, age, date, bmi, bloodPressure, heartDiseases});

    if (validated) {
        let doctorFirstLetter = doctor[0].toLowerCase();
        let doctorLastLetters = doctor.substring(1);

        cardAdd({
            title: `Візіт до ${doctorFirstLetter}${doctorLastLetters}а`,
            doctor,
            patientFullName: name,
            goal,
            description: visitDesc,
            urgency: visitUrgency,
            status: 'Open',
            age,
            bloodPressure,
            bmi,
            date,
            heartDiseases
        })
        .then(response => {

            removeElement('.modal-wrapper');
            filterText.value = "";
            filterStatus.value = "All";
            filterUrgency.value = "All";
            
            if(document.querySelector('.cards__no-items')) { removeElement('.cards__no-items'); }

            if (!localStorage.getItem('Cards')) {
                localStorage.setItem("Cards", JSON.stringify([response]));
              } else {
                const cards = JSON.parse(localStorage.getItem('Cards'));
                cards.push(response);
                localStorage.setItem("Cards", JSON.stringify(cards));
                  }

            if(response.doctor === "Кардіолог") {
                new CardCardiologist(response).render('.cards');
            } else if(response.doctor === "Дантист") {
                new CardDentist(response).render('.cards');
            } else {
                new CardTherapist(response).render('.cards');
            }

        })
        .catch(e => console.error(e));
    }


}

export default buttonModalSendVisitHandler;