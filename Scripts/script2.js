/*
	function añadirNodo(operacion,numeros){

	//Determinacion operacion

	if (operacion=="sumar") {
		resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
	} else if (operacion=="restar") {
		resultado = parseInt(numeros[0]) - parseInt(numeros[1]);
	} else if (operacion=="multiplicar") {
		resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
	} else if (operacion=="dividir") {
		resultado = parseInt(numeros[0]) / parseInt(numeros[1]);	
	}

	//Creacion nodo resultante

	var nodo = document.createElement("span");
	var contenido = document.createTextNode(resultado);
	nodo.appendChild(contenido);

	//Reemplazar nodo previo

	if (document.getElementById("resultado").childNodes[0] != null){
		nodoFinal = document.getElementById("resultado").childNodes[0]	
		document.getElementById("resultado").replaceChild(nodo,nodoFinal);
	} else{
		document.getElementById("resultado").appendChild(nodo);
	}

}


function operar(frm){
	
	//Obtencion Parametros 

	var operacion = [frm.operaciones.value];
	var numeros = [frm.num1.value,frm.num2.value];

	añadirNodo(operacion,numeros);
}
*/

//Declaracion variables globales 

var digitos = [];
var numerosCompletos = [];
var operandos = [];
var resultado = 0;

function submit(value){
	if (!(isNaN(value))) {
		digitos.push(value);
		console.log(value);
		crearNodo("span","pantallaDigitos",value)
		
	} else {
		switch(value){

			//Comprobar operador a agregar 

			case '+':
				 concatenar(digitos);
				 operandos.push("+");
				 digitos = [];
				 console.log(numerosCompletos);
				 crearNodo("span","pantallaDigitos","+")
				 break;
			case '-':
				 concatenar(digitos);
				 operandos.push("-");
				 digitos = [];
				 console.log(numerosCompletos);
				 crearNodo("span","pantallaDigitos","-")
				 break;
			case '*':
				 concatenar(digitos);
				 operandos.push("*");
				 digitos = [];
				 console.log(numerosCompletos);
				 crearNodo("span","pantallaDigitos","*")
				 break;
			case '/':
				 concatenar(digitos);
				 operandos.push("/");
				 digitos = [];
				 console.log(numerosCompletos);
				 crearNodo("span","pantallaDigitos","/")
				 break;
			case '=':
				concatenar(digitos);
				digitos = [];
				for (var i = 0; i < operandos.length; i++) {
					
					if (resultado == 0) {
						switch(operandos[i]){
							case '+':
								resultado = parseFloat(numerosCompletos[i]) + parseFloat(numerosCompletos[i+1]);
								break;
							case '-':
								resultado = parseFloat(numerosCompletos[i]) - parseFloat(numerosCompletos[i+1]);
								break;
							case '*':
								resultado = parseFloat(numerosCompletos[i]) * parseFloat(numerosCompletos[i+1]);
								break;
							case '/':
								resultado = parseFloat(numerosCompletos[i]) / parseFloat(numerosCompletos[i+1]);
								break;
						}	
					}else{
						switch(operandos[i]){
							case '+':
								resultado = resultado + parseFloat(numerosCompletos[i+1]);
								break;
							case '-':
								resultado = resultado - parseFloat(numerosCompletos[i+1]);
								break;
							case '*':
								resultado = resultado * parseFloat(numerosCompletos[i+1]);
								break;
							case '/':
								resultado = resultado / parseFloat(numerosCompletos[i+1]);
								break;
						}
					}					
				}
				console.log(resultado);
				crearNodo("span","pantallaResultados",resultado)
				resultado = 0;
				digitos = [];
				operandos = [];
				numerosCompletos = [];
				break;
			case 'c':
				console.clear();
				operandos = [];
				digitos = [];
				numerosCompletos = [];
				resultado = 0;
				limpiarPantallaCalculadora("pantallaDigitos");
				limpiarPantallaCalculadora("pantallaResultados");
				break;
			case '<':
				digitos.pop();
				borrarDigito("pantallaDigitos");
				break;
			case '.':
				digitos.push(".");
				crearNodo("span","pantallaDigitos",".")
		}
	}
}

function concatenar(array){
	concatenacion = 0
	if (array.length > 1) {
		for (var i = 0; i < array.length - 1; i++) {
		if (concatenacion == 0) {
			concatenacion = String(array[i]) + String(array[i+1]);
		}else{
			concatenacion = concatenacion + String(array[i+1]);
		}
	}
	numerosCompletos.push(concatenacion);	
	}else{
		numerosCompletos.push(array[0]);
	}	
}

function crearNodo(typeNode,objective,node){
	var nodo = document.createElement(typeNode);
	var contenido = document.createTextNode(node);
	nodo.appendChild(contenido);
	document.getElementById(objective).appendChild(nodo);
}

function limpiarPantallaCalculadora(objective){
	var objetivo = document.getElementById(objective);
	while(objetivo.childNodes.length >= 1){
		objetivo.removeChild(objetivo.firstChild);
	}
}

function borrarDigito(objective){
	var objetivo = document.getElementById(objective);
	objetivo.removeChild(objetivo.lastChild);
}