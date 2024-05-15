const sueldos = [1050, 640, 750, 1500, 2200, 3011, 432];

let sueldoUsuario = parseInt(prompt("Cual es su sueldo?"));

const listarOrden = (sueldosOrdenados) => {

    let texto = ``

    sueldosOrdenados.forEach(sueldo => {
        texto += `\n - ${sueldo} `
    });
    
    return texto;

}

const buscarSueldos = (salarios, miSueldo) => {

    let busqueda = salarios.filter( salario => salario >= miSueldo );

    let ordenar = busqueda.sort(( a, b ) =>  a - b );

    console.log(`Hay ${ ordenar.length} salarios mayores al tuyo (${miSueldo})$, son estos: ${listarOrden(ordenar)}`);
    
}



buscarSueldos(sueldos, sueldoUsuario);