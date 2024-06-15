
const nav = document.querySelector(".layout__nav");


window.addEventListener('scroll', () => {

    if(document.documentElement.scrollTop > 100){
        nav.classList.add('layout__nav--fixed');
    } else {
        nav.classList.remove('layout__nav--fixed');
    }
    
});

