/* 
    -Exemplo de função anônima
			titulo.addEventListener("click",function (){
				console.log("Isso é uma função anonima");
			});

	-addEventListener() serve para adicionar um "escutador" ao elemento HTML, que será acionado quando algum evento acontecer.
		É fortemente recomendável, porque pode ser utilizado para um evento ou vários. 
		No parametro da função deve-se passar qual será o evento e que funcção irá chamar.
		EXEMPLO:
			botaoAdicionar.addEventListener("click", function (event)), no caso é uma função anônima
				ou	
			botaoAdicionar.addEventListener("click", mostraValor), no caso é uma função comum 

	-Para evitar um comportamento padrão de um formulario, recarregar a página é um exemplo, deve-se usar uma função,
		chamada de preventDefault(), mas antes de usá-la é necessário passar o seu objeto como paramêtro.
		EXEMPLO: 
			botaoAdicionar.addEventListener("click", function (event){
				event.preventDefault(); 
				console.log("Oi eu sou o botão e fui clicado");
			});

	-Para criar um elemento HTML na página, faça assim: document.createElement("nomeDoElementoQueDesejaCriar");
			E para fazer a alteração efetivamente, deve-se colocar o novo elemento dentro de seu pai. Exemplo: TABLE > TR > TD.
			TABLE é pai de TR, esse logo é pai de TD. É uma hierarquia.
			O código: 
				tabela.appendChild(pacienteTr);
				"tabela" é o nome de uma TABLE(pai) e seu filho, que desejo inserir é "pacienteTr", então uso a função appendChild() colocando 
				pacienteTr entre os parênteses

	-para finalizar uma função em um ponto específico, basta colocar o comando de return, só que vazio.
			EXEMPLO: 	
				if(talCoisaDerErrado)
					return; 
					//finalizei no meio do processo, os próximos códigos DESSA função não serão executados 
	
	-a função push() é para adicionar itens em um array, a cada item novo deve-se chamar essa função e adicionar algo no array.
			EXEMPLO:
				if(!validaPeso(paciente.peso)) 
					erros.push("Peso é inválido");
				if(!validaAltura(paciente.altura))
					 erros.push("Altura é inválida");

*/

	var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function (event){
        event.preventDefault();
         
		var form =  document.querySelector("#form-adiciona");
        
        //Extraindo informações do paciente do form
        var paciente = obtemPacienteDoFormulario(form);
		
		//valida paciente
		var erros = validaPaciente(paciente);
		console.log(erros);
		if(erros.length > 0)
		{
			exibeMensagensDeErro(erros);
			return;
		}

		adicionaPacienteNaTabela();

		form.reset();
		
		var mensagensDeErro = document.querySelector("#mensagens-erro");
		mensagensDeErro.innerHTML = "";
	});
	
	function adicionaPacienteNaTabela(paciente){
		var pacienteTr = montaTr(paciente);
		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);

	}
	
	function exibeMensagensDeErro(erros)
	{
		var ul = document.querySelector("#mensagens-erro");
		ul.innerHTML = "";
		
		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});	
	}
    function obtemPacienteDoFormulario(form)
    {
        var paciente = {
            nome:form.nome.value,
            peso:form.peso.value,
            altura:form.altura.value,
            gordura:form.gordura.value,
            imc:calculaImc(peso,altura)
        }
        return paciente; 
	}
	
	function montaTr(paciente)
	{
		var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");

		pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
		pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
		pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


		return pacienteTr;
	}

	function montaTd(dado, classe)
	{
		var td = document.createElement("td");
		td.textContent = dado;
		td.classList.add(classe);
		
		return td; 
	}

	function validaPaciente(paciente)
	{
		var erros = [];

		if(paciente.nome.length == 0) erros.push("Preencha o campo nome");
		if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
		if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");
		if(paciente.gordura.length == 0) erros.push("Preencha o campo gordura"); 

		return erros;
	}