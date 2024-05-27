

// seleccionar elementos del dom


let inventarioDom = document.querySelector(".main__inventario");
let cajas = document.querySelectorAll(".inventario__caja");
let estanteriaDom = document.querySelectorAll(".almacen__estanteria");

// Poner un id unico a cada caja movible

cajas.forEach((caja, i) => {

    caja.setAttribute("id", "caja"+i);

    caja.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("dragId", e.target.id);
    })
    
});

// Establecer cada hueco de la estanteria como un hueco donde puedo soltar un elemento


estanteriaDom.forEach((estanteria, i) => {

    estanteria.addEventListener("dragover", e => {
        e.preventDefault();        
    });
    
    estanteria.addEventListener("drop", e => {
        e.preventDefault();
        
        let idCajaDrag = e.dataTransfer.getData("dragId");

        if(idCajaDrag){

            let cajaNodo = document.querySelector("#" + idCajaDrag);

            if(e.target.childElementCount === 0){
                e.target.appendChild(cajaNodo);
                e.target.style.boxShadow = "none";
            } else {
                alert("esta estanteria esta ocupada!!");
            }

        }
        
        
    });
    
    
});





