/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*var sueldo;
	var aumento;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	aumento = sueldo * 1.10;

	txtIdResultado.value = aumento;*/

	// 9 BIS
	var sueldo;
	var aumento;
	var sueldoAAumentar;
	var sueldoAumentado;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	aumento = prompt("Ingrese un porcentaje a aumentar");
	aumento = parseInt(aumento);
	
	//sueldoAAumentar = aumento * sueldo / 100;
	sueldoAAumentar = "1." + aumento;
	sueldoAAumentar = parseFloat(sueldoAAumentar); 
	// Se me ocurrió esto primero con ParseInt, después corregí. Me quedó dando vueltas en la cabeza no poder resolverlo sin regla de 3.

	sueldoAumentado = sueldo * sueldoAAumentar;
	
	txtIdResultado.value = sueldoAumentado;
}
