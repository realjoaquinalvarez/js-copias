const actualYear = new Date().getFullYear();

let year = 1990;
let result = 0;


do{
    year = parseInt(prompt("En que ano naciste?", year));
    
}while( year < (actualYear - 120) || year > actualYear);

result = actualYear - year;

alert("Tienes" + " " + result + " " + "anos");