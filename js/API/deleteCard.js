// Асинхронна функція видалення окремої картки (API)

async function deleteCard(id) {

    const token = localStorage.getItem('cardsToken');

    const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })

       return response;
}

export default deleteCard;