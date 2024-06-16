// 1. Array de productos
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

//  Mushica bb ninahi bb concentrate okey mi amor te amo yo mash cheñolito <3

let carrito = [];
 
function renderProductos() {
  const contenedor = document.getElementById("products");
  // Limpiamos por si algo estaba antes
  contenedor.innerHTML = "";

  // Usamos un fragmento para optimizar inserciones múltiples
  const fragmento = document.createDocumentFragment();

  productos.forEach((producto) => {
    // Creamos un div con la clase .product-card
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Usamos innerHTML para rellenar la tarjeta
    card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>${producto.precio.toFixed(2)}€</p>
        <button data-id="${producto.id}">Comprar</button>
      `;

    // Agregamos la card al fragmento
    fragmento.appendChild(card);
  });

  // Finalmente insertamos todo el fragmento en el contenedor
  contenedor.appendChild(fragmento);

  // Después de renderizar, agregamos los eventos a los botones
  agregarEventosBotones();
}

function agregarEventosBotones(){
    let btnDom = document.querySelectorAll('.products button');

    btnDom.forEach(btn => {
        btn.addEventListener('click', () => {

            const idProducto = parseInt(btn.dataset.id);
            anadirAlCarrito(idProducto);
            
        });
    });
    
}

function anadirAlCarrito( id ){

    const producto = productos.find((p) => p.id === id);
   
    if(!producto) return;

    const itemEnCarrito = carrito.find((item) => item.id === id);

    if(itemEnCarrito){
        itemEnCarrito.cantidad++;
    }else{
        carrito.push({ ...producto, cantidad: 1 });
    }

    renderCarrito()
};

function renderCarrito() {
  const contenedorCarrito = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  contenedorCarrito.innerHTML = "";

  if (carrito.length === 0) {
    cartTotal.textContent = "Total: 0€";
    return;
  }

  const fragmento = document.createDocumentFragment();

  carrito.forEach((item) => {
    const divItem = document.createElement("div");
    divItem.classList.add("cart-item");

    divItem.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" />
      <div class="cart-item-info">
        <strong>${item.nombre}</strong>
        <div class="cart-item-precio">${(item.precio * item.cantidad).toFixed(
          2
        )}€</div>
        <div class="cart-qty">
          <button class="restar" data-id="${item.id}">-</button>
          <span>${item.cantidad}</span>
          <button class="sumar" data-id="${item.id}">+</button>
        </div>
      </div>
    `;

    fragmento.appendChild(divItem);
  });

  contenedorCarrito.appendChild(fragmento);

  
  
  
}










renderProductos();