function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;
    var resta;

    numeroUno = prompt("Introduzca el primer número");
    numeroUno = parseInt(numeroUno);
    numeroDos = prompt("Introduzca el segundo número");
    numeroDos = parseInt(numeroDos);

    suma = numeroDos + numeroUno;
    resta = numeroUno - numeroDos;

    if(numeroUno == numeroDos){
        alert(numeroUno + "" + numeroDos);
    } else {
        if(numeroUno > numeroDos) {
            if(resta > 10) {
                alert("La resta es " + resta + " y superó el 10");
            } else {
                alert(resta);
            }
        } else {
            alert(suma);
        }
    }
}
