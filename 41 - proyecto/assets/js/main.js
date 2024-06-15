const articles = document.querySelectorAll('.noticia');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible")
        } else {
            entry.target.classList.remove("visible")
        }
    });
  
});

articles.forEach((article) => {
  observer.observe(article);
});


