class EmisorComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      </style>
      <button>Enviar</button>
    `;
    this.shadowRoot.querySelector('button').addEventListener('click', () => this.enviarMensaje());
  }

  enviarMensaje() {
    const mensajeEvent = new CustomEvent('mensaje-enviado', {
      bubbles: true,
      detail: { mensaje: 'Hola desde el emisor :)' }
    });
    this.dispatchEvent(mensajeEvent);
  }
}
customElements.define('emisor-component', EmisorComponent);