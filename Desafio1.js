$("#btSoma").click(function(){//Cria uma função caso o usuario clique no botão
	let n1=parseInt($("#num1").val());//Atribui o valor do input na variavel
	let n2=parseInt($("#num2").val());//Atribui o valor do input na variavel
	let result=(n1+n2);//Calcula a soma
	resultado(result);
});
$("#btSub").click(function(){//Cria uma função caso o usuario clique no botão
	let n1=parseInt($("#num1").val());//Atribui o valor do input na variavel
	let n2=parseInt($("#num2").val());//Atribui o valor do input na variavel
	let result=(n1-n2);//Calcula 
	resultado(result);
});
$("#btMult").click(function(){//Cria uma função caso o usuario clique no botão
	let n1=parseInt($("#num1").val());//Atribui o valor do input na variavel
	let n2=parseInt($("#num2").val());//Atribui o valor do input na variavel
	let result=(n1*n2);//Calcula 
	resultado(result);
});
$("#btDiv").click(function(){//Cria uma função caso o usuario clique no botão
	let n1=parseInt($("#num1").val());//Atribui o valor do input na variavel
	let n2=parseInt($("#num2").val());//Atribui o valor do input na variavel
	let result=(n1/n2);//Calcula
	resultado(result);
});
function resultado(result){
	$("#resultado").hide();
	$("#resultado").text("Resultado da conta: "+result+"!!!");//Exibe o resultado
	$("#resultado").fadeIn(1200);
};
