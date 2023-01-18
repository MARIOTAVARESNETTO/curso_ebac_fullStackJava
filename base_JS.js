const form = document.getElementById('form-valida');

form.addEventListener('submit', function(e){
    e.preventDefault();

    
})

function compararValor(){
    var primeiroValor = document.getElementById('valor1').value;
    var segundoValor = document.getElementById('valor2').value;

    if(!document.getElementById('valor1').value == " " &&!document.getElementById('valor2').value == " ")
    {
        if(primeiroValor===segundoValor){
        alert("São iguais");
        const barraErro = document.querySelector('.msgErro');
            barraErro.style.display = "block";
        }
            else if(primeiroValor>segundoValor){
            alert("O primeiro é maior que o segundo");
            const barraSucesso = document.querySelector('.msgSucesso');
            barraSucesso.style.display = "block";
            }
                else{
                alert("O segundo é maior que o primeiro");
                const barraErro = document.querySelector('.msgErro');
                barraErro.style.display = "block";
                }
    }
}


