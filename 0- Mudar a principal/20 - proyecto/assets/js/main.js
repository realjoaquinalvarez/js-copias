let dateDOM = document.querySelector('.main__date');
let hourDOM = document.querySelector('.main__hour');

let lastRenderedMinute = null;

let updateDateAndTime = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Mes comienza en 0
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if (minutes === lastRenderedMinute) return;
    lastRenderedMinute = minutes;

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    dateDOM.innerHTML = `${day}/${month}/${year}`;
    hourDOM.innerHTML = `${hour}:${minutes}`;
};

setInterval(updateDateAndTime, 1000);

updateDateAndTime();
