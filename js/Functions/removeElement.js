// Функція видаляє елемент, за заданим селектором
function removeElement(selector) {
    document.querySelector(selector).remove();
}

export default removeElement;