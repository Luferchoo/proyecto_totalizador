function porcentaje_descuento(cantidad, precio) {
    var descuento = 0;
    if(cantidad >= 30000){
        descuento = (precio*15)/100;
    }
    else if(cantidad >= 10000){
        descuento = (precio*10)/100;
    }
    else if(cantidad >= 7000){
        descuento = (precio*7)/100;
    }
    else if(cantidad >= 3000){
        descuento = (precio*5)/100;
    }
    else if(cantidad >= 1000){
        descuento = (precio*3)/100;
    }
    return descuento;
  }
  
  export default porcentaje_descuento;