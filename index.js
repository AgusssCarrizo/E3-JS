const pizzas = [
   {
      id: 1,
      nombre: "Pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "./img/muzzarella.png",
   },

   {
      id: 2,
      nombre: "Pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "./img/cebolla.png",
   },

   {
      id: 3,
      nombre: "Pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
         "Muzzarella",
         "Tomate",
         "Queso Azul",
         "Parmesano",
         "Roquefort",
      ],
      imagen: "./img/4quesos.png",
   },

   {
      id: 4,
      nombre: "Pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "./img/especial.png",
   },

   {
      id: 5,
      nombre: "Pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      imagen: "./img/anana.png",
   },
];

const btn = document.getElementById("btn-add");
const input = document.getElementById("input");
const small = document.getElementById("small");
const box = document.getElementById("box");
const pizza = JSON.parse(localStorage.getItem("pizza"));

const renderCard = (pizza) => {
   return `
   <div class="container-pizza">
    
      <h3>${pizza.nombre}</h3>
      <img class="img-tr" src="${pizza.imagen}" alt="${pizza.nombre}" />
       <p> ${pizza.ingredientes.join(", ")}</p>
       <p>Precio: ${pizza.precio}</p>
       <button class="btn-add">
          <a href="#">Comprar</a>
      </button>
     
   </div>
   `;
};

const handleClick = () => {
   const value = input.value;
   const pizza = pizzas.find((e) => Number(e.id) === Number(value));
   if (!value || isNaN(value)) {
      small.textContent = "Ingresa un número válido";
      box.innerHTML = "";
      localStorage.removeItem("pizza");
   } else if (!pizza) {
      small.textContent =
         "¡Los sentimos! Esta pizza no se encuentra en el menú";
      box.innerHTML = "";
      localStorage.removeItem("pizza");
   } else {
      box.innerHTML = renderCard(pizza);
      saveLocalStorage(pizza);
      small.textContent = "";
   }
};

const renderPizza = () => {
   if (!pizza) return;
   box.innerHTML = renderCard(pizza);
};

const init = () => {
   document.addEventListener("DOMContentLoaded", renderPizza);
   btn.addEventListener("click", handleClick);
};

init();
