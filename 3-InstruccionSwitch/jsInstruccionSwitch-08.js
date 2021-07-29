function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			mensaje = "FRIO";
			break;

		default:
			mensaje = "CALOR";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN