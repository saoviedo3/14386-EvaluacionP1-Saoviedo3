class MyContent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <section class="container my-5">
          <div class="row">
            <div class="col-md-6">
              <h2> Filosofía Institucional. </h2>
              <p>La institución se debe fundamentalmente a la sociedad y Fuerzas Armadas, a ellas orienta su esfuerzo, contribuyendo a la solución de sus necesidades de desarrollo, mediante la formación profesional, técnica y científica, la investigación, planteamiento e implementación de soluciones en el ámbito de sus dominios académicos. Con la búsqueda permanente de la excelencia como institución centenaria y referente en la sociedad, mediante la práctica de los principios: respeto por la dignidad humana, identidad ESPE, excelencia académica; y los valores: disciplina, integridad, liderazgo, creatividad, cohesión y efectividad, en todas sus actividades académicas y administrativas, aplicando métodos y herramientas efectivas para la integración de la docencia, investigación y vinculación con la sociedad.
              </p>
            </div>
            <div class="col-md-6">
              <img src="https://www.espe.edu.ec/wp-content/uploads/2018/11/espe-himno.jpg" class="img-fluid">
            </div>
          </div>
        </section>
      `;
    }
  }
  customElements.define('my-content', MyContent);
  