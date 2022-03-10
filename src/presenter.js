import tasaImpu from './Tasa';
import precio_neto from './precio_neto';
import impuesto_total_ca from './impuesto_total_ca';
import porcentaje_descuento from './porcentaje_descuento';
import precio_total from './precio_total';
import mostrar_descuento from './mostrar_descuento';

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
  const impuesto = tasaImpu(estado_string);
  const precio_net = precio_neto(items_numero,precio_numero);
  const impuesto_total = impuesto_total_ca(precio_net,impuesto);
  const porcentaje_desc = mostrar_descuento(items_numero);
  const descuento = porcentaje_descuento(items_numero,precio_net);
  const precio_tot= precio_total(precio_net,impuesto_total,descuento);

  div.innerHTML = "<p>" + "Cantidad de items:      " + items_numero + 
  "<br/>Precio por Item:       " + precio_numero + " $" +
  "<br/>Estado:       " + estado_string + 
  "<br/>Impuesto:       " + impuesto + " %" +
  "<br/>Precio Neto:       " + precio_net + " $" +
  "<br/>Impuesto Total:       " + impuesto_total + " $" +
  "<br/>Descuento:       " + porcentaje_desc + " %" +
  "<br/>Descuento Total:       " + descuento + " $" +
  "<br/>Precio Total:       " + precio_tot + " $" +"</p>";
  
});

