

let articles = document.querySelector(".layout__articles");
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let description = document.querySelector("#description");
let form = document.querySelector(".form__create")

let arrayArticles = [];

function createArticle(){   
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if(title.value && subtitle.value && description.value){
            let article = {
                title: title.value,
                subtitle: subtitle.value,
                description: description.value,
            };

            arrayArticles.push(article);
            localStorage.setItem("articles", JSON.stringify(new_articles));
        }
        console.log(arrayArticles)
    }); 
}

createArticle();


