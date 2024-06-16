// Variables globales
let result = document.getElementById('result'); // Contenedor del DOM
let filter = document.getElementById('filter'); // Campo de búsqueda
let users = []; // Array para almacenar los datos originales

// Función principal
async function getData() {
    try {
        // 1. Obtener datos de la API
        const res = await fetch('https://randomuser.me/api?results=50');
        const { results } = await res.json();
        console.log(results)
        users = results; // Guardamos los datos en un array global

        // 2. Construir el contenido de la lista
        renderUsers(users); // Renderizamos todos los usuarios inicialmente
    } catch (err) {
        console.error('Error al obtener datos:', err);
    }
}

// Función para renderizar usuarios en el DOM
function renderUsers(users) {
    // Limpiamos el contenedor
    result.innerHTML = '';

    // Creamos un fragmento para optimizar las inserciones
    const fragment = document.createDocumentFragment();

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
        fragment.appendChild(li); // Añadimos cada <li> al fragmento
    });

    // Insertamos el fragmento completo al DOM
    result.appendChild(fragment);
}

// Función para filtrar usuarios
function filterUsers(searchTerm) {
    // Filtramos los usuarios cuyo nombre o ubicación coincidan con el término de búsqueda
    const filteredUsers = users.filter(user => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase(); // Nombre completo
        const location = `${user.location.city}, ${user.location.country}`.toLowerCase(); // Ubicación

        return (
            fullName.includes(searchTerm.toLowerCase()) || // Coincidencia en el nombre
            location.includes(searchTerm.toLowerCase())   // Coincidencia en la ubicación
        );
    });

    // Renderizamos los usuarios filtrados
    renderUsers(filteredUsers);
}

// Evento para escuchar cambios en el campo de búsqueda
filter.addEventListener('input', (e) => filterUsers(e.target.value));

getData();
