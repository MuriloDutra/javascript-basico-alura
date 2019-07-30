/*
	-DOCUMENT é uma cópia de nossa pagina
	
	-O que for feiro no CONSOLE não altera o código fonte
	
	-console.log() mostra algo no console do navegador

	-querySelector() é para selecionar um elemento da página, como TAG e ID e class 
	
	-querySelectorAll() seleciona tudo que seja igual ao parâmetro passado, retorna um array de String, como todos os valores 

	-textContent pega o valor do que é selecionado, o quanto ele vale. Por exemplo: <h1>Titulo</h1>, no caso pegaria o valor "Titulo"

	-Sinal lógico de E é &&

	-Sinal lógico de OU é ||

	-Para mudar algo especifico no css, posso fazer assim: paciente.style.nomeDoQueQueroMudar = valor;
		EXEMPLO: paciente.style.color = "red";
			Se a propriedade tiver nome composto deve ser assim: CERTO = backgroundColor/ ERRADO = background-color.      

	-Para adicionar uma nova classe ao elemento, basta fazer isso: paciente.classList.add("nomeDaClasse");
		EXEMPLO: paciente.classList.add("paciente-invalido");

	-toFixed() serve para definir a quantidade de casas que o número terá depois da virgula 
*/

	var titulo = document.querySelector(".titulo");
	titulo.textContent = "Aparecida Nutricionista";

	var pacientes = document.querySelectorAll(".paciente");

	for(var i = 0; i < pacientes.length; i++)
	{
		var paciente = pacientes[i];

		var tdPeso = paciente.querySelector(".info-peso");
		var peso = tdPeso.textContent;

		var tdAltura = paciente.querySelector(".info-altura");
		var altura = tdAltura.textContent;

		var tdImc = paciente.querySelector(".info-imc");

		var pesoEhValido = validaPeso(peso);
		var alturaEhValida = validaAltura(altura);

		if(!pesoEhValido)
		{
			console.log("Peso inválido");
			tdImc.textContent = "Peso inválido!";
			paciente.classList.add("paciente-invalido");
		}
		else if(!alturaEhValida)
		{
			console.log("altura inválida");
			tdImc.textContent = "Altura inválida!";
			paciente.classList.add("paciente-invalido");	
		}
		else{
			var imc = calculaImc(peso,altura);
			tdImc.textContent = imc;
		}
	}

	function validaPeso(peso)
	{
		if(peso > 0 && peso < 1000)
			return true;
		else	
			return false; 
	}

	function validaAltura(altura)
	{
		if(altura > 0 && altura < 3)
			return true;
		else	
			return false;
	}

	function calculaImc(peso,altura)
	{
		var imc = 0;
		imc = peso / (altura*altura);
		
		return imc.toFixed(2);
	}