import tasaImpu from './Tasa';
import precio_neto from './precio_neto';

const items = document.querySelector("#items-numero");
const precio = document.querySelector("#precio-numero");
const estado = document.querySelector("#estados");


const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const items_numero = Number.parseInt(items.value);
  const precio_numero = Number.parseFloat(precio.value);
  const estado_string = estado.value;
  div.innerHTML = "<p>" + "Cantidad de items:      " + items_numero + 
  "<br/>Precio por Item:       " + precio_numero + 
  "<br/>Estado:       " + estado_string + 
  "<br/>Impuesto:       " + tasaImpu(estado_string) + 
  "<br/>Precio Neto:       " + precio_neto(items_numero,precio_numero) +"</p>";
});

