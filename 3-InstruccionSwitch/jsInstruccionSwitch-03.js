function mostrar()
{
	//tomo el mes
	var mesDelAnio =txtIdMes.value;
	var mensaje;
	
	switch (mesDelAnio) {
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		
		default:
			mensaje = "Este mes tiene 30 días o más."
			break; 
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN