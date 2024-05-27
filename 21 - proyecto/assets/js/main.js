

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

    estanteria.addEventListener("dragover", function(e){
        e.preventDefault();        
    });
    
    estanteria.addEventListener("drop", function (e){
        e.preventDefault();
        
        let idCajaDrag = e.dataTransfer.getData("dragId");

        if(idCajaDrag){

            let cajaNodo = document.querySelector("#" + idCajaDrag);

            if(this.childElementCount === 0){
                this.appendChild(cajaNodo);
                this.style.boxShadow = "none";
            } else {
                console.log(this)
                alert("esta estanteria esta ocupada!!");
            }

        }
        
        
    });
    
    
});





