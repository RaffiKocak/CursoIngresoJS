/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	numeroSecreto = Math.random() * 101;
	numeroSecreto = Math.floor(numeroSecreto);
   
	contadorIntentos = 1;
   
	if (numeroSecreto < 1) {
		numeroSecreto + 1;
	}
	

}

function verificar()
{
	numeroIngresado = txtIdNumero.value;
	numeroIngresado = parseInt(numeroIngresado);

	if (numeroIngresado == numeroSecreto) {
		// Si adivina el número
		if (contadorIntentos > 9) {
			mensaje = "Afortunado en el amor!!"
		} else {
			if (contadorIntentos > 5 && contadorIntentos < 10) {
				mensaje = "Falta técnica."
			} else {
				if (contadorIntentos == 5) {
					mensaje = "Usted está en la media.";
				} else {
					if (contadorIntentos == 4) {
						mensaje = "Excelente técnica";
					} else {
						if (contadorIntentos == 3) {
							mensaje = "Esto es suerte.";
						} else {
							if (contadorIntentos == 2) {
								mensaje = "Excelente percepción.";
							} else {
								if(contadorIntentos == 1) {
									mensaje = "Usted es un psíquico.";
								}
							}
						}
					}
				} 
			}
		}

	} else {
		// Si no adivina el número
		contadorIntentos++;
		if(numeroIngresado < numeroSecreto) {
			mensaje = "Falta...";
		  } else {
			mensaje = "Se pasó...";
		  }
	} 

	alert(mensaje);

	txtIdIntentos.value = contadorIntentos;
}


		/*if(contadorIntentos == 1) {
			mensaje = "Usted es un psíquico.";
		} else {
			if (contadorIntentos == 2) {
				mensaje = "Excelente percepción.";
			} else {
				if (contadorIntentos == 3) {
					mensaje = "Esto es suerte.";
				} else {
					if (contadorIntentos == 4) {
						mensaje = "Excelente técnica";
					} else {
						if (contadorIntentos == 5) {
							mensaje = "Usted está en la media.";
						} else {
							if (contadorIntentos > 5 && contadorIntentos < 10){
								mensaje = "Falta técnica."
							} else {
								if (contadorIntentos > 9){
									mensaje = "Afortunado en el amor!!"
								}
							}
						}
					}
				} 
			}
		}*/ 