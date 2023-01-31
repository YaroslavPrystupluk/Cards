// Клас Button, що рендерить кнопку по заданим параметрам
class Button {

    constructor(content, style, handler) {
        this.content = content;
        this.style = style;
        this.handler = handler;
        this.btn = document.createElement('button');
    }

    render(selector) {
        this.btn.innerHTML = this.content;
        this.btn.className = this.style;

        document.querySelector(selector).append(this.btn);

        this.btn.addEventListener('click', (e) => 
        {
            e.preventDefault();
            this.handler();
        });
    }

}

export default Button;