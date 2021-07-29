function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt("Introduzca el precio");
    precio = parseInt(precio);

    descuento = prompt("Introduzca el porcentaje a descontar");
    descuento = parseInt(descuento);
    descuento = descuento / 100;

    precioFinal = precio - precio*descuento;

    elPrecioFinal.value = precioFinal;
}
