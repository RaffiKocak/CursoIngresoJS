/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var cantPositivos=0;
	var cantNegativos=0;
	var diferenciaPosNeg=0;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantCeros=0;
	var cantPares=0;
	var chequeoPar;
	

	respuesta=true;


	while(respuesta)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		chequeoPar = numeroIngresado % 2;

		if (numeroIngresado > 0) { // caso numero positivo
			cantPositivos++; 
			
			sumaPositivos = sumaPositivos + numeroIngresado; 

			if ( chequeoPar == 0 ) {
				cantPares++;
			}
		} else {
			if (numeroIngresado < 0) {
				cantNegativos++;

				sumaNegativos = sumaNegativos + numeroIngresado;

				if ( chequeoPar == -0  ) {
					cantPares++;
				}
			} else {
				cantCeros++;
				cantPares++; 
			}
		}
		
		respuesta=confirm("desea continuar?");
	}//fin del while

	promedioPositivos = sumaPositivos / cantPositivos;
	promedioNegativos = sumaNegativos / cantNegativos;

	diferenciaPosNeg = cantPositivos - cantNegativos; 

	document.write("1- la suma de negativos es: "+sumaNegativos + "<br>");
	document.write("2- la suma de positivos es: "+sumaPositivos + "<br>");
	document.write("3- la cantidad de positivos es: "+cantPositivos + "<br>");
	document.write("4- la cantidad de negativos es: "+cantNegativos + "<br>");
	document.write("5- la cantidad de ceros es: "+cantCeros + "<br>");
	document.write("6- la cantidad de números pares es: "+cantPares + "<br>");
	document.write("7- el promedio de positivos es: "+promedioPositivos + "<br>");
	document.write("8- el promedio de negativos es: "+promedioNegativos + "<br>");
	document.write("9- la diferencia entre positivos y negativos es: "+diferenciaPosNeg + "<br>");
}//FIN DE LA FUNCIÓN