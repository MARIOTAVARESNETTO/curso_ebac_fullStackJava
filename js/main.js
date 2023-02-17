$(document).ready(function(){

$('img').click(function(){
    $('#formulario').slideToggle();
    })

    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')

    $('#formulario').validate({
        rules: {
            nome:{
                required: true
            }, 
            email:{
                required: true,
                email:true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco: {
                required: true
            },
            cep:{
                required: true
            }
        },
        messages:{
            nome: 'Por favor, não esqueça do nome',
            email: 'Por favor, não esqueça do seu email',
            telefone: 'Por favor, não esqueça do telefone',
            cpf: 'Por favor, não esqueça do seu cpf',
            endereco: 'Por favor, não esqueça do seu endereço',
            cep: 'Por favor, não esqueça do seu cep'
        },
    })

})
