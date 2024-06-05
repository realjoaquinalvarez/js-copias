document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const closeBtn = document.getElementById('close-btn');
  
    card.addEventListener('click', () => {
      card.classList.add('expanded');
    });
  
    closeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      card.classList.remove('expanded');
    });
  });
  