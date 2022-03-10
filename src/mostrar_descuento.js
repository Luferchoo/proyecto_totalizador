function mostrar_descuento(cantidad) {
    var descuento = 0;
    if(cantidad >= 30000){
        descuento = 15;
    }
    else if(cantidad >= 10000){
        descuento = 10;
    }
    else if(cantidad >= 7000){
        descuento = 7;
    }
    else if(cantidad >= 3000){
        descuento = 5;
    }
    else if(cantidad >= 1000){
        descuento = 3;
    }
    return descuento;
  }
  
  export default mostrar_descuento;