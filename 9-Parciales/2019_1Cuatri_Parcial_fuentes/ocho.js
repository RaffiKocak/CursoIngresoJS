function mostrar()
{
    var letraIngresada;
    var numeroIngresado;
    var parOImpar;
    var cantPares = 0;
    var cantImpares = 0;
    var cantCeros = 0;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaxima;
    var letraMinima;
    var promedioPositivos = 0;
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var cantPositivos = 0;
    var banderaPrimero = true;

    var continuar = true;

    while (continuar) {
        letraIngresada = prompt("Ingrese una letra");

        while (!isNaN(letraIngresada) || letraIngresada.length > 1) {
            letraIngresada = prompt("ERROR! Entrada inválida. Ingrese otra letra por favor.");
        }

        numeroIngresado = prompt("Ingrese un número");
        numeroIngresado = parseInt(numeroIngresado);

        while (numeroIngresado < -100 || numeroIngresado > 100) {
            numeroIngresado = prompt("ERROR! Número inválido, por favor ingrese otro");
            numeroIngresado = parseInt(numeroIngresado);
        }

        // Verificación máximo/mínimo
        if (banderaPrimero) {
            numeroMaximo = numeroIngresado;
            numeroMinimo = numeroIngresado;
            letraMaxima = letraIngresada;
            letraMinima = letraIngresada;
            banderaPrimero = false;
        } else {
            if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
                letraMaxima = letraIngresada;
			} else {
				if (numeroIngresado < numeroMinimo) {
					numeroMinimo = numeroIngresado;
                    letraMinima = letraIngresada;
				}
			}  
        }

        parOImpar = numeroIngresado % 2;
        // No sabría cómo hacer para que esto "esté adentro" de otro if/else. Está "a la misma altura" que el if que pregunta si es máximo/mínimo
        // Verificación positivo/negativo/cero
        if (numeroIngresado > 0) { // NUMEROS POSITIVOS
                
            sumaPositivos = sumaPositivos + numeroIngresado;

            cantPositivos++;

            if (parOImpar == 0) {
                cantPares++;
            } else {
                cantImpares++;
            }
        } else {
            if (numeroIngresado < 0) { // NUMEROS NEGATIVOS
                sumaNegativos = sumaNegativos + numeroIngresado;

                if (parOImpar == 0) {
                    cantPares++;
                } else {
                    cantImpares++;
                }

            } else { // CERO
                cantCeros++;
            }
        }

        continuar = confirm("Desea continuar?");
    }


    promedioPositivos = sumaPositivos / cantPositivos;

    document.write("a) Números pares: " + cantPares + "<br>");
    document.write("b) Números impares: " + cantImpares + "<br>");
    document.write("c) Cantidad ceros: " + cantCeros + "<br>");
    document.write("d) Promedio de números positivos: " + promedioPositivos + "<br>");
    document.write("e) La suma de los números negativos: " + sumaNegativos + "<br>");
    document.write("f) MAX Número y Letra: " + numeroMaximo + " " +  letraMaxima + 
                "<br> MIN Número y Letra: " + numeroMinimo + " " + letraMinima );
}
