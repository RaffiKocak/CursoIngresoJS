/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var mensaje;
var textoMaquina;

function comenzar()
{
	eleccionMaquina = Math.random() * 4;
    eleccionMaquina = Math.floor(eleccionMaquina);
    if (eleccionMaquina < 1) {
        eleccionMaquina +1;
    }


}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina == 1){
        mensaje = "Empate.";
        textoMaquina = "La maquina eligió piedra."
    } else if (eleccionMaquina == 2) {
        mensaje = "Perdiste!"
        textoMaquina = "La maquina eligió papel."
    } else {
        mensaje = "Ganaste!"
        textoMaquina = "La maquina eligió tijera."
    }

    alert(mensaje + " " + textoMaquina);

}//FIN DE LA FUNCIÓN
function papel()
{
    if(eleccionMaquina == 2){
        mensaje = "Empate.";
        textoMaquina = "La maquina eligió papel."
    } else if (eleccionMaquina == 3) {
        mensaje = "Perdiste!"
        textoMaquina = "La maquina eligió tijera."
    } else {
        mensaje = "Ganaste!"
        textoMaquina = "La maquina eligió piedra."
    }

    alert(mensaje + " " + textoMaquina);

}//FIN DE LA FUNCIÓN
function tijera()
{
    if(eleccionMaquina == 3){
        mensaje = "Empate.";
        textoMaquina = "La maquina eligió tijera."
    } else if (eleccionMaquina == 1) {
        mensaje = "Perdiste!"
        textoMaquina = "La maquina eligió piedra."
    } else {
        mensaje = "Ganaste!"
        textoMaquina = "La maquina eligió papel."
    }

    alert(mensaje + " " + textoMaquina);

}//FIN DE LA FUNCIÓN