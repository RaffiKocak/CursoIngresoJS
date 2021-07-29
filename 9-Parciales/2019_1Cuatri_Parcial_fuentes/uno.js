
function mostrar()
{
    var lado;
    var perimetro;

    lado = prompt("Introduzca un lado");
    lado = parseInt(lado);

    perimetro = lado * 3;

    alert("El perímetro de un triángulo equilátero con un lado de " + lado + " es " + perimetro);
}
