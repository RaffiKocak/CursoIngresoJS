function mostrar()
{
    var altura;
    var totalAlturas = 0;
    var promedioAlturas = 0;
    var sexo;
    var sexoMinimo;
    var contador = 0;
    var contadorMujeres = 0;
    var alturaMinima;
    var primerBandera = true;

    while (contador < 5) {

        altura = prompt("ingrese una altura el cm");
        altura = parseInt(altura);

        while (altura < 0 || altura > 250 || isNaN(altura) || altura == null) { // validacion altura
            altura = prompt("ERROR! Ingrese una altura válida");
            altura = parseInt(altura);
        }

        sexo = prompt("Ingrese sexo F/M");
        sexo = sexo.toLowerCase();

        while (sexo != "f" && sexo !="m") { // validacion sexo
            sexo = prompt("ERROR! Sexo no válido. Ingrese nuevamente por favor");
            sexo = sexo.toLowerCase();
        }

        if (primerBandera) {
            alturaMinima = altura;
            primerBandera = false;
        } else {
            if (altura < alturaMinima) {
                alturaMinima = altura;
                sexoMinimo = sexo;
                sexoMinimo = sexoMinimo.toUpperCase();
            } else {
                if (sexo == "f" && altura > 190) {
                    contadorMujeres++;
                }
            }
        }     

        totalAlturas = totalAlturas + altura;

        contador = contador + 1;
    }

    promedioAlturas = totalAlturas / 5;

    alert ("El promedio de las alturas es " + promedioAlturas);
    alert ("La altura más baja es " + alturaMinima + " y el sexo de esa persona es " + sexoMinimo);
    alert ("Hay " + contadorMujeres + " mujeres que miden más de 190 cm");

}
