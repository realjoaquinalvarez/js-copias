let frase = 'Este curso tiene muchos proyectos';

let palabra = prompt(`En esta frase " ${frase} ". Que palabra quieres reemplazar?`);
let reemplazo = prompt(`Haz elegido reemplazar la palabra ${ palabra }. Cual es la palabra con la que la quieres sustituir?`);


function reemplazar( palabraOriginal, palabraRemplazo){

    let busqueda = frase.search(palabraOriginal);
    let fraseFinal = "Esa palabra no existe"

   if( busqueda && busqueda != -1 ){

    fraseFinal = frase.replace(palabraOriginal, palabraRemplazo);
    
   }

   return fraseFinal;
}

alert(reemplazar(palabra, reemplazo));



