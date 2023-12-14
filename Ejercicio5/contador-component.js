class CounterComponent extends HTMLElement {
    constructor() {
        super();
        this._counter = 0;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <p id="counter">Count: ${this._counter}</p>
            <button id="increment">+</button>
            <button id="decrement">-</button>
        `;
        this.incrementButton = this.shadowRoot.querySelector('#increment');
        this.decrementButton = this.shadowRoot.querySelector('#decrement');
        this.counterDisplay = this.shadowRoot.querySelector('#counter');
    }

    connectedCallback() {
        this.incrementButton.addEventListener('click', () => this.increment());
        this.decrementButton.addEventListener('click', () => this.decrement());
    }

    increment() {
        this._counter++;
        this.updateCounter();
    }

    decrement() {
        if (this._counter > 0) {
            this._counter--;
            this.updateCounter();
        }
    }

    updateCounter() {
        this.counterDisplay.textContent = `Count: ${this._counter}`;
    }
}

customElements.define('contador-component', CounterComponent);
