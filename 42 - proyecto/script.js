
let result = document.getElementById('result');
let filter = document.getElementById('filter');
let listItem = [];

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');
    const data = res.json();

    console.log(await res);
    console.log(await data);
};

getData();
