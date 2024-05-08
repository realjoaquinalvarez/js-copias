let result = 0;


function sumAll(...numbers){

    for( let count = 0; count < numbers.length; count++ ){

        result += numbers[count];

    };
    
    let resultBox = document.querySelector("#result");
    resultBox.innerHTML = result;

};

sumAll(3,4,5,6,7,8);



