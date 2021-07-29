function mostrar()
{
    var nombrePais;
    var cantHabitantes;
    var sumaHabitantes = 0;
    var promedioHabitantes;
    var paisMinHabitantes;
    var minHabitantes;
    var tempIngresada;
    var parOImpar;
    var tempPares = 0;
    var tempMinima;
    var paisMinTemp;
    var cantPaisesCalor = 0;
    var contador = 0;
    var banderaHab = true;
    var banderaTemp = true;
    var continuar = true;

    while (continuar) {
        nombrePais = prompt("Ingrese el nombre de un país");

        cantHabitantes = prompt("Ingrese la cantidad de habitantes por millón de ese país");
        cantHabitantes = parseInt(cantHabitantes);

        while (cantHabitantes < 1 || cantHabitantes > 7000 || isNaN(cantHabitantes)) {
            cantHabitantes = prompt("ERROR! Dato no válido, intente nuevamente por favor");
            cantHabitantes = parseInt(cantHabitantes);
        }

        tempIngresada = prompt("Ingrese la temperatura mínima registrada en ese país");
        tempIngresada = parseInt(tempIngresada);

        while (tempIngresada < -50 || tempIngresada> 50 || isNaN(tempIngresada)) {
            tempIngresada = prompt("ERROR! Dato no válido, intente nuevamente por favor");
            tempIngresada = parseInt(tempIngresada);
        }

        sumaHabitantes = sumaHabitantes + cantHabitantes;

        parOImpar = tempIngresada % 2;

        if (parOImpar == 0) {
            tempPares++;
        }

        if (banderaHab) {
            minHabitantes = cantHabitantes;
            paisMinHabitantes = nombrePais;
            banderaHab = false;
        } else {
            if (cantHabitantes < minHabitantes) {
                minHabitantes = cantHabitantes;
                paisMinHabitantes = nombrePais;
            }
        }

        if (banderaTemp) {
            tempMinima = tempIngresada;
            paisMinTemp = nombrePais;
            banderaTemp = false;
        } else {
            if (tempIngresada < tempMinima) {
                tempMinima = tempIngresada;
                paisMinTemp = nombrePais;
            }
        }

        // Podría ir dentro del if/else de la linea 53 pero igual habría que analizar todos los casos (Puede haber temp. +40 al primer intento, etc)
        if (tempIngresada > 40) {
            cantPaisesCalor++;
        }


        contador++;

        continuar = confirm("Desea ingresar datos de otro país?");
    }

    promedioHabitantes = sumaHabitantes / contador;

    document.write ("a) Cantidad de temperaturas pares: " + tempPares + "<br>");
    document.write ("b) País con menos habitantes: " + paisMinHabitantes + "<br>");
    document.write ("c) Cantidad de países que superan 40ºC: " + cantPaisesCalor + "<br>");
    document.write ("d) Promedio de habitantes entre todos los países: " + promedioHabitantes + "<br>");
    document.write ("a) La temperatura minima ingresada es: " + tempMinima + " y se registró en: " + paisMinTemp);

}
