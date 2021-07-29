function mostrar()
{
	//tomo el mes
	var mesDelAnio =txtIdMes.value;
	var mensaje;
	
	switch (mesDelAnio) {
		case "Enero" :
		case "Marzo" : 
		case "Mayo" : 
		case "Julio" :
		case "Agosto" :
		case "Octubre" : 
		case "Diciembre" :
			mensaje = "Este mes tiene 31 días";
			break;

		case "Febrero" :
			mensaje = "Este mes tiene 28 días";
			break;

		default : 
			mensaje = "Este mes tiene 30 días";
			break;
	}
	

	alert(mensaje);

}//FIN DE LA FUNCIÓN