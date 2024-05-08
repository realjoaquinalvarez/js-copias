let result = 0;


function sumAll(...numbers){

    let resultBox = document.querySelector("#result");
    let numbersBox = document.querySelector("#numbers");
    
    numbersBox.innerHTML = "<p> Los numeros que se han utilizado para los resultados son estos: </p>";
    
    for( let count = 0; count < numbers.length; count++ ){

        result += numbers[count];

        numbersBox.innerHTML += numbers[count];

        if( count !== numbers.length - 1 ) numbersBox.innerHTML += ', ';
    };

    
    resultBox.innerHTML = "El resultado es: " + result;

};

sumAll(1,2,3,4,5,6);



