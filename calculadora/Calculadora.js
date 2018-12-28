var primern;
var segundon;
var resultado2;
function init(){

	var pantalla = document.getElementById('pantalla');
	var reset = document.getElementById('reset');
	var backspace = document.getElementById('backspace');
	var porcentaje = document.getElementById('porcentaje');
	var divicion = document.getElementById('divicion');
	var multiplicacion = document.getElementById('multiplicacion');
	var resta = document.getElementById('resta');
	var suma = document.getElementById('suma');
	var igual = document.getElementById('igual');
	var numero1 = document.getElementById('numero1');
	var numero2 = document.getElementById('numero2');
	var numero3 = document.getElementById('numero3');
	var numero4 = document.getElementById('numero4');
	var numero5 = document.getElementById('numero5');
	var numero6 = document.getElementById('numero6');
    var numero7 = document.getElementById('numero7');
	var numero8 = document.getElementById('numero8');
	var numero9 = document.getElementById('numero9');
	var cero = document.getElementById('cero');
	var decimal = document.getElementById('decimal');

numero1.onclick = function(e){
		pantalla.value = pantalla.value + "1";
	}
numero2.onclick = function(e){
		pantalla.value = pantalla.value + "2";
	}
numero3.onclick = function(e){
		pantalla.value = pantalla.value + "3";
	}
numero4.onclick = function(e){
		pantalla.value = pantalla.value + "4";
	}
numero5.onclick = function(e){
		pantalla.value = pantalla.value + "5";
	}
numero6.onclick = function(e){
		pantalla.value = pantalla.value + "6";
	}
numero7.onclick = function(e){
		pantalla.value = pantalla.value + "7";
	}
numero8.onclick = function(e){
		pantalla.value = pantalla.value + "8";
	}
numero9.onclick = function(e){
		pantalla.value = pantalla.value + "9";
	}
cero.onclick = function(e){
		pantalla.value = pantalla.value + "0";
	}
reset.onclick = function(e){
	recetear();
    }
suma.onclick = function(e){
	primern = pantalla.value;
	resultado2 = "+";
	limpiar();
    }
    resta.onclick = function(e){
    	primern = pantalla.value;
    	resultado2 = "-";
    	limpiar();
    }
multiplicacion.onclick = function(e){
	primern = pantalla.value;
	resultado2 = "*";
	limpiar();
    }
divicion.onclick = function(e){
	primern = pantalla.value;
	resultado2 = "/";
	limpiar();
   }
igual.onclick = function(e){
    segundon = pantalla.value;
    resolver();
}
}

function limpiar (){
	pantalla.value = "";
}
function recetear(){
	pantalla.value = "";
	primern = 0;
	segundon = 0;
	resultado2 = "";
}

function resolver(){
	var res = 0;
	switch(resultado2){
		case "+":
		res = parseFloat(primern) + parseFloat(segundon);
		break;
		case "-":
		res = parseFloat(primern) - parseFloat(segundon);
		break
		case "*":
		res = parseFloat(primern) * parseFloat(segundon);
		break
		case "/":
		res = parseFloat(primern) / parseFloat(segundon);
		break
	}
//recetear();
pantalla.value = res;	
}