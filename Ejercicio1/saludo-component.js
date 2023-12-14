class SaludoComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            .saludocomponent {
                font-size: 30px;
                text-align: center;
                background-color: #f1f1f1;
                padding: 20px;
            }
            </style>
            <div class="saludocomponent">
            <h1>¡Hola, Mundo!</h1>

            </div>
        `;
    }
}
customElements.define('saludo-component', SaludoComponent);
