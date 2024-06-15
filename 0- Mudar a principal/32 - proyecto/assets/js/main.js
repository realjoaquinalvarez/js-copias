document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const loader = document.getElementById("loader");
    const chat = document.getElementById("chat");
    const messageForm = document.getElementById("messageForm");
    const messageInput = document.getElementById("messageInput");
    const messages = document.getElementById("messages");

    // Simulación de carga (5 segundos)
    setTimeout(() => {
        // Ocultar loader
        loader.classList.add("hidden");
        // Mostrar chat
        chat.classList.remove("hidden");
    }, 5000);

    // Manejo de mensajes
    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const text = messageInput.value.trim();
        if (text !== "") {
            // Crear nuevo mensaje
            const newMessage = document.createElement("div");
            newMessage.classList.add("message");
            newMessage.innerHTML = `
                <strong>Tú</strong>
                <p>${text}</p>
            `;

            // Agregar mensaje
            messages.appendChild(newMessage);

            // Limpiar input
            messageInput.value = "";

            // Scroll al final
            messages.scrollTop = messages.scrollHeight;
        }
    });
});