/**
 * Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
 */
function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.random(); // genero un número aleatorio entre 0 y 1
	numeroRandom = numeroRandom * 11;
	numeroRandom = Math.floor(numeroRandom); // redondeo ese número multiplicado para que no muestre la parte fraccionaria

	if(numeroRandom < 1) {
		numeroRandom + 1;
	}

	alert(numeroRandom);

	/*if (numeroRandom < 4) {
		alert("Vamos, la proxima se puede");
	} else if (numeroRandom > 3 && numeroRandom < 9) {
		alert("APROBÓ");
	} else {
		alert("EXCELENTE");
	}*/

	if (numeroRandom < 4) {
		alert("Vamos, la proxima se puede");
	} else {
		if(numeroRandom > 9) {
			alert("EXCELENTE");
		} else {
			alert("APROBÓ");
		}
	}

}//FIN DE LA FUNCIÓN