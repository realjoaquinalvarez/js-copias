let concesionario = [
    {
        marca: "mercedes",
        modelos: ["clase a", "clase b", "clase c"]
    },
    {
        marca: "audi",
        modelos: ["clase a4", "clase b5", "clase c8"]
    },
    {
        marca: "renault",
        modelos: ["clio", "capture", "magene"]
    }
];








































// let marcaModelos = document.querySelector('.concesionario');
// let modelos = document.querySelector('.modelos');

// function recorrerConcesionario( concesionario ){
    
//     // console.log( concesionario[0].modelos[0])
    
//     for( let i = 0; i < concesionario.length ; i++){
        
//         let numOpcion = i + 1;
//         let parrafo =  `
//         <h1> Opcion ${ numOpcion}: ${ concesionario[i].marca } </h1> 
//         <ul>
//         `
//         marcaModelos.innerHTML += parrafo;
        
//         for ( let n = 0; n < concesionario[i].modelos.length ; n++ ){

//             opciones = `<li> - Modelo ${n} : ${concesionario[i].modelos[n] } </li>`;
            
//             marcaModelos.innerHTML += opciones;
            
//         }
//         marcaModelos.innerHTML += '</ul>';

//     }
    
// }

// recorrerConcesionario(concesionario);

