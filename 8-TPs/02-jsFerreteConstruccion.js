/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

    var largo;
    var ancho;
    var radio;

function Rectangulo () 
{
    largo = txtIdLargo.value;
    largo = parseInt(largo);
    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    var perimetroRectangulo = largo * 2 + ancho * 2;
    var compraAlambre = perimetroRectangulo * 3; 

    alert("Se deben comprar " + compraAlambre + "m de alambre para este terreno de " + largo + "m x " + ancho + "m.");

}
function Circulo () 
{
	radio = txtIdRadio.value;
    radio = parseInt(radio);

    var perimetroCirculo = 2 * Math.PI * radio;
    perimetroCirculo = Math.round(perimetroCirculo);

    var compraAlambre = perimetroCirculo * 3; 

    alert("Se deben comprar " + compraAlambre + "m de alambre para este terreno de " + radio + "m de radio.")
}
function Materiales () 
{
    largo = txtIdLargo.value;
    largo = parseInt(largo);
    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    var areaRectangulo = largo * ancho;
    
    var bolsasCemento = areaRectangulo * 2; 
    var bolsasCal = areaRectangulo * 3; 

    alert("Se deben comprar " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal para un contrapiso de " + areaRectangulo + " metros cuadrados.");

}