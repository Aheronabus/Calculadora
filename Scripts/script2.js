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

