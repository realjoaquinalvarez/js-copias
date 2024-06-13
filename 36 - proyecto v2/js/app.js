

let addNoteBtn = document.querySelector('#addNoteBtn');
let notesContainer = document.querySelector('.notes-container');

const saveNotes = () => {

  let notes = [];

  document.querySelectorAll(".note-card").forEach(note => {
    let title = note.querySelector(".note-title").value;
    let body = note.querySelector(".note-text").value;

    notes.push({title, body});
  });

  localStorage.setItem("notes", JSON.stringify(notes));
  
};

const addNote = ( title = '', body ='') => {

  let noteBody = document.createElement('div');
  noteBody.classList.add('note-card');

  noteBody.innerHTML = `
      <div class="note-header">
        <input
          type="text"
          class="note-title"
          placeholder="Escribe el título..."
          value="${title}"
        />
      <button class="delete-note-btn" title="Borrar nota">
        <span>🗑️</span>
      </button>
    </div>
    <div class="note-content">
      <textarea
        class="note-text"
        placeholder="Escribe el contenido aquí..."
      >${body}</textarea>
    </div>
  `;

  let noteTitle = noteBody.querySelector('.note-title')
  let noteContent = noteBody.querySelector('.note-text')

  noteTitle.addEventListener('input', saveNotes );
  noteContent.addEventListener('input', saveNotes );
  
  notesContainer.appendChild(noteBody);

};

addNoteBtn.addEventListener( 'click', () => {
  addNote();
});


