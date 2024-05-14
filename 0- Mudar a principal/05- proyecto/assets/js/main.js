
let tableContainer = document.querySelector('.tables');

let result = 0;

for( let i = 1; i <= 10; i++ ) {

    tableContainer.innerHTML += `
    <div class="tables__item">
        <h2 class="tables__title">
            Tabla del ${i}
        </h2>

        <ul class="tables__list tables__list--${i}">
        </ul>
    </div>
    `;

    for(let n = 1; n <= 10; n++){

        // calcular resultado
        result = i * n

        // sacar caja donde mostrar operaciones
        let list = document.querySelector(".tables__list--" + i);

        // Agregar operacion
        list.innerHTML += `<li class="list__item">${ i + "x" + n + "=" + result }</li>`;
        
    }
}




