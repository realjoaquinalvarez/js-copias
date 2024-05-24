

let articles = document.querySelector(".layout__articles");
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtible");
let description = document.querySelector("#description");
let form = document.querySelector(".from__create")


function createArticle(){
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if(title.value && subtitle.value && description.value){
            let article = {
                title: title.value,
                subtitle: subtitle.value,
                description: description.value,

            }
        }
        
    }); 
}

createArticle();


