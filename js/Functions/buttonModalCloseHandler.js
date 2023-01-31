import removeElement from "./removeElement.js";

// Обробник для кнопки, що закриває модалку
function buttonModalCloseHandler() {
    const btnModalCloseSelector = ".modal-wrapper";
    removeElement(btnModalCloseSelector);
}

export default buttonModalCloseHandler;