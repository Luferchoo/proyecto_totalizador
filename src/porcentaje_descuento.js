function porcentaje_descuento(cantidad, precio) {
    var descuento = 0;
    if(cantidad >= 1000){
        descuento = (precio*3)/100;
    }
    return descuento;
  }
  
  export default porcentaje_descuento;