/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") {

		sexoIngresado = prompt("Sexo no válido"); 

	}

	txtIdSexo.value = sexoIngresado; // <<< me faltó esto en el ej anterior y puse un "alert("todo ok");"

}//FIN DE LA FUNCIÓN