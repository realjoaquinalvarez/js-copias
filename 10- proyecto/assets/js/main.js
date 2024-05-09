let text = prompt('Introduce una palabra');


function countAnUpperLetters( word ){
    let upper = word.toUpperCase();
    let counter = word.length;

    return "La palabra ha sido: " + upper + " y tiene " + counter + " letras.";

}

alert(countAnUpperLetters(text));