import deleteCard from "../API/deleteCard.js";
import removeArrElem from "../Functions/removeArrElem.js";
import createElement from "../Functions/createElement.js";
import noItems from "../DataStorage/noItems.js";

// Клас Card, що рендерить картку
class Card {

    constructor({ id, title, status, doctor, patientFullName, goal, description, urgency }) {

        this.id = id;
        this.title = title;
        this.doctor = doctor;
        this.patientFullName = patientFullName;
        this.goal = goal;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
        this.cardWrapperDiv = document.createElement('div');
        this.cardDiv = document.createElement('div');
        this.cardDivCopy = document.createElement('div');
        this.titleH3 = document.createElement('h3');
        this.titleH3Copy = document.createElement('h3');
        this.doctorP = document.createElement('p');
        this.statusP = document.createElement('p');;
        this.patientFullNameP = document.createElement('p');
        this.cardHiddenDiv = document.createElement('div');
        this.patientGoalP = document.createElement('p');
        this.patientDescriptionP = document.createElement('p');
        this.patientUrgencyP = document.createElement('p');
        this.showMoreBtn = document.createElement('button');
        this.deleteBtn = document.createElement('button');
        this.editBtn = document.createElement('button');
    }

    drowElems(selector) {

        this.cardWrapperDiv.className = "card-wrapper";
        this.cardDivCopy.className = "card-copy";
        this.cardDiv.className = "card";
        this.titleH3.className = "card__title";
        this.titleH3Copy.className = "card__title";
        this.statusP.className = "card__status";
        this.patientFullNameP.className = "card__patient-name";
        this.doctorP.className = "card__doctor";
        this.cardHiddenDiv.className = "card__hidden";
        this.patientGoalP.className = "card__goal";
        this.patientDescriptionP.className = "card__desc";
        this.patientUrgencyP.className = "card__urgency";
        this.showMoreBtn.className = "card__showMoreBtn";
        this.deleteBtn.className = "card__deleteBtn";
        this.editBtn.className = "card__editBtn";

        this.titleH3.innerText = this.title;
        this.titleH3Copy.innerText = this.title;
        this.statusP.innerHTML = `Статус візиту: <span>${this.status}</span>`;
        this.patientFullNameP.innerHTML = `ПІБ: <span>${this.patientFullName}</span>`;
        this.doctorP.innerHTML = `Лікар: <span>${this.doctor}</span>`;
        this.patientGoalP.innerHTML = `Мета візиту: <span>${this.goal}</span>`;
        this.patientDescriptionP.innerHTML = `Короткий опис візиту: <span>${this.description}</span>`;
        this.patientUrgencyP.innerHTML = `Терміновість: <span>${this.urgency}</span>`;
        this.showMoreBtn.innerHTML = "Показати більше";
        this.deleteBtn.innerHTML = "<i class=\"fa fa-regular fa-close\"></i>";
        this.editBtn.innerHTML = "<i class=\"fa fa-solid fa-edit\"></i>";

        this.cardHiddenDiv.append(this.statusP, this.patientGoalP, this.patientDescriptionP, this.patientUrgencyP);

        this.cardDivCopy.append(this.titleH3Copy);

        this.cardDiv.append(this.titleH3, this.patientFullNameP, this.doctorP, this.showMoreBtn, this.cardHiddenDiv, this.editBtn, this.deleteBtn);

        this.cardWrapperDiv.append(this.cardDiv, this.cardDivCopy);
        document.querySelector(selector).insertAdjacentElement("afterbegin", this.cardWrapperDiv);
    }

    moveAt(pageX, pageY) {
        this.cardDiv.style.left = pageX - this.cardDiv.offsetWidth / 2 + 'px';
        this.cardDiv.style.top = pageY - this.cardDiv.offsetHeight / 2 + 'px';
      }

    render(selector) {

        this.drowElems(selector);

        this.showMoreBtn.addEventListener('mousedown', (e) => {
            e.stopPropagation();

            if (this.cardHiddenDiv.className === "") {
                this.cardHiddenDiv.className = "card__hidden";
                this.showMoreBtn.innerText = "Показати більше";
            } else {
                this.cardHiddenDiv.className = "";
                this.showMoreBtn.innerText = "Заховати";
            }
        });

        this.deleteBtn.addEventListener('mousedown', (e) => {
            e.stopPropagation();

            deleteCard(this.id)
                .then(res => {

                    if (res.status) {
                        const cards = JSON.parse(localStorage.getItem('Cards'));
                        const pos = cards.map(e => e.id).indexOf(this.id);
                        const cardsRem = removeArrElem(cards, pos);
                        if (cardsRem.length === 0) { createElement(noItems); }
                        localStorage.setItem("Cards", JSON.stringify(cardsRem));
                        this.cardDiv.remove();
                    }

                })
                .catch(e => console.error(e))
        });

        this.cardDiv.addEventListener('mousedown', (e) => {

            const onMouseMove = (event) => {
                this.moveAt(event.pageX, event.pageY);
            }

            this.cardDivCopy.style.display = "block";
            this.cardDiv.style.position = 'absolute';
            this.cardDivCopy.style.position = "static";
            this.cardDiv.style.zIndex = 1000;

            document.body.append(this.cardDiv);
          
            const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove);
                this.cardDiv.removeEventListener('mouseup', onMouseUp);
            }
     
            document.addEventListener('mousemove', onMouseMove);
           
            this.cardDiv.addEventListener('mouseup', onMouseUp);

        });
        
    }

}

export default Card;