/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantLamparas;
    var marcaSeleccionada;
    var precio;
    var porcentaje;
    var iibb;

    cantLamparas = txtIdCantidad.value;
    cantLamparas = parseInt(cantLamparas);

    marcaSeleccionada = Marca.value;

    precio = cantLamparas * 35;

    // switch + if variable 2 más complicada
    switch (marcaSeleccionada) {
        case "ArgentinaLuz":
           if (cantLamparas > 6) {
                iibb = precio * (10 / 100);
                alert("IIBB usted pagó: " + iibb);
                porcentaje = 10;
           } else {
                if (cantLamparas == 6) {
                    porcentaje = -50;
                } else {
                    if (cantLamparas == 5) {
                        porcentaje = -40;
                    } else {
                        if (cantLamparas == 4) {
                            porcentaje = -25;
                        } else {
                            if (cantLamparas == 3) {
                                porcentaje = -15;
                            } else {
                                porcentaje = 0;
                            }
                        }
                    }   
                }
            }    
                    
            break;

        case "FelipeLamparas":
            if (cantLamparas > 6) {
                iibb = precio * (10 / 100);
                alert("IIBB usted pagó: " + iibb);
                porcentaje = 10;
            } else {
                if (cantLamparas == 6) {
                    porcentaje = -50;
                } else {
                    if (cantLamparas == 5) {
                        porcentaje = -30;
                    } else {
                        if (cantLamparas == 4) {
                            porcentaje = -25;
                        } else {
                            if (cantLamparas == 3) {
                                porcentaje = -10;
                            } else {
                                porcentaje = 0;
                            }
                        }
                    }
                }
            }

            break;
        
        case "JeLuz":
            if (cantLamparas > 6) {
                iibb = precio * (10 / 100);
                alert("IIBB usted pagó: " + iibb);
                porcentaje = 10;
            } else {
                if (cantLamparas == 6) {
                    porcentaje = -50;
                } else {
                    if (cantLamparas == 5) {
                        porcentaje = -30;
                    } else {
                        if (cantLamparas == 4) {
                            porcentaje = -20;
                        } else {
                            if (cantLamparas == 3) {
                                porcentaje = -5;
                            } else {
                                porcentaje = 0;
                            }
                        }
                    }
                }
            }

            break;

        case "HazIlumunacion":
            if (cantLamparas > 6) {
                iibb = precio * (10 / 100);
                alert("IIBB usted pagó: " + iibb);
                porcentaje = 10;
           } else {
                if (cantLamparas == 6) {
                    porcentaje = -50;
                } else {
                    if (cantLamparas == 5) {
                        porcentaje = -30;
                    } else {
                        if (cantLamparas == 4) {
                            porcentaje = -20;
                        } else {
                            if (cantLamparas == 3) {
                                porcentaje = -5;
                            } else {
                                porcentaje = 0;
                            }
                        }
                    }
                }
            }

            break;

        default:
            if (cantLamparas > 6) {
                iibb = precio * (10 / 100);
                alert("IIBB usted pagó: " + iibb);
                porcentaje = 10;
            } else {
                if (cantLamparas == 6) {
                    porcentaje = -50;
                } else {
                    if (cantLamparas == 5) {
                        porcentaje = -30;
                    } else {
                        if (cantLamparas == 4) {
                            porcentaje = -20;
                        } else {
                            if (cantLamparas == 3) {
                                porcentaje = -5;
                            } else {
                                porcentaje = 0;
                            }
                        }
                    }
                }
            }

            break;

    }

    precio = precio + (precio * porcentaje / 100);

    txtIdprecioDescuento.value = precio;

    // ejercicio con switch e if caso 1
    /*
    switch (cantLamparas) {
        case 6:
            porcentaje = -50;
            break;

        case 5:
            if (marcaSeleccionada == "ArgentinaLuz") {
                porcentaje = -40;
            } else {
                porcentaje = -30;
            }

            break;

        case 4:

            if (marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas") {
                porcentaje = -25;
            } else {
                porcentaje =-20;
            }

            break;
        
        case 3:

            if (marcaSeleccionada == "ArgentinaLuz") {
                porcentaje = -15;
            } else if (marcaSeleccionada == "FelipeLamparas") {
                porcentaje = -10;
            } else {
                porcentaje = -5;
            }

            break;

        case 2:
            porcentaje = 0;
            break;

        case 1:
            porcentaje = 0;
            break;        

        default:
            iibb = precio * (10 / 100);
            alert("IIBB usted pagó: " + iibb);
            porcentaje = 10;
            break;

    }

    precio = precio + (precio * porcentaje / 100);

    txtIdprecioDescuento.value = precio;*/


    // ejercicio sólo con switch
    /* switch (cantLamparas) {
        case 7:
            alert("IIBB usted pagó:" + iibb);
            porcentaje = 10;
            break;

        case 6:
            porcentaje = -50;
            break;

        case 5:
            switch (marcaSeleccionada) {
                case "ArgentinaLuz":
                    porcentaje = -40;
                    break;
                
                default:
                    porcentaje = -30;
                    break;
            }

            break;

        case 4:
            switch (marcaSeleccionada) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = -25;
                    break;

                default:
                    porcentaje = -20;
                    break;
            }

            break;
        
        case 3:
            switch (marcaSeleccionada) {
                case "ArgentinaLuz":
                    porcentaje = -15;
                    break;
                
                case "FelipeLamparas":
                    porcentaje = -10;
                    break;
                
                default:
                    porcentaje = -5;
                    break;
            }

            break;

        default:
            porcentaje = 0;
            break;
    }

    precio = precio + (precio * porcentaje/100);

    txtIdprecioDescuento.value = precio; */

    // ejercicio resuelto sólo con if (está mal)
    /*if (cantLamparas > 6) { // E
        precio = precio + iibb;

        alert("IIBB usted pagó:" + iibb);
    } else {
        if (cantLamparas > 5) { // A
            porcentaje = 50/100;
        } else {
            if (cantLamparas == 5) { // B
                if (marcaSeleccionada == "ArgentinaLuz") {
                    porcentaje = 40/100;
                } else {
                    porcentaje = 30/100;
                }
            } else {
                    if (cantLamparas == 4) { // C
                        if (marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas"){
                        porcentaje = 25/100;
                        } else {
                            porcentaje = 20/100;
                        }
                    } else {
                        if (cantLamparas == 3) { // D
                            if (marcaSeleccionada == "ArgentinaLuz") {
                                porcentaje = 15/100;
                            } else {
                                if (marcaSeleccionada == "FelipeLamparas") {
                                    porcentaje = 10/100;
                                } else {
                                    porcentaje = 5/100;
                                }
                            }
                        }
                    }
                }
        }
        precio = precio - (precio * porcentaje);
    }
    txtIdpreciodescuento.value = precio;*/
}
