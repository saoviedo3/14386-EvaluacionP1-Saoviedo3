// Componente Contenedor
class MyContainer extends HTMLElement {
    constructor() {
    super();
    // Crear Shadow DOM
    this.attachShadow({ mode: 'open' });
    // Definir la estructura del componente contenedor con slots
    this.shadowRoot.innerHTML = `
    <div>
    <slot name="header"></slot>
    <slot name="content"></slot>
    </div>
    `;
    }
    }
    // Registrar el componente contenedor
    customElements.define('contenedor-component', MyContainer);