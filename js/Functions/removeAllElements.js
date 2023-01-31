// Функція видаляє всі елементи, за заданим селектором
function removeAllElements(selector) {
    const elems = Array.from(document.querySelectorAll(selector));

    if(elems) {
       elems.forEach(elem => {
            elem.remove();
       })
    }
}

export default removeAllElements;