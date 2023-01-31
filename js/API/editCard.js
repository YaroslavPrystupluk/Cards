// Асинхронна функція редагування окремої картки (API)

async function editCard(editedCard) {

    const token = localStorage.getItem('cardsToken');
    
    const {id, title, doctor, patientFullName, goal, description, urgency, status, age, bloodPressure, bmi, date, heartDiseases} = editedCard;

    const response = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            id: id,
            title: title,
            doctor: doctor,
            patientFullName: patientFullName,
            goal: goal,
            description: description,
            urgency: urgency,
            status: status,
            age: age,
            bloodPressure: bloodPressure,
            bmi: bmi,
            date: date,
            heartDiseases: heartDiseases
        })
    });

    const result = await response.json();
    return result;
}

export default editCard;