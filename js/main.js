$(document).ready(function(){
    $('#celular').mask('(00)00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            celular: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            celular: 'Por favor, insira seu celular',
            email: 'Por favor, insira um email válido'
        }
    })

})
