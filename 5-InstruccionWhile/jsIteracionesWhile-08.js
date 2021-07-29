/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta == 'si') {

		numeroIngresado = prompt("Ingrese un número"); //pido el número
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < 0) { // determino si es positivo/negativo, hago el cálculo correspondiente
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		} else {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		
		contador++; // cuento cuántos números ingresé (para el promedio)

		respuesta = prompt("Ingrese 'si' para seguir, otra cosa para no cargar más números."); // verifico que el user quiera seguir cargando
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN