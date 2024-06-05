let mainInput = document.querySelector('.main__input');
let checkIcon = document.querySelector('.icons__check');
let xMark = document.querySelector('.icons__xmark');

mainInput.addEventListener( 'input', (e) => {

    let input = e.target.value;
    
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

    if(isValid){
        checkIcon.classList.add('visible');
        xMark.classList.remove('visible')
    }else{
        xMark.classList.add('visible');
        checkIcon.classList.remove('visible')
    }
});