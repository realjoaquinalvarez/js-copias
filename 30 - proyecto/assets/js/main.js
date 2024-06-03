
let countSpans = document.querySelectorAll('.socials__count');


function intervaloSubida( countSpan, escala, followersValue, sumador) {
    setInterval(() => {
        if( sumador <= followersValue ) {
            countSpan.innerHTML = sumador;
            sumador += escala;
        } else clearInterval(intervaloSubida)
    }, 10);
}

countSpans.forEach(countSpan => {

    let followersValue = countSpan.getAttribute('data-count')
    let escala = followersValue / 100;
    let sumador = 0;
    
    intervaloSubida( countSpan, escala, followersValue, sumador );

});






