/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=true; 
	respuesta = true;

	while(respuesta == true) {

		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == true) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		} else {
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			} else {
				if (numeroIngresado < numeroMinimo) {
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta = confirm("desea continuar?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
	
}//FIN DE LA FUNCIÓN