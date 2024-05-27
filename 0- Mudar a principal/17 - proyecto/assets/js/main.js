window.addEventListener("DOMContentLoaded", event => {
    let cards = document.querySelectorAll('.layout__card');
    
    cards.forEach(card => {
        // Seleccionamos elementos individuales dentro de cada tarjeta
        let header = card.querySelector('.card__header');
        let description = card.querySelector(".content__description");
        let btn = card.querySelector('.content__btn');


        // Añadimos un evento al botón
        btn.addEventListener("click", () => {
            // Estilos por defecto
            card.style.boxShadow = "0px 0px 14px black";
            header.style.backgroundColor = "#1B62CA";
            description.style.opacity = 0.8;
            btn.style.backgroundColor = "white";
            btn.style.color = "#1B62CA";
        });
    });
});
