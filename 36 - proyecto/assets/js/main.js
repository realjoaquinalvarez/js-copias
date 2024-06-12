// Seleccionar los elementos principales
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');

// Función para cargar las notas desde localStorage
function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach(note => createNote(note.id, note.title, note.content));
}

// Función para guardar las notas en localStorage
function saveNotes() {
  const notes = Array.from(document.querySelectorAll('.note')).map(note => ({
    id: note.dataset.id,
    title: note.querySelector('.note-title input').value,
    content: note.querySelector('.note-content').value
  }));
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Función para crear una nota
function createNote(id, title = 'Nueva Nota', content = '') {
  // Crear el contenedor de la nota
  const note = document.createElement('div');
  note.classList.add('note');
  note.dataset.id = id || Date.now(); // ID único basado en timestamp

  // Contenido de la nota
  note.innerHTML = `
    <div class="note-title">
      <input type="text" value="${title}" />
      <button class="delete-btn">&times;</button>
    </div>
    <textarea class="note-content">${content}</textarea>
  `;

  // Añadir eventos para guardar cambios
  const deleteBtn = note.querySelector('.delete-btn');
  const titleInput = note.querySelector('.note-title input');
  const contentInput = note.querySelector('.note-content');

  // Evento para eliminar una nota
  deleteBtn.addEventListener('click', () => deleteNote(note));

  // Eventos para guardar cambios
  titleInput.addEventListener('input', saveNotes);
  contentInput.addEventListener('input', saveNotes);

  // Añadir la nota al contenedor
  notesContainer.appendChild(note);
}

// Función para eliminar una nota
function deleteNote(note) {
  note.classList.add('removed'); // Animación de eliminación
  setTimeout(() => {
    note.remove(); // Eliminar del DOM
    saveNotes(); // Actualizar localStorage
  }, 300); // Tiempo igual al de la transición en CSS
}

// Evento para añadir una nueva nota
addNoteBtn.addEventListener('click', () => createNote(Date.now()));

// Cargar las notas al iniciar la página
loadNotes();
