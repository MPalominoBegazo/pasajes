var asientosPares = [];
var asientosImpares = [];

var botonAceptar = document.getElementById('aceptar');

function Pasajero(nombre, DNI, numAsiento){
    this.nombre=nombre;
    this.DNI = DNI;
    this.numAsiento = numAsiento;
}

botonAceptar.onclick = function () {
    var caja = document.getElementById("inputopciones").value;
    switch(caja){
        case "1":
            reserva();
            break;
        case "2":
            liberar();
            break;
        case "3":
            buscar();
            break;
        case "0":
            termina();
            break;
        default:
            console.log("Opción invalida");
            break;

    }
}



function reserva(){
    var nombre = prompt("Ingrese Nombre del Pasajero");
    var DNI = prompt("Ingresar DNI");
    var asiento = prompt("Seleccione numero de Asiento: " + generarasientos());

}

function generarasientos(){
 var str="";
 var par, impar;
 var numAsientos = 10;
 var arr=[[],[]];

    arr[0].push(function (){
        for(var i=0; i<numAsientos; i++){
            if(numAsientos% 2 !=0){
                return numAsientos;
            }
        }
    });
    arr[1].push(function(){
        for(var i=0; i<numAsientos; i++){
            if(numAsientos% 2 !=0){
                return numAsientos;
            }
        }
    });

    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            str += arr[i][j] + "[" + "]";
        }
     // str = arr[i]"[" + "]";
    }


 return str;

}

function buscar(){}
function liberar(){}
function termina(){};

