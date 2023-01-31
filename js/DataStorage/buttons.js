import buttonEnterHandler from "../Functions/buttonEnterHandler.js";
import buttonModalEnterHandler from "../Functions/buttonModalEnterHandler.js";
import buttonModalCloseHandler from "../Functions/buttonModalCloseHandler.js";
import buttonModalCreateVisitHandler from "../Functions/buttonModalCreateVisitHandler.js";
import buttonModalSendVisitHandler from "../Functions/buttonModalSendVisitHandler.js";
import buttonEditCloseHandler from "../Functions/buttonEditCloseHandler.js";


// Дані для створення кнопки, що закриває модалку (авторизація)
const buttonModalClose = {
    selector: ".modal", 
    content: "<i class=\"fa fa-regular fa-close\"></i>", 
    style: "modal__btn-close", 
    handler: buttonModalCloseHandler
}

// Дані для створення кнопки, що створює новий візит
const buttonCreateVisit = {
    selector: ".header__useable", 
    content: "Створити візит", 
    style: "header__btn", 
    handler: buttonModalCreateVisitHandler
}

// Дані для створення кнопки, що відправляє запит з новим візитом на сервер
const buttonSendVisit = {
    selector: ".modal__form--visit", 
    content: "Створити візит", 
    style: "modal__btn-send", 
    handler: buttonModalSendVisitHandler
}

// Дані для створення кнопки, що закриває модалку, яка редагує картку
const buttonEditClose = {
    selector: ".edit", 
    content: "<i class=\"fa fa-regular fa-close\"></i>", 
    style: "edit__btn-close", 
    handler: buttonEditCloseHandler
}

// Дані для створення кнопки атворизації
const buttonEnter = {
	selector: ".header__useable",
	content: "Увійти",
	style: "header__btn",
	handler: buttonEnterHandler
}

// Дані для створення кнопки, що відправляє запит на сервер (авторизація)
const buttonModalEnter = {
	selector: ".modal__form",
	content: "Увійти",
	style: "modal__btn-enter",
	handler: buttonModalEnterHandler
}


export { buttonEnter, buttonModalEnter, buttonModalClose, buttonCreateVisit, buttonSendVisit, buttonEditClose};


