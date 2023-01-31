import createButton from "./createButton.js";
import filterCards from "./filterCards.js";
import { buttonCreateVisit } from "../DataStorage/buttons.js";
import { buttonEnter } from "../DataStorage/buttons.js";
import getCards from "../API/getCards.js";
import CardCardiologist from "../Classes/cardCardiologist.js";
import CardDentist from "../Classes/cardDentist.js";
import CardTherapist from "../Classes/cardTherapist.js";
import createElement from "./createElement.js";
import noItems from "../DataStorage/noItems.js";

// Функція запускається і стартує web-застосунок (виконується першочергова логіка)
function appStart() {
    const filterText = document.querySelector('#filter-text');
    const filterStatus = document.querySelector('#filter-status');
    const filterUrgency = document.querySelector('#filter-urgency');

    filterStatus.children[0].selected = true;
    filterUrgency.children[0].selected = true;

    const token = localStorage.getItem('cardsToken');

    // Вішаємо eventListener'и на фільтри
    filterUrgency.addEventListener('change', filterCards);
    filterStatus.addEventListener('change', filterCards);
    filterText.addEventListener('keyup', filterCards);

    // Умова виконується якщо користувач був авторизований раніше
    if (token) {
        createButton(buttonCreateVisit);
        filterText.removeAttribute('disabled');
        filterStatus.removeAttribute('disabled');
        filterUrgency.removeAttribute('disabled');

        getCards()
            .then(cards => {

                if (cards.length === 0) {
                    createElement(noItems);
                } else {

                    localStorage.setItem("Cards", JSON.stringify(cards));

                    cards.forEach(card => {
                        if (card.doctor === "Кардіолог") {
                            new CardCardiologist(card).render('.cards');
                        } else if (card.doctor === "Дантист") {
                            new CardDentist(card).render('.cards');
                        } else {
                            new CardTherapist(card).render('.cards');
                        }
                    });
                }


            })
            .catch(e => console.error(e));
    } else {                       //Якщо користувач не авторизувався
        createElement(noItems);
        createButton(buttonEnter);
    }
}

export default appStart;