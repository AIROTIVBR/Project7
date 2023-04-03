var select = document.getElementById('tipo')

select.addEventListener('change', function(){
    console.log(select.value)
})

var selecao = document.getElementById('final')

selecao.addEventListener('change', function(){
    console.log(selecao.value)
})

var input = document.getElementById("valor");


function converter(input){
	if (select.value == 2 && selecao.value == 10){
		var bin =  parseInt(input,2)
		var dec = bin.toString(10)
		document.getElementById("resultado").innerText = dec
		console.log(input);
	}

	else if (select.value == 2 && selecao.value == 16){
		var bin =  parseInt(input,2)
		var hex = bin.toString(16)
		document.getElementById("resultado").innerText = hex
		console.log(input);
	}

	else if (select.value == 10 && selecao.value == 2){
		var dec =  parseInt(input)
		var bin = dec.toString(2)
		document.getElementById("resultado").innerText = bin
		console.log(input);
	}

	else if (select.value == 10 && selecao.value == 16){
		var dec =  parseInt(input)
		var hex = dec.toString(16)
		document.getElementById("resultado").innerText = hex
		console.log(input);
	}

	else if (select.value == 16 && selecao.value == 2){
		var hex =  parseInt(input,16)
		var bin = hex.toString(2)
		document.getElementById("resultado").innerText = bin
		console.log(input);
	}

	else if (select.value == 16 && selecao.value == 10){
		var hex =  parseInt(input,16)
		var dec = hex.toString(10	)
		document.getElementById("resultado").innerText = dec
		console.log(input);
	}
}
	
