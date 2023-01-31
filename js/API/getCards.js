// Асинхронна функція, що дозволяє отримати всі додані картки (API)

async function getCards() {

    const token = localStorage.getItem('cardsToken');

    const response = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

    const cardsRes = await response.json();
    return cardsRes;
}

export default getCards;