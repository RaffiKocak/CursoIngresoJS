/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*var importe;
	var descuento;
	var importeDescontado;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	descuento = importe * 0.25;
	importeDescontado = importe - descuento;

	txtIdResultado.value = importeDescontado;*/

	// 10 BIS
	var importe;
	var descuento;
	var importeADescontar;
	var importeDescontado;
	 

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	descuento = prompt("Ingrese porcentaje a descontar");
	descuento = parseInt(descuento);
	descuento = descuento / 100;

	importeADescontar = importe * descuento;

	importeDescontado = importe - importeADescontar;

	txtIdResultado.value = importeDescontado;

}
