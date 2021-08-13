function mostrar()
{
    var producto;
    var cantidad;
    var precioBolsa;
    var precio;
    var precioDescuento;
    var mensaje;
    var mensajePrecio;
    var continuar = true;
    var acumuladorBolsas = 0;
    var acumuladorPrecio = 0;
    var acumuladorArena = 0;
    var acumuladorCal = 0;
    var acumuladorCemento = 0;
    var acumuladorPrecioArena = 0;
    var acumuladorPrecioCal = 0;
    var acumuladorPrecioCemento = 0;


    while (continuar == true) {
      producto = prompt("Ingrese producto a comprar (arena/cal/cemento)");
      producto = producto.toLowerCase();

      while (producto != "arena" && producto != "cal" && producto != "cemento"){
          producto = prompt("ERROR! Inválido. Ingrese producto a comprar (arena/cal/cemento)");
          producto = producto.toLowerCase();
      }

      cantidad = prompt("Ingrese la cantidad de bolsas a comprar");
      cantidad = parseInt(cantidad);

      while (isNaN(cantidad) || cantidad < 1) {
        cantidad = prompt("ERROR! Inválido. Ingrese la cantidad de bolsas a comprar");
      cantidad = parseInt(cantidad);
      }

      precioBolsa = prompt("Ingrese el precio por bolsa del producto");
      precioBolsa = parseInt(precioBolsa);

      while (isNaN(precioBolsa) || precioBolsa < 1) {
        precioBolsa = prompt("ERROR! Inválido. Ingrese el precio por bolsa del producto");
        precioBolsa = parseInt(precioBolsa);
      }

      precio = precioBolsa * cantidad;

      
      switch (producto) {
        case "arena":
          acumuladorArena = acumuladorArena + cantidad;
          acumuladorPrecioArena = acumuladorPrecioArena + precio;
          break;
        
        case "cal":
          acumuladorCal = acumuladorCal + cantidad;
          acumuladorPrecioCal = acumuladorPrecioCal + precio;
          break;

        default:
          acumuladorCemento = acumuladorCemento + cantidad;
          acumuladorPrecioCemento = acumuladorPrecioCemento + precio;
          break;
      }

      continuar = confirm("Desea realizar otra compra?");

    } // FIN WHILE

    acumuladorBolsas = acumuladorArena + acumuladorCal + acumuladorCemento;
    acumuladorPrecio = acumuladorPrecioCemento + acumuladorPrecioCal + acumuladorPrecioArena;

    if (acumuladorBolsas > 10 && acumuladorBolsas < 30) {
      precioDescuento = acumuladorPrecio - acumuladorPrecio * 15/100;
    } else {
      if (acumuladorBolsas > 30) {
        precioDescuento = acumuladorPrecio - acumuladorPrecio * 30/100;
      } else {
        precioDescuento = "NO CORRESPONDE";
      }
    }

    if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) {
      mensaje = "ARENA";
    } else {
      if (acumuladorCal > acumuladorCemento) {
        mensaje = "CAL";
      } else {
        mensaje = "CEMENTO";
      }
    }

    if (acumuladorPrecioArena > acumuladorPrecioCal && acumuladorPrecioArena > acumuladorPrecioCemento) {
      mensajePrecio = "ARENA";
    } else {
      if (acumuladorPrecioCal > acumuladorPrecioCemento) {
        mensajePrecio = "CAL";
      } else {
        mensajePrecio = "CEMENTO";
      }
    }


    document.write ("El importe bruto a pagar es: " + acumuladorPrecio + "<br>");
    document.write ("El importe a pagar con descuento es: " + precioDescuento + "<br>");
    document.write ("El tipo " + mensaje + " fue el que más cantidad de bolsas compradas tuvo. <br>");
    document.write ("El tipo más caro es: " + mensajePrecio);

}
