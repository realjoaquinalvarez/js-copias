// Seleccionamos los elementos principales
let addNoteBtn = document.querySelector("#addNoteBtn");
let notesContainer = document.querySelector(".notes-container");

// Cargar notas desde localStorage al iniciar la página
const loadNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach(note => addNote(note.title, note.body));
};

// Guardar todas las notas en localStorage
const saveNotes = () => {
  const notes = [];
  document.querySelectorAll(".note-card").forEach(note => {
    const title = note.querySelector(".note-title").value;
    const body = note.querySelector(".note-text").value;
    notes.push({ title, body });
  });
  localStorage.setItem("notes", JSON.stringify(notes));
};

// Función para agregar una nueva nota
let addNote = (title = '', body = '') => {
  // Crear el contenedor de la nota
  let noteBody = document.createElement('div');
  noteBody.classList.add("note-card");

  noteBody.innerHTML = `
    <div class="note-header">
      <input
        type="text"
        class="note-title"
        placeholder="Título..."
        value="${title}"
      />
      <button class="delete-note-btn" title="Borrar nota">
        <span>🗑️</span>
      </button>
    </div>
    <div class="note-content">
      <textarea
        class="note-text"
        placeholder="Contenido..."
      >${body}</textarea>
    </div>
  `;

  // Agregar eventos para guardar cambios en el título y el contenido
  let noteTitle = noteBody.querySelector(".note-title");
  let noteContent = noteBody.querySelector(".note-text");

  noteTitle.addEventListener('input', saveNotes);
  noteContent.addEventListener('input', saveNotes);

  // Agregar evento para eliminar la nota
  let deleteBtn = noteBody.querySelector(".delete-note-btn");
  deleteBtn.addEventListener("click", () => {
    noteBody.classList.add("fade-out"); // Animación de eliminación
    setTimeout(() => {
      noteBody.remove(); // Remover del DOM
      saveNotes(); // Guardar el nuevo estado en localStorage
    }, 300); // Esperar a que termine la animación
  });

  // Agregar la nueva nota al contenedor
  notesContainer.appendChild(noteBody);
};

// Listener para añadir una nueva nota vacía
addNoteBtn.addEventListener("click", () => {
  addNote();
  saveNotes(); // Guardar inmediatamente la nueva nota en localStorage
});

// Cargar las notas al iniciar la página
loadNotes();
