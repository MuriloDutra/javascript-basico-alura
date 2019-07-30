/*
    https://api-pacientes.herokuapp.com/pacientes

    - A classe XMLHttpRequest() serve para fazer requisições em outros servidores, buscando por arquivos de diversos tipos, como: xml, html, txt e outros. 

    - o método open() é para abrir uma conexão com o site desejado. Possui dois paramêtros, o primeiro é de que maneira deseja fazer a requisição, POST, GET,
        DELETE e outras. O segundo paramêtro é a URL de destino, para onde ele deve ir, com quem precisa se conectar.
        
    - o método responseText() é para pegar a resposta da requisição.

    - o método send() é para enviar a requisição, com o método open() é apenas a preparação, com o send() você executa a ação.
*/
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    var erro = document.querySelector("#erro-ajax");
    xhr.addEventListener("load",function(){
        if(xhr.status == 200){
            erro.classList.add("invisivel");
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });    
        }else{
            erro.classList.remove("invisivel");
        }
        

    });
    xhr.send();
});