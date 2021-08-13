/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
*/
function mostrar()
{
	//variables generales
	var tipoProducto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	//variables A
	var bandera = true;
	var jabonMasCaro;
	var cantJabonCaro;
	var fabJabonCaro;
	//variables B
	var acumulaBarbijo = 0;
	var acumulaJabon = 0;
	var acumulaAlcohol = 0;
	var comprasJabon = 0;
	var comprasAlcohol = 0;
	var comprasBarbijo = 0;
	var acumulaMax; 
	var cantidadMax;
	var mensaje;

	for (let i = 0; i < 5; i++) {
		alert("PRODUCTO Nª: " + (i+1));
		tipoProducto = prompt("Ingrese el producto a comprar (barbijo, jabón, alcohol)");
		tipoProducto = tipoProducto.toLowerCase();

		while (tipoProducto != "barbijo" && tipoProducto != "jabón" && tipoProducto != "alcohol") {
			tipoProducto = prompt ("El producto ingresado no es correcto, ingrese nuevamente por favor");
		}

		precio = prompt("Ingrese el precio del producto");
		precio = parseInt(precio);

		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = prompt("Precio inválido, intente nuevamente por favor");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese la cantidad de productos a comprar");
		cantidad = parseInt(cantidad);

		while (cantidad < 0 || cantidad > 1000 || isNaN(cantidad)) {
			cantidad = prompt("Cantidad inválida, intente nuevamente por favor");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("Ingrese la marca del producto");

		while (!isNaN(marca)) {
			marca = prompt("Marca inválida, ingrese nuevamente por favor");
		}

		fabricante = prompt("Ingrese el fabricante del producto");

		while (!isNaN(fabricante)) {
			fabricante = prompt("Fabricante inválido, ingrese nuevamente por favor");
		}

		switch (tipoProducto) {
			case "barbijo":
				//B
				acumulaBarbijo = acumulaBarbijo + cantidad;
				comprasBarbijo++;
				break;

			case "jabón":
				//A 
				if (bandera) {
					jabonMasCaro = precio;
					cantJabonCaro = cantidad;
					fabJabonCaro = fabricante;
					bandera = false;
				} else {
					if (precio > jabonMasCaro) {
						jabonMasCaro = precio;
						cantJabonCaro = cantidad;
						fabJabonCaro = fabricante;
					}
				}

				//B
				acumulaJabon = acumulaJabon + cantidad;
				comprasJabon++;
				break;

			default:
				//B
				acumulaAlcohol = acumulaAlcohol + cantidad;
				comprasAlcohol++;
				break;
		}



	} //FIN FOR

	//B
	if (acumulaBarbijo > acumulaJabon && acumulaBarbijo > acumulaAlcohol) {
		acumulaMax = acumulaBarbijo;
		cantidadMax = comprasBarbijo;
		mensaje = "BARBIJO";
	} else {
		if (acumulaJabon > acumulaAlcohol) {
			acumulaMax = acumulaJabon;
			cantidadMax = comprasJabon;
			mensaje = "JABÓN";
		} else {
			acumulaMax = acumulaAlcohol;
			cantidadMax = comprasAlcohol;
			mensaje = "ALCOHOL";
		}
	}

	promedio = acumulaMax / cantidadMax;

	document.write("Precio del jabón más caro: $" + jabonMasCaro + ", cantidad de unidades: " + cantJabonCaro + ", fabricante: " + fabJabonCaro + "<br>");
	document.write("El producto con más unidades es: " + mensaje + " y el promedio de esa compra es de: " + promedio + "<br>");
	document.write("Cantidad de barbijos comprados en total: " + acumulaBarbijo);
}
