
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

function renderProductos() {
  // Obtenemos el contenedor de productos
  const contenedor = document.getElementById("productosContainer");

  // Limpiamos el contenedor antes de agregar nuevos elementos (buena práctica)
  contenedor.innerHTML = "";

  // Creamos un fragmento de documento
  const fragmento = document.createDocumentFragment();

  // Recorremos el array de productos y generamos el HTML
  productos.forEach((producto) => {
    // Crear un elemento div para la tarjeta del producto
    const card = document.createElement("div");
    card.classList.add("product-card"); // Añadimos la clase de estilo

    // Agregamos el contenido HTML a la tarjeta
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p>${producto.precio.toFixed(2)}€</p>
      <button data-id="${producto.id}">Comprar</button>
    `;

    // Añadimos la tarjeta al fragmento
    fragmento.appendChild(card);
  });

  // Insertamos todo el fragmento en el contenedor
  contenedor.appendChild(fragmento);
}


renderProductos();