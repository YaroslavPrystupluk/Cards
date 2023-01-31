// Функція валідатор для нових візитів

function visitValidator(visitObj) {
    const errors = [];
    const container = document.querySelector(".modal__validation");
    const fullNameSize = "<p><i class=\"fa fa-regular fa-close\"></i> ПІБ має бути не меньше 6 символів.</p>";
    const goalSize = "<p><i class=\"fa fa-regular fa-close\"></i> Мета візиту має бути не меньше 5 символів.</p>";
    const ageInt = "<p><i class=\"fa fa-regular fa-close\"></i> Вік пацієнта має бути числом.</p>";
    const bmiInt = "<p><i class=\"fa fa-regular fa-close\"></i> Індекс маси тіла пацієнта має бути числом.</p>";
    const ageNum = "<p><i class=\"fa fa-regular fa-close\"></i> Вік пацієнта має бути між 10 та 90 роками.</p>";
    const bmiNum = "<p><i class=\"fa fa-regular fa-close\"></i> Індекс маси тіла пацієнта має бути між 10 та 100.</p>";
    const dateExist = "<p><i class=\"fa fa-regular fa-close\"></i> Введіть дату візиту.</p>";
    const bloodPressureSize = "<p><i class=\"fa fa-regular fa-close\"></i> Введіть ваш тиск в заданому форматі.</p>";
    const bloodPressureNum = "<p><i class=\"fa fa-regular fa-close\"></i> Показники тиску мають бути в діапазоні від 160 до 50.</p>";

    const {name, goal, age, date, bmi, bloodPressure } = visitObj;

    if (name.length < 6) {errors.push(fullNameSize);}

    if (goal.length < 6) {errors.push(goalSize);}

    if (age !== null && !Number.isInteger(Number(age))) {
        errors.push(ageInt);
    } else {
        if (age !== null && age < 10 || age !== null && age > 90) {errors.push(ageNum);}
    }

    if (bmi !== null && !Number.isInteger(Number(bmi))) {
        errors.push(bmiInt);
    } else {
        if (bmi !== null && bmi < 10 || bmi !== null && bmi > 100) {errors.push(bmiNum);}
    }

    if (date !== null && date.length !== 10) { errors.push(dateExist); }

    if (bloodPressure !== null && bloodPressure.length !== 6 ) { 
        errors.push(bloodPressureSize) 
    } else if (bloodPressure !== null) {
        let bloodPressureArr = bloodPressure.split("/");

        if (bloodPressureArr[0] > 160 || bloodPressureArr[1] < 50) { errors.push(bloodPressureNum); }
    }

    errors.forEach(error => {
        container.insertAdjacentHTML("beforeend", error);
    });

    return errors.length === 0 ? true : false;

}

export default visitValidator;