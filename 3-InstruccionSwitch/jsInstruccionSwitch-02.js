function mostrar()
{
	//tomo el mes
	var mesDelAnio = txtIdMes.value;
	var mensaje;

	switch(mesDelAnio) {
		case "Julio" :
		case "Agosto" :
		mensaje = "Abrigate que hace frío";
		break;

		case "Enero" :
		case "Febrero" :
		case "Abril" :
		case "Mayo" :
		case "Junio" :	 
		mensaje = "Falta para el invierno";
		break;

		/*case "Septiembre" :
		case "Octubre" :
		case "Noviembre" :
		case "Diciembre" : 
		mensaje = "Ya pasamos el frío, ahora el calor!!";
		break;*/

		default : 
		mensaje = "Ya pasamos el frío, ahora el calor!!"
		break;
	}

	alert (mensaje);

}//FIN DE LA FUNCIÓN