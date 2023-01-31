// Асинхронна функція додавання нової картки (API)

async function cardAdd(cardDataReq) {

    const token = localStorage.getItem('cardsToken');

    const response = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(cardDataReq)
      });

    const cardDataRes = await response.json();
    return cardDataRes;
}

export default cardAdd;