
console.log(screen.width, screen.height, window.location.href )
let data = document.querySelector('.data');

data.innerHTML += `<h2>Anchura: ${window.innerWidth}</h2>`;
data.innerHTML += `<h2>Altura: ${window.innerHeight}</h2>`;
data.innerHTML += `<h2>URL: ${window.location.href}</h2>`;

window.open("https://victorrobles.es/ruta", "blank");

