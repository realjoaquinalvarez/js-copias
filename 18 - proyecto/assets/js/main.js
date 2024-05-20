// Contadores de minutos y segundos
let cronoMin = document.querySelector('.crono__min');
let cronoSeg = document.querySelector('.crono__sec');

// Variables seleccion botones
let btnStart = document.querySelector('.layout__btn--start');
let btnStop = document.querySelector('.layout__btn--stop');

// Variables cuenta minutos y segundos
let minutes = 0;
let seconds = 0;
let time = null;

// Funcion para iniciar cronometro
let start = () => {
    if(!time) {
        time = setInterval(() => {
            seconds ++;
            if(seconds < 10) {
                cronoSeg.innerHTML = '0' + seconds;
            } else {
                cronoSeg.innerHTML = seconds;
            }
                        
            if( seconds == 60 ){
                minutes++
                seconds = 0;
                if( minutes < 10 ){
                    cronoMin.innerHTML = '0' + minutes;
                } else {
                    cronoMin.innerHTML = minutes;
                }
            };
            

            if( minutes >= 60 ){
                clearInterval(time)
                minutes = 0;
                seconds = 0;
                cronoSeg.innerHTML = '0' + seconds;
                cronoMin.innerHTML = '0' + minutes ;
                alert('Haz excedido el tiempo limite de 60 minutos');
                return;
            }
            
            
            
        }, 1000);
    }
    
};

btnStart.addEventListener("click", () => {
    start();
})

btnStop.addEventListener("click", () => {
    minutes = 60;
})
