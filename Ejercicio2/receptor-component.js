class ReceptorComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: blue;
          font-size: 20px;
        }
      </style>
      <p>Vacio</p>
    `;
    document.addEventListener('mensaje-enviado', (event) => this.recibirMensaje(event));
  }

  recibirMensaje(event) {
    this.shadowRoot.querySelector('p').innerText = `Mensaje: ${event.detail.mensaje}`;
  }
}
customElements.define('receptor-component', ReceptorComponent);