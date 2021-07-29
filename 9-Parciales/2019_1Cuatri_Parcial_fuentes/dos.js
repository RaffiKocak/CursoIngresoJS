function mostrar()
{
  var nombreUno;
  var nombreDos;
  var pesoUno;
  var pesoDos;
  var suma;
  var promedio;
  var mensajeUno;
  var mensajeDos;
  var mensajeTres;

  nombreUno = prompt("Introduzca el primer nombre de la pareja");
  nombreDos = prompt("Introduzca el segundo nombre de la pareja");
  pesoUno = prompt("Introduzca el primer peso de la pareja");
  pesoUno = parseInt(pesoUno);
  pesoDos = prompt("Introduzca el segundo peso de la pareja");
  pesoDos = parseInt(pesoDos);

  mensajeUno = "Ustedes se llaman ";
  mensajeDos = " kilos, que sumados son ";
  mensajeTres = " kilos y el promedio de peso ";


  suma = pesoUno + pesoDos;
  promedio = suma / 2;

  alert(mensajeUno + nombreUno + " y " + nombreDos + " y pesan " + pesoUno + " y " + pesoDos + mensajeDos + suma + mensajeTres + promedio + " kilos");
}
