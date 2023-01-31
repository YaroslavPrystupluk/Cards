import Modal from "./modal.js";
import createButton from "../Functions/createButton.js";
import { buttonModalEnter } from "../DataStorage/buttons.js";

// Клас ModalEnter розширює клас Modal, що рендерить модалку для авторизації
class ModalEnter extends Modal {

	constructor() {
		super();
		this.modalForm = document.createElement('form');
		this.modalLabelUserEmail = document.createElement('label');
		this.modalInputUserEmail = document.createElement('input');
		this.modalLabelUserPassword = document.createElement('label');
		this.modalInputUserPassword = document.createElement('input');
	}

	drawElems(selector) {

		super.drawElems(selector);

		this.modalForm.className = 'modal__form';
		this.modalLabelUserEmail.className = 'modal__email-label';
		this.modalInputUserEmail.className = 'modal__email-input';
		this.modalLabelUserPassword.className = 'modal__password-label';
		this.modalInputUserPassword.className = 'modal__password-input';

		this.modalLabelUserEmail.innerText = 'Введіть ваш email:';
		this.modalLabelUserPassword.innerText = 'Введіть ваш пароль:';

		this.modalInputUserEmail.id = "user-email";
		this.modalInputUserPassword.id = "user-password";

		this.modalLabelUserEmail.setAttribute("for", "user-email");
		this.modalLabelUserPassword.setAttribute("for", "user-password");
		this.modalInputUserEmail.setAttribute("type", "email");
		this.modalInputUserPassword.setAttribute("type", "password");
		this.modalInputUserEmail.setAttribute("placeholder", "user@test.com");
		this.modalInputUserPassword.setAttribute("placeholder", "***********");

		this.modalInputUserEmail.required = " ";
		this.modalInputUserPassword.required = " ";

		this.modalForm.append(this.modalLabelUserEmail, this.modalInputUserEmail, this.modalLabelUserPassword, this.modalInputUserPassword);
		this.modal.append(this.modalForm);

	}

	render(selector) {

		super.render(selector);

		this.drawElems(selector);

		createButton(buttonModalEnter);

	}

}

export default ModalEnter;


