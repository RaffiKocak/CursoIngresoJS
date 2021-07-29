/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;
var sumaPrecios;

function Sumar () 
{
	precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);
    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);
    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    sumaPrecios = precioUno + precioDos + precioTres;

    alert("La suma de los precios es: " + sumaPrecios);
}
function Promedio () 
{
	precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);
    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);
    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    sumaPrecios = precioUno + precioDos + precioTres;

    var promedio = sumaPrecios / 3;
    
    alert("El promedio de los precios es: " + promedio);
}
function PrecioFinal () 
{
	precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);
    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);
    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    sumaPrecios = precioUno + precioDos + precioTres;
    
    var precioFinal = sumaPrecios * 1.21;

    alert("El precio final es: " + precioFinal);

}