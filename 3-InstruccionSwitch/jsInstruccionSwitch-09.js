function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioBase; // estadía
	var porcentaje;
	var precioFinal;

	precioBase = 15000;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado){
				case "Bariloche":
					porcentaje = 20;
					break;
				
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;

				default:
					porcentaje = -20;
					break;
			}

			break; // sin estos break pasa a los case que siguen de cada estación
		
		case "Verano":
			switch (destinoIngresado){
				case "Bariloche":
					porcentaje = -20;
					break;
				
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				
				default:
					porcentaje = 20;
					break;
			}

			break;
		

			default:
			switch (destinoIngresado){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					break;

				default: 
					porcentaje = 0;
					break;
				
			}

			break;
	}

	precioFinal = precioBase + precioBase * porcentaje/100;

	alert(precioFinal);


}//FIN DE LA FUNCIÓN