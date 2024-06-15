// Seleccionamos todas las estrellas
const stars = document.querySelectorAll('.star');

// Variable para guardar la calificación actual
let currentRating = 0;

// Recorremos las estrellas y les asignamos eventos
stars.forEach((star, index) => {
  // Evento 'mouseover': Colorea las estrellas al pasar el ratón
  star.addEventListener('mouseover', () => {
    highlightStars(index);
  });

  // Evento 'mouseout': Restaura el estado cuando el ratón se va
  star.addEventListener('mouseout', () => {
    resetStars();
  });

  // Evento 'click': Marca la calificación actual
  star.addEventListener('click', () => {
    currentRating = index + 1; // Guardamos el índice como la calificación
    setRating();
  });
});

// Función para colorear las estrellas hasta el índice dado
function highlightStars(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add('active'); // Añadimos la clase 'active'
    } else {
      star.classList.remove('active'); // Removemos la clase 'active'
    }
  });
}

// Función para restaurar las estrellas al estado de calificación actual
function resetStars() {
  stars.forEach((star, i) => {
    if (i < currentRating) {
      star.classList.add('active'); // Restauramos las estrellas marcadas
    } else {
      star.classList.remove('active'); // Removemos el resto
    }
  });
}

// Función para marcar la calificación actual permanentemente
function setRating() {
  stars.forEach((star, i) => {
    if (i < currentRating) {
      star.classList.add('active'); // Coloreamos hasta la calificación
    } else {
      star.classList.remove('active'); // Desmarcamos el resto
    }
  });
}
