/*
    -RegExp() é uma expressão regular, sua função é de busca. A partir da primeira letra posta em um campo,
        já começa o processo de busca por palavras, então se você colocar a letra M, irá retornar todos os resultados que começam com M.
        Ao adicionar outra letra, por exemplo U, o mesmo processo ocorrerá, mas agora procurando coisas que comecem com MU.
        Seus paramêtros são, o primeiro é pelo o que ele deve buscar e o segundo se deve considerar ou não letras MAIÚSCULAS     
*/
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    
    var pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0)
    {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});