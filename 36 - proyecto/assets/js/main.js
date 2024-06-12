// Array para almacenar las notas temporalmente (además de localStorage)
let notes = [];

// Seleccionamos el contenedor de notas
const notesContainer = document.getElementById('notesContainer');
// Botón para añadir nota
const btnAddNote = document.querySelector('.app__btn-add');

// Al cargar la página, recuperamos las notas de localStorage (si las hay)
document.addEventListener('DOMContentLoaded', () => {
  loadNotes();
});

// Escucha el evento de click en el botón "Añadir nota"
btnAddNote.addEventListener('click', () => {
  addNewNote();
});

// Función para cargar notas desde localStorage
function loadNotes() {
  const storedNotes = JSON.parse(localStorage.getItem('myNotes')) || [];
  notes = storedNotes;
  renderAllNotes();
}

// Función para renderizar todas las notas
function renderAllNotes() {
  // Primero, limpiamos el contenedor
  notesContainer.innerHTML = '';

  // Recorremos el array de notas y las renderizamos
  notes.forEach((note) => {
    createNoteElement(note.id, note.title, note.text);
  });
}

// Función para crear un nuevo objeto nota y renderizarlo
function addNewNote() {
  const newNote = {
    id: Date.now(),  // ID único
    title: 'Nota ' + (notes.length + 1), // Nombre por defecto
    text: 'Texto de prueba ' + (notes.length + 1), 
  };

  notes.push(newNote);
  saveNotesToLocalStorage();

  // Crea el elemento en el DOM
  createNoteElement(newNote.id, newNote.title, newNote.text, true);
}

// Función que crea el elemento nota en el DOM
function createNoteElement(id, title, text, animate = false) {
  // Contenedor principal
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  if (animate) {
    // Añadimos .show un poquito después para que la transición arranque
    setTimeout(() => noteEl.classList.add('show'), 10);
  } else {
    // Si no es nueva, directamente se muestra
    noteEl.classList.add('show');
  }
  
  // Header de la nota
  const headerEl = document.createElement('div');
  headerEl.classList.add('note__header');

  // Título
  const titleEl = document.createElement('span');
  titleEl.classList.add('note__title');
  titleEl.textContent = title;
  
  // Botón de eliminar
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('note__delete');
  btnDelete.innerHTML = '🗑';
  btnDelete.addEventListener('click', () => removeNote(id, noteEl));

  // Cuerpo de la nota
  const bodyEl = document.createElement('div');
  bodyEl.classList.add('note__body');

  // Input para editar título
  const inputTitle = document.createElement('input');
  inputTitle.type = 'text';
  inputTitle.value = title;
  inputTitle.addEventListener('input', (e) => {
    updateNote(id, 'title', e.target.value);
  });

  // Textarea para editar texto
  const textareaText = document.createElement('textarea');
  textareaText.value = text;
  textareaText.rows = 4;
  textareaText.addEventListener('input', (e) => {
    updateNote(id, 'text', e.target.value);
  });

  // Insertamos elementos en el DOM
  headerEl.appendChild(titleEl);
  headerEl.appendChild(btnDelete);
  bodyEl.appendChild(inputTitle);
  bodyEl.appendChild(textareaText);
  
  noteEl.appendChild(headerEl);
  noteEl.appendChild(bodyEl);

  // Agregamos la nota al contenedor principal
  notesContainer.appendChild(noteEl);
}

// Función para eliminar la nota con transición
function removeNote(id, noteElement) {
  // Añadimos la clase .hide para la animación de salida
  noteElement.classList.add('hide');

  // Esperamos el tiempo de transición antes de eliminar del DOM
  noteElement.addEventListener('transitionend', () => {
    noteElement.remove();
  }, { once: true });

  // Eliminamos del array
  notes = notes.filter(note => note.id !== id);
  saveNotesToLocalStorage();
}

// Función para actualizar una propiedad de la nota (título o texto)
function updateNote(id, key, value) {
  const noteToUpdate = notes.find(note => note.id === id);
  if (noteToUpdate) {
    noteToUpdate[key] = value;
    saveNotesToLocalStorage();
  }
}

// Guarda el array de notas en localStorage
function saveNotesToLocalStorage() {
  localStorage.setItem('myNotes', JSON.stringify(notes));
}
