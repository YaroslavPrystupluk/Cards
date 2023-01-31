import Button from "../Classes/button.js";

// Функція створює нову кнопку заданого формату
function createButton({selector, content, style, handler}) {
    new Button(content, style, handler).render(selector);
}

export default createButton;