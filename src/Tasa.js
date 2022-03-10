function tasaImpu(estado) {
    var impuesto=0;
    if (estado == "Utah"){
      impuesto = 6.65;
    }
    if (estado == "Nevada"){
      impuesto = 8.00;
    }  
    if (estado == "Texas"){
      impuesto = 6.25;
    }    
    if (estado == "Alabama"){
      impuesto = 4.00;
    } 
    if (estado == "California"){
      impuesto = 8.25;
    }            
    return impuesto;
  }
  
  export default tasaImpu;