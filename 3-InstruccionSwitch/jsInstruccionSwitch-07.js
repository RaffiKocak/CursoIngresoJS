function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado){
		case "Bariloche":
			mensaje = "Oeste";
			break;
		
		case "Cataratas":
			mensaje = "Norte";
			break;
		
		case "Mar del plata":
			mensaje = "Este";
			break;

		default:
			mensaje = "Sur";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN