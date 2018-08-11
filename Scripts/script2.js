function sumar(frm){
	var parametros = [frm.num1.value,frm.num2.value];
	var resultado = parseInt(parametros[0]) + parseInt(parametros[1]);
	var span = document.createElement("span");
	var resultadoTexto = document.createTextNode(resultado);
	span.appendChild(resultadoTexto);	
	if (document.getElementById("resultado").childNodes[0] != null){
		nodo = document.getElementById("resultado").childNodes[0]	
		document.getElementById("resultado").replaceChild(span,nodo);
	} else{
		document.getElementById("resultado").appendChild(span);
	}
	
	
}



