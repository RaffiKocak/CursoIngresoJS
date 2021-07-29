function mostrar()
{
    var planeta;
    var mensaje;

    var planeta = prompt("Ingrese un planeta. (nuestro planeta se llama simplemente 'Tierra')");
    planeta = planeta.toLowerCase();

    switch (planeta) {
        case "mercurio":
        case "venus":
            mensaje = "Acá hace más calor";
            break;
        
        case "tierra":
            mensaje = "Acá vivimos";
            break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "jupiter":
            mensaje = "Acá hace más frío";
            break;
        
        case "pluton":
            mensaje = "PLUTÓN NO ES UN PLANETA!! >:(";
            break;

        default:
            mensaje = "Planeta no válido";
            break;
    }

    alert (mensaje);    
}
