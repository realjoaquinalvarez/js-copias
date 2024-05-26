
let dateDOM = document.querySelector('.main__date');
let hourDOM = document.querySelector('.main__hour');


let myDate = () => {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    aComparar = minutes;

    if(day < 10 ) day = '0' + day;
    if(month < 10 ) month = '0' + month;
    
    if(hour < 10 ) hour = '0' + hour;
    if(minutes < 10 ) minutes = '0' + minutes;

    
    dateDOM.innerHTML = `${day}/${month}/${year}`;
    hourDOM.innerHTML = `${hour}:${minutes}`
    
};

setInterval( () => {
        myDate();
}, 1000);
    
    