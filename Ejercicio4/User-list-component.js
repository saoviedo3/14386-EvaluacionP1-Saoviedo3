class UserListComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.getDataFromAPI();
    }

    getDataFromAPI() {
        // Consultar la API de Reqres
        fetch('https://reqres.in/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => this.displayUserData(data.data))
            .catch(error => console.error(error));
    }

    displayUserData(data) {
        // Lógica para mostrar los datos de los usuarios en el componente
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    text-align: center;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    border: 1px solid #ddd;
                    margin: 10px 0;
                    padding: 10px;
                    background-color: #f9f9f9;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
                }
            </style>
            <div class="container">
                <h2>Lista de usuarios</h2>
            </div>
            <ul id="user-list"></ul>
        `;

        const userList = this.shadowRoot.querySelector('#user-list');

        data.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = `${user.first_name} ${user.last_name} (${user.email})`;
            userList.appendChild(userItem);
        });
    }
}

customElements.define('user-list-component', UserListComponent);
