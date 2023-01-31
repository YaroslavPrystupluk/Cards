import CardCardiologist from "../Classes/cardCardiologist.js";
import CardDentist from "../Classes/cardDentist.js";
import CardTherapist from "../Classes/cardTherapist.js";
import removeAllElements from "./removeAllElements.js";

// Допоможна функція для фільтрування, прибирає всі картки и показує відфільтровані
function showCards(cards) {

    removeAllElements('.card-wrapper');
    removeAllElements('.card');

    if (cards.length !== 0) {
        cards.forEach(card => {
            if(card.doctor === "Кардіолог") {
                new CardCardiologist(card).render('.cards');
            } else if(card.doctor === "Дантист") {
                new CardDentist(card).render('.cards');
            } else {
                new CardTherapist(card).render('.cards');
            }
        });

    }

}

export default showCards;