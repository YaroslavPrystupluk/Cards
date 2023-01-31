import ModalEnter from "../Classes/modalEnter.js";

// Обробник для кнопки, що відкриває вікно авторизації
function buttonEnterHandler() {

	new ModalEnter().render('.wrapper');

}

export default buttonEnterHandler;