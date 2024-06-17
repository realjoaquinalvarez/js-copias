// ---------- Datos de productos de ejemplo ----------
const productos = [
  {
    id: 1,
    nombre: "Camiseta",
    precio: 14.99,
    imagen: "https://via.placeholder.com/400x300?text=Camiseta",
  },
  {
    id: 2,
    nombre: "Cámara",
    precio: 49.99,
    imagen: "https://via.placeholder.com/400x300?text=Camara",
  },
  {
    id: 3,
    nombre: "Portátil",
    precio: 499.99,
    imagen: "https://via.placeholder.com/400x300?text=Portatil",
  },
  {
    id: 4,
    nombre: "Zapatillas",
    precio: 29.99,
    imagen: "https://via.placeholder.com/400x300?text=Zapatillas",
  },
];

// ---------- Carrito en memoria (array) ----------
let carrito = [];

// -------------------- Funciones de ayuda --------------------

// Mostrar carrito (añade la clase 'activo' al aside)
function mostrarCarrito() {
  document.getElementById("carrito").classList.add("activo");
}

// Ocultar carrito (remueve la clase 'activo' del aside)
function ocultarCarrito() {
  document.getElementById("carrito").classList.remove("activo");
}

// Cargar carrito desde localStorage al iniciar
function cargarCarritoDeLocalStorage() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
}

// Guardar carrito en localStorage
function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Calcular total del carrito
function calcularTotal() {
  return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

// -------------------- Funciones de carrito --------------------

// Añadir producto al carrito
function anadirAlCarrito(producto) {
  // Revisar si el producto ya está en el carrito
  const itemExistente = carrito.find((item) => item.id === producto.id);
  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarCarritoEnLocalStorage();
  renderCarrito();
  actualizarBotonCarrito();

  // Si el carrito tiene productos, lo mostramos
  if (carrito.length > 0) {
    mostrarCarrito();
  }
}

// Cambiar cantidad de un producto (incrementar o decrementar)
function cambiarCantidad(id, cambio) {
  const item = carrito.find((producto) => producto.id === id);
  if (!item) return;

  item.cantidad += cambio;
  // Si la cantidad es 0 o negativa, eliminar el producto
  if (item.cantidad <= 0) {
    carrito = carrito.filter((producto) => producto.id !== id);
  }
  guardarCarritoEnLocalStorage();
  renderCarrito();
  actualizarBotonCarrito();
}

// Vaciar todo el carrito
function vaciarCarrito() {
  carrito = [];
  guardarCarritoEnLocalStorage();
  renderCarrito();
  actualizarBotonCarrito();
}

// -------------------- Render de productos y carrito --------------------

// Mostrar productos en la página
function renderProductos() {
  const contenedor = document.getElementById("productosContainer");
  contenedor.innerHTML = ""; // Limpia antes de renderizar

  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p>${producto.precio.toFixed(2)}€</p>
      <button data-id="${producto.id}">Comprar</button>
    `;

    // Evento para el botón "Comprar"
    const btn = card.querySelector("button");
    btn.addEventListener("click", () => anadirAlCarrito(producto));

    contenedor.appendChild(card);
  });
}

// Mostrar/actualizar el contenido del carrito
function renderCarrito() {
  const itemsContainer = document.getElementById("carritoItems");
  itemsContainer.innerHTML = "";

  carrito.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carrito-item");

    itemDiv.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}"/>
      <div class="carrito-item-info">
        <strong>${item.nombre}</strong>
        <div class="carrito-item-precio">
          ${(item.precio * item.cantidad).toFixed(2)}€
        </div>
        <div class="carrito-qty">
          <button class="restar">-</button>
          <span>${item.cantidad}</span>
          <button class="sumar">+</button>
        </div>
      </div>
    `;

    // Botones de sumar/restar
    const btnRestar = itemDiv.querySelector(".restar");
    const btnSumar = itemDiv.querySelector(".sumar");

    btnRestar.addEventListener("click", () => cambiarCantidad(item.id, -1));
    btnSumar.addEventListener("click", () => cambiarCantidad(item.id, 1));

    itemsContainer.appendChild(itemDiv);
  });

  // Actualizamos el total
  const total = calcularTotal();
  document.getElementById("carritoTotal").textContent = `Total: ${total.toFixed(2)}€`;

  // Si el carrito está vacío, lo ocultamos
  if (carrito.length === 0) {
    ocultarCarrito();
  }
}

// Actualiza el texto del botón "Carrito (x)"
function actualizarBotonCarrito() {
  const btnCart = document.getElementById("btnToggleCart");
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  btnCart.textContent = `Carrito (${totalItems})`;
}

// -------------------- Eventos principales --------------------
document.addEventListener("DOMContentLoaded", () => {
  // Cargamos el carrito de localStorage
  cargarCarritoDeLocalStorage();

  // Renderizamos productos y carrito
  renderProductos();
  renderCarrito();
  actualizarBotonCarrito();

  // Botón del header para abrir/cerrar carrito manualmente
  const btnToggleCart = document.getElementById("btnToggleCart");
  btnToggleCart.addEventListener("click", () => {
    const carritoAside = document.getElementById("carrito");
    carritoAside.classList.contains("activo") ? ocultarCarrito() : mostrarCarrito();
  });

  // Botón para cerrar el carrito (la X)
  const btnCerrarCarrito = document.getElementById("btnCerrarCarrito");
  btnCerrarCarrito.addEventListener("click", () => {
    ocultarCarrito();
  });

  // Botón "Comprar todo"
  const btnComprarTodo = document.getElementById("btnComprarTodo");
  btnComprarTodo.addEventListener("click", () => {
    alert("¡Gracias por tu compra!");
    vaciarCarrito();
    // Después de vaciar, se re-renderiza el carrito y se oculta si está vacío
  });
});
