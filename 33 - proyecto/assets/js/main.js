let textoDOM = document.querySelector('#typewriter');
let textoContent = textoDOM.textContent;

let i = 0; 
textoDOM.innerHTML = '';

let aumentarLetras = setInterval(() => {
    if (i < textoContent.length) {
        textoDOM.innerHTML += textoContent[i];
        i++; 
    } else {
        clearInterval(aumentarLetras); 
    }
}, 100);
