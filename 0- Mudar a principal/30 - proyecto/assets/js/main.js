const counters = document.querySelectorAll('.socials__count');

function animateCounter(counterElement, step, targetValue) {

    let currentValue = 0;

    // Guardamos el identificador del intervalo
    const intervalId = setInterval(() => {

        if (currentValue <= targetValue) {
            counterElement.innerHTML = currentValue; // Ajusta al valor exacto si supera el objetivo
            currentValue += step;
        } else {
            counterElement.innerHTML = targetValue; // Asegura el valor final exacto
            clearInterval(intervalId); // Detenemos el intervalo correctamente
        }
        
    }, 10);
}

counters.forEach(counterElement => {

    const targetValue = parseInt(counterElement.getAttribute('data-count'), 10); 
    const step = targetValue / 100; // Incremento proporcional
    
    animateCounter(counterElement, step, targetValue);
});
