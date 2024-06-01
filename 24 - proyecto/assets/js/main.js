
let inputMain = document.querySelector('.form__input');
let ojoIco = document.querySelector('.form__eye');


ojoIco.addEventListener('click', () => {

    if(inputMain.type === 'password'){
        inputMain.type = 'text';
    }else{
        inputMain.type = 'password';
    }
    
});





