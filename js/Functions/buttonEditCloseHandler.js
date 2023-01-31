import removeElement from "./removeElement.js";

// Обробник для кнопки, що закриває вікно редагування
function buttonEditCloseHandler() {
    const btnEditCloseSelector = ".edit-wrapper";
    removeElement(btnEditCloseSelector);
}

export default buttonEditCloseHandler;