let mainInput = document.querySelector('main__input');
let checkIcon = document.querySelector('icons__check');
let xMark = document.querySelector('icons__xmark');

mainInput.addEventListener('keydown', () => {

    let text = mainInput.value;
    
    let validacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

    if(validacion){
        checkIcon.classList.add('visible');
        xMark.classList.remove('visible');
    }else{
        checkIcon.classList.remove('visible');
        xMark.classList.add('visible');
    }
    
});

