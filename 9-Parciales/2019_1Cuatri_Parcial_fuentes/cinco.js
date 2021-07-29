function mostrar()
{
    var continente;
    var cantDias;
    var metodoPago;
    var precio;

    continente = Marca.value;

    cantDias = prompt("Ingrese la cantidad de días de visita");
    cantDias = parseInt(cantDias);

    metodoPago = prompt("Ingrese el número correspondiente a su método de pago: \n1- Efectivo\n2- Tarj. Débito\n3- Tarj. Crédito\n4- Mercado Pago");

    precio = cantDias * 100;

    if (continente == "Asia" || continente == "Oceania") {

        precio = precio + precio * (20/100); // aplico un 20% de recargo por no elegir Europa/África/América

    } else {

        if (continente == "América") {
            precio = precio - (precio * 50/100); // aplico un 50% de descuento por elegir América

            if (metodoPago == "2") {
                precio = precio - (precio * 10/100); // aplico un 10% de descuento (sobre ese 50% ya aplicado) por pagar con débito
            }
        } else {

            if (continente == "África") {
                precio = precio - (precio * 60/100); // aplico un 60% de descuento por elegir África

                if (metodoPago == "1" || metodoPago == "4") {
                    precio = precio - (precio * 15/100); // aplico un 15% de descuento (sobre ese 60% ya aplicado) por pagar en efectivo o con Mercado Pago
                }

            } else {

                if (continente == "Europa") {
                    precio = precio - (precio * 20/100); // aplico un 20% de descuento por elegir Europa

                    if (metodoPago == "2") {
                        precio = precio - (precio * 15/100); // aplico un 15% de descuento (sobre ese 60% ya aplicado) por pagar con débito
                        
                    } else {
                        if (metodoPago == "4") {
                            precio = precio - (precio * 10/100); // aplico un 10% de descuento (sobre ese 60% ya aplicado) por pagar con Mercado Pago
                        } else {
                            precio = precio - (precio * 5/100); // aplico un 10% de descuento (sobre ese 60% ya aplicado) por no usar débito o Mercado Pago
                        }
                    }
                }
            }
        }
    }
        alert("El viaje a " + continente + " por " + cantDias + " días costará $" + precio);
}

    
    

