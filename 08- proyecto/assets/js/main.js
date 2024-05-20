// Enunciado 8:
// Crea una funcion que devuelva si un numero (enviado por el usuario) 
// es par o impar.

// Muestra el resultado por la consola, la pantalla y una ventana.

let num = 0;
let result = 0;
// Asignar numero mayor a cero
do{

    num = parseInt(prompt("introduce un numero, para ver si es par", 0));

}while( num <= 0);
// Funcion par o impar
function isPairOrNot(x){
    if (x%2 == 0) {
        return true;
    } else {
        return false;
    }
}
// Llamar la funcion y seleccionar etiqueta
result = isPairOrNot(num);
let resultBox = document.querySelector(".result");
// Crear mensaje para imprimir en etiqueta (impart por default)
let message = "El numero" + num + "es impar";

if ( result == true ){
    
    message = "El numero " +  num + " es par";

};

console.log(message);
alert(message);
resultBox.innerHTML = `<p> ${message} </p>`;



