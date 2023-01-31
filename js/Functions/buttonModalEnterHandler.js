import authorization from "../API/authorization.js";
import removeElement from "./removeElement.js";
import createButton from "./createButton.js";
import getCards from "../API/getCards.js";
import createElement from "./createElement.js";
import CardCardiologist from "../Classes/cardCardiologist.js";
import CardDentist from "../Classes/cardDentist.js";
import CardTherapist from "../Classes/cardTherapist.js";
import noItems from "../DataStorage/noItems.js";
import { buttonCreateVisit } from "../DataStorage/buttons.js";

// Обробник для кнопки, що відправляє запит авторизації
function buttonModalEnterHandler() {

	const email = document.querySelector('#user-email').value;
	const password = document.querySelector('#user-password').value;
	const filterText = document.querySelector('#filter-text');
	const filterStatus = document.querySelector('#filter-status');
	const filterUrgency = document.querySelector('#filter-urgency');

	authorization(email, password)
		.then(response => {

			if (response.length === 36) {

				localStorage.setItem("cardsToken", response);
				removeElement('.cards__no-items');
				removeElement('.header__btn');
				createButton(buttonCreateVisit);
				filterText.removeAttribute('disabled');
				filterStatus.removeAttribute('disabled');
				filterUrgency.removeAttribute('disabled');
				removeElement('.modal-wrapper');

				getCards()
					.then(cards => {

						if (cards.length === 0) {
							createElement(noItems);
						} else {

							const cardsReversed = cards.reverse();

							localStorage.setItem("Cards", JSON.stringify(cardsReversed));

							cardsReversed.forEach(element => {
								if (element.doctor === "Кардіолог") {
									new CardCardiologist(element).render('.cards');
								} else if (element.doctor === "Дантист") {
									new CardDentist(element).render('.cards');
								} else {
									new CardTherapist(element).render('.cards');
								}
							});
						}


					})
					.catch(e => console.error(e));
			}

		})
		.catch(e => console.error(e));
}

export default buttonModalEnterHandler;