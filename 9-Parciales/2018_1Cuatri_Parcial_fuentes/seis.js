function mostrar()
{
    var horaIngresada;
    var mensaje;
    var mensaje2;
    
    horaIngresada = laHora.value;
    horaIngresada = parseInt(horaIngresada);

    mensaje2 = "";

    switch (horaIngresada){
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            mensaje = "Es de mañana";
            break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            mensaje = "Es de tarde";
            break;

        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es de noche";

            if (horaIngresada < 24) {
                mensaje2 = "A dormir";
            }
            break;



        default:
            mensaje = "Hora no válida";
            break;
    }

    alert (mensaje + ". " + mensaje2);
}
