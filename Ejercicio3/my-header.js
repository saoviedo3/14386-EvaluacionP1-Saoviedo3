class MyHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <header class="bg-dark text-white p-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1 class="display-4">ESPE</h1>
              </div>
              <div class="col-md-6 d-flex align-items-center justify-content-end">
                <nav>
                  <ul class="nav">
                    <li class="nav-item">
                      <a class="nav-link active text-white" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">Acerca de</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">Contacto</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      `;
    }
  }
  customElements.define('my-header', MyHeader);
  
