// Tomamos los elementos
const progress = document.getElementById('progress');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const circles = document.querySelectorAll('.circle');

// El índice (paso) actual, arrancando en 1
let currentStep = 1;
// Cantidad total de pasos
const totalSteps = circles.length;

// Función para “actualizar” el estado de la barra y los círculos
function updateProgress() {
  // Añadimos o removemos la clase 'active' según el currentStep
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Altura que debe tener la barra de progreso:
  // (currentStep - 1) / (totalSteps - 1) → porcentaje
  // Multiplicado por 100 -> valor en %
  // multiplicado por el “alto total” (en este caso la barra es vertical).
  
  // Para vertical, ajustamos la 'height'. 
  // (Para horizontal, ajustarías la 'width')
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;
  progress.style.height = progressPercent + '%';

  // Manejo de deshabilitación de botones
  if (currentStep === 1) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
  if (currentStep === totalSteps) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}

// Listeners para los botones
btnNext.addEventListener('click', () => {
  currentStep++;
  if (currentStep > totalSteps) {
    currentStep = totalSteps;
  }
  updateProgress();
});

btnPrev.addEventListener('click', () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateProgress();
});

// Llamamos a la función al cargar para tener el estado inicial correcto
updateProgress();
