/* 
    - A função remove, como o próprio nome diz, serve para remover algum elemento da tela

    -Quando algum evento acontece na página, um click por exemplo, não é apenas o elemento clicado que identifica a ação,
        mas todos os seus "superiores", pais. Ao clicar em uma TD, o pai  TR identifica, a TABLE e assim por diante até acabar no BODY.
        Por isso é  recomendável que quando se trabalha com muitos elementos do mesmo tipo, é melhor colocar o evento no pai de todos, pois ele identificará  qualquer um. 
    
    -Para especificar qual foi o elemento clicado, deve-se usar a propriedade do event: target(alvo)

    -parentNode é para usar o pai do elemento atual         
*/

var tabela =  document.querySelector("table");
tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();    
    }, 500);
    
});