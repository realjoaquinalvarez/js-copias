// ------------------- Datos de productos -------------------
const productos = [
  {
    id: 1,
    nombre: "Camiseta",
    precio: 14.99,
    imagen: "./img/product-1.jpg",
  },
  {
    id: 2,
    nombre: "Cámara",
    precio: 49.99,
    imagen: "./img/product-2.jpg",
  },
  {
    id: 3,
    nombre: "Portátil",
    precio: 499.99,
    imagen: "./img/product-3.jpg",
  },
  {
    id: 4,
    nombre: "Zapatillas",
    precio: 29.99,
    imagen: "./img/product-4.jpg",
  },
];

// Carrito en memoria
// Cada elemento será { id, nombre, precio, cantidad, imagen }
let carrito = [];

// ------------------- Función para renderizar los productos -------------------
function renderProductos() {
  const contenedor = document.getElementById("products");
  contenedor.innerHTML = "";

  // Usamos un fragmento para optimizar la inserción de varios elementos
  const fragmento = document.createDocumentFragment();

  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p>${producto.precio.toFixed(2)}€</p>
      <button data-id="${producto.id}">Comprar</button>
    `;

    fragmento.appendChild(card);
  });

  // Agregamos el fragmento al contenedor
  contenedor.appendChild(fragmento);

  // Después de renderizar, agregamos los eventos a los botones
  agregarEventosBotones();
}

// ------------------- Agregar eventos a los botones de compra -------------------
function agregarEventosBotones() {
  const botones = document.querySelectorAll(".product-card button");
  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      anadirAlCarrito(id);
    });
  });
}

// ------------------- Añadir producto al carrito -------------------
function anadirAlCarrito(id) {
  // Buscamos el producto en 'productos'
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;

  // Revisamos si ya está en el carrito
  const item = carrito.find((p) => p.id === id);
  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  renderCarrito(); // Actualizamos la vista del carrito
}

// ------------------- Renderizar carrito en pantalla -------------------
function renderCarrito() {
  const contenedorCarrito = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  // Limpiamos el contenedor
  contenedorCarrito.innerHTML = "";

  // Si está vacío, mostramos total 0 y terminamos
  if (carrito.length === 0) {
    cartTotal.textContent = "Total: 0€";
    return;
  }

  const fragmento = document.createDocumentFragment();

  // Recorremos el carrito y creamos el HTML de cada producto
  carrito.forEach((item) => {
    const divItem = document.createElement("div");
    divItem.classList.add("cart-item");

    divItem.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" />
      <div class="cart-item-info">
        <strong>${item.nombre}</strong>
        <div class="cart-item-precio">${(item.precio * item.cantidad).toFixed(2)}€</div>
        <div class="cart-qty">
          <button class="qty-btn restar" data-id="${item.id}">-</button>
          <span>${item.cantidad}</span>
          <button class="qty-btn sumar" data-id="${item.id}">+</button>
        </div>
      </div>
    `;

    fragmento.appendChild(divItem);
  });

  // Insertamos todo en el contenedor del carrito
  contenedorCarrito.appendChild(fragmento);

  // Calculamos el total
  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  cartTotal.textContent = `Total: ${total.toFixed(2)}€`;

  // Agregamos eventos de sumar/restar
  agregarEventosCantidad();
}

// ------------------- Eventos de sumar/restar en el carrito -------------------
function agregarEventosCantidad() {
  const botonesSumar = document.querySelectorAll(".cart-item .sumar");
  const botonesRestar = document.querySelectorAll(".cart-item .restar");

  botonesSumar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      cambiarCantidad(id, 1);
    });
  });

  botonesRestar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      cambiarCantidad(id, -1);
    });
  });
}

// ------------------- Función para cambiar cantidad -------------------
function cambiarCantidad(id, valor) {
  const producto = carrito.find((p) => p.id === id);
  if (!producto) return;

  producto.cantidad += valor;
  if (producto.cantidad <= 0) {
    // Quitamos el producto del carrito si llega a 0 o menos
    carrito = carrito.filter((p) => p.id !== id);
  }
  renderCarrito();
}

// ------------------- Comprar todo (vaciar carrito) -------------------
document.addEventListener("DOMContentLoaded", () => {
  // Renderizamos los productos desde el principio
  renderProductos();

  // Evento al botón "Comprar todo"
  const btnCheckout = document.getElementById("btnCheckout");
  btnCheckout.addEventListener("click", () => {
    if (carrito.length > 0) {
      alert("Gracias por tu compra");
      carrito = [];
      renderCarrito();
    } else {
      alert("El carrito está vacío");
    }
  });
});
