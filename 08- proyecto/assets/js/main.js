// Enunciado 8:
// Crea una funcion que devuelva si un numero (enviado por el usuario) 
// es par o impar.

// Muestra el resultado por la consola, la pantalla y una ventana.

let num = 0;
let result = 0;

do{

    num = parseInt(prompt("introduce un numero, para ver si es par", 0));

}while( num <= 0);

function isPair(x){
    if (x%2 == 0) {
        return true;
    } else {
        return false;
    }
}

result = isPair(num);
resultBox = document.querySelector("result");

if ( result == true ){
    
    let succes = "El numero" + num + "es par";
    console.log(succes);
    alert(succes)
    
} else {

    let failded = "El numero" + num + "es impart";
    console.log(failded);
    
}



