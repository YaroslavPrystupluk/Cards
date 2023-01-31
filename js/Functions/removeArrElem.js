// Допоміжна функція, що видаляє певний елемент з массиву и повертає массив без нього
function removeArrElem(array, index) {

    return array.slice(0, index)
                .concat(array.slice(index + 1));

}

export default removeArrElem;