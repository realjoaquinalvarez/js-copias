const articles = document.querySelectorAll('.noticia');
console.log(articles);

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
});

articles.forEach((article) => {
  observer.observe(article);
});
