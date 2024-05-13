
let animales = ["perro", "gato", "leon", "tigre"]


const recorrerMostrar = () => {

    document.write("<h1>Proyecto 12 JS - Joaquin Alvarez</h1>")

    // for( let i = 0; i < animales.length; i++ ){

    //     parrafo = `<p> - ${animales[i]} </p>`;

    //     document.write(parrafo);
        
    // }


    animales.forEach((animal) => {

        parrafo = `<p> - ${animal} </p>`;
        
        document.write(parrafo);

    })    
    
    
}


recorrerMostrar();