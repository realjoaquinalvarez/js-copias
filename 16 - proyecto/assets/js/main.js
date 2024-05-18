
console.log(screen.width, screen.height, window.location.href )
let data = document.querySelector('.data');

data.innerHTML += `<h2>Anchura: ${screen.width}</h2>`;
data.innerHTML += `<h2>Altura: ${screen.height}</h2>`;
data.innerHTML += `<h2>URL: ${window.location.href}</h2>`;

