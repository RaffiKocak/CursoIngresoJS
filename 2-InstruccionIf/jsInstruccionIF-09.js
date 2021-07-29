/**
 * Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.random(); // genero un número aleatorio entre 0 y 1
	numeroRandom = numeroRandom * 20;
	numeroRandom = Math.floor(numeroRandom); // redondeo ese número multiplicado para que no muestre la parte fraccionaria

	if(numeroRandom > 0 && numeroRandom < 11) {

		alert(numeroRandom);

	}

}//FIN DE LA FUNCIÓN