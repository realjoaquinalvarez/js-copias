
let animales = ["perro", "gato", "leon", "tigre"]

const recorrerMostrar = () => {

    document.write("<h1>Proyecto 12 JS - Joaquin Alvarez</h1>")

    // for( let i = 0; i < animales.length; i++ ){

    //     parrafo = `<p> - ${animales[i]} </p>`;

    //     document.write(parrafo);
        
    // }


    animales.forEach((animal, indice) => {

        animalUpper = 
        parrafo = `<p> - El animal es numero ${indice + 1} : ${animal.toUpperCase()} </p>`;
        
        document.write(parrafo);

    })    
    
    
}


recorrerMostrar();