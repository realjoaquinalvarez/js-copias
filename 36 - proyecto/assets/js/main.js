let btn = document.querySelector(".main__btn");
let notes = document.querySelector('.main__notes');

btn.addEventListener('click', (e) => {
    createNote('', '');
});

let createNote = (body = '', title = '') => {
    // Creando el HTML de la nota
    let note = document.createElement('article');
    note.classList.add("notes__note");

    note.innerHTML += `
        <header class="note__header">
            <input type="text" class="header__input" value="${title}">
            <i class="note__icon fa-solid fa-trash"></i>
        </header>
        <textarea class="note__body" name="body">${body}</textarea>
    `;

    // Elementos del DOM a utilizar
    let input = note.querySelector(".header__input");
    let textarea = note.querySelector(".note__body");
    let trash = note.querySelector(".note__icon");

    // Guardar datos de mi nota
    input.addEventListener('input', () => {
        update();
    });

    textarea.addEventListener('input', () => {
        update();
    });

    // Eliminar notas
    trash.addEventListener("click", () => {
        note.remove();
        update();
    });

    // Agregar nota al contenedor de notas
    notes.appendChild(note);
    update(); // Actualizar inmediatamente después de agregar una nota
};

let update = () => {
    let notesArray = []; // Declarar correctamente el array
    let notesDom = document.querySelectorAll(".notes__note");

    notesDom.forEach(noteDom => {
        let noteInput = noteDom.querySelector(".header__input");
        let noteTextarea = noteDom.querySelector(".note__body");

        // Verificar que los elementos existan
        if (noteInput && noteTextarea) {
            let note = {
                "body": noteTextarea.value.trim(),
                "title": noteInput.value.trim()
            };

            // Solo guardar si hay contenido en la nota
            if (note.body !== "" || note.title !== "") {
                notesArray.push(note);
            }
        }
    });

    // Persistir notas en localStorage
    localStorage.setItem("notes", JSON.stringify(notesArray));
};


let getNotes = () => {
    // Obtener notas del localStorage, manejar el caso en que sea null
    let notesStorage = JSON.parse(localStorage.getItem("notes")) || [];

    // Cargar notas desde el localStorage si hay datos
    if (notesStorage.length > 0) {
        notesStorage.forEach(note => {
            createNote(note.body, note.title);
        });
    }
};

// Cargar notas al iniciar
getNotes();
