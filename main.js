$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const conteudoFormTarefaNova = $('#cadastro-tarefa-nova').val();
        $(`
        <div class="novos-itens">
        <li><a href="#" target="_self">${conteudoFormTarefaNova}</a></li>
        </div>`).appendTo('ul').click(() => $(event.target).toggleClass('riscado'));      
    })
})