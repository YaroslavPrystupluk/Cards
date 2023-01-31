import showCards from "./showCards.js";

// Функція-обробник, що фільтрує картки за допомогою методу filter
function filterCards() {

    const filterText = document.querySelector('#filter-text');
    const filterStatus = document.querySelector('#filter-status');
    const filterUrgency = document.querySelector('#filter-urgency');
    const filteredCards = JSON.parse(localStorage.getItem("Cards"));

    let filterTextValue = filterText.value;
    let filterStatusValue = filterStatus.value;
    let filterUrgencyValue = filterUrgency.value;
    let flagText, flagStatus, flagUrgency, filteredData;

    if (filterUrgencyValue === "Low") { flagUrgency = "Звичайна" }
    if (filterUrgencyValue === "Normal") { flagUrgency = "Пріорітетна" }
    if (filterUrgencyValue === "High") { flagUrgency = "Невідкладна" }
    if (filterUrgencyValue === "All") { flagUrgency = false }

    if (filterStatusValue === "Open") { flagStatus = "Open" }
    if (filterStatusValue === "Done") { flagStatus = "Done" }
    if (filterStatusValue === "All") { flagStatus = false }

    if (filterTextValue === "") { 
        flagText = false ;
    } else {
        flagText = filterTextValue;
    }


    if (!flagUrgency) {
        if (!flagStatus) {
            if (!flagText) {
                showCards(filteredCards);
            } else {
                filteredData = filteredCards.filter(card => card.title.search(filterTextValue) !== -1);
                showCards(filteredData);
            }
        } else {
            if (!flagText) {
                filteredData = filteredCards.filter(card => card.status === flagStatus);
                showCards(filteredData);
            } else {
                filteredData = filteredCards.filter(card => card.status === flagStatus && card.title.search(filterTextValue) !== -1);
                showCards(filteredData);
            }
        }

    } else {

        if (!flagStatus) {
            if (!flagText) {
                filteredData = filteredCards.filter(card => card.urgency === flagUrgency);
                showCards(filteredData);
            } else {
                filteredData = filteredCards.filter(card => card.urgency === flagUrgency && card.title.search(filterTextValue) !== -1);
                showCards(filteredData);
            }

        } else {
            if (!flagText) {
                filteredData = filteredCards.filter(card => card.urgency === flagUrgency && card.status === flagStatus);
                showCards(filteredData);
            } else {
                filteredData = filteredCards.filter(card => card.urgency === flagUrgency && card.status === flagStatus && card.title.search(filterTextValue) !== -1);
                showCards(filteredData);
            }

        }

    }

}

export default filterCards;