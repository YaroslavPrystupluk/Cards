// Асинхронна функція авторизації (API)

async function authorization(email, password) {

	const response = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email: email, password: password })
	});

	const token = await response.text();
	return token;
}

export default authorization;