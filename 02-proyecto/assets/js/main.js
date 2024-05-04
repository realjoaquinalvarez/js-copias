// Enunciado 2:
// - Crea un fichero JavaScript y vínculalo con tu fichero HTML
// - Debes crear las variables marca, velocidad, stock y modelos (array),
// - Todas estas variables deberán ser mostradas por la pantalla (con una frase).
// - Debes mostrar cada uno de los elementos del array (sin hacerlo manualmente)

let marca = 'Audi',
    velocidad = 200,
    stock = true,
    modelos = ['R8', 'A3', 'A7'];


let frase = `
<p>
Tenemos coches de la marca ${ marca }, 
van a una velocidad maxima de ${ velocidad } km/h, </br>
Dispones de estos modelos:

</p>
`;

modelos.forEach((modelo) => {
    frase += `<p> - ${ modelo } <br/> </p>`;
});


let caja = document.querySelector("#caja");
caja.innerHTML = frase;

