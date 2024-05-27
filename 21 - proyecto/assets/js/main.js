

// seleccionar elementos del dom


let inventarioDom = document.querySelector(".main__inventario");
let cajas = document.querySelectorAll(".inventario__caja");
let estanteriaDom = document.querySelectorAll(".almacen__estanteria");

// Poner un id unico a cada caja movible

cajas.forEach((caja, indice) => {

    caja.setAttribute("id", "caja"+i);

    caja.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("id", e.target.id);
    })
    
});

// Establecer cada hueco de la estanteria como un hueco donde puedo soltar un elemento



