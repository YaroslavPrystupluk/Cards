// Фукція створює новий єлемент по заданим параметрам
function createElement(elemObj) {

    const {selector, content, style, type} = elemObj;

    const container = document.querySelector(selector);
    
    const element = document.createElement(type);

    element.className = style;

    element.innerHTML = content;

    container.append(element);

}

export default createElement;