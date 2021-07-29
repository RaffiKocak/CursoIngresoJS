function mostrar()
{
	//tomo el mes
	var mesDelAnio = txtIdMes.value;
	var mensaje;

	switch(mesDelAnio) {
		case "Enero" : 
		mensaje = "Que comiences bien el año!!";
		break;

		case "Marzo" : 
		mensaje = "A clases!";
		break;

		case "Julio" : 
		mensaje = "Se vienen las vacaciones!";
		break;

		case "Diciembre" : 
		mensaje = "Felices fiestas!";
		break; 

		default : 
		mensaje = "En este mes no pasa nada."

	}

	/*if (mesDelAño == "Enero") {
		mensaje = "Que comiences bien el año!!";
	} else {
		if (mesDelAño == "Marzo") {
			mensaje = "A clases!";
		} else {
			if (mesDelAño == "Julio") {
				mensaje = "Se vienen las vacaciones!";
			} else {
				if (mesDelAño == "Diciembre") {
					mensaje = "Felices fiestas!";
				} else {
					mensaje = "Amigo no elegiste ninguno de los meses que decía la consigna."
				}
			}
		}
	}*/

	alert (mensaje);


}//FIN DE LA FUNCIÓN