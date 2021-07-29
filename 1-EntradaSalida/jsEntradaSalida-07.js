/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	var numeroUno;  
	var numeroDos;

function sumar()
{	
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	alert(numeroUno+numeroDos);	
}

function restar()
{
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	alert(numeroUno-numeroDos);	
}

function multiplicar()
{ 
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	alert(numeroUno*numeroDos);	
}

function dividir()
{
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	alert(numeroUno/numeroDos);	
}

