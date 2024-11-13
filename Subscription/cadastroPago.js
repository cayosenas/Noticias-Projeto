const dadosPessoais = document.querySelector("#dadosPessoais");
const dadosContatos = document.querySelector("#dadosContatos");
const divPayment = document.querySelector("#divPayment");
const botao1 = document.querySelector("#botaoContinue");
const botao2 = document.querySelector("#botaoContatos");
const botao3 = document.querySelector("#botaoPayment");
const cepEndereco = document.querySelector("#cepEndereco");
const bairroEndereco = document.querySelector("#bairroEndereco");
const cidadeEndereco = document.querySelector("#cidadeEndereco");

cepEndereco.addEventListener("input", (event) => {
    if (cepEndereco.value.length == 8) {
        let url = "https://opencep.com/v1/" + cepEndereco.value + ".json";
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
        console.log(url);

        request.onload = function(){
            let endereco = JSON.parse(request.response);
            bairroEndereco.value = endereco.bairro;
            cidadeEndereco.value = endereco.localidade;
        } 
    }
});

let inputsDadosPessoais = document.querySelectorAll(".inputPessoais");
let error = document.querySelector('.error');

document.getElementById('email').addEventListener('input', function (event) {
    const emailInput = event.target;

    if (emailInput.value.includes('@')) {
        botao1.disabled = false;
    } else {
        botao1.disabled = true;
    }
    if (emailInput.value.includes('.com')) {
        botao1.disabled = false;
    } else {
        botao1.disabled = true;
    }
});

inputsDadosPessoais[0].addEventListener('input', (event) => {
    inputsDadosPessoais[0].value = inputsDadosPessoais[0].value.trim()
});

inputsDadosPessoais[0].addEventListener('blur', (event) => {
    if (inputsDadosPessoais[0].value === '') {
        inputsDadosPessoais[0].classList.remove('inputPessoais');
        inputsDadosPessoais[0].classList.add('error');
    }
    else {
        inputsDadosPessoais[0].classList.add('inputPessoais');
        inputsDadosPessoais[0].classList.remove('error');
    }
});

inputsDadosPessoais[1].addEventListener('blur', (event) => {
    if (inputsDadosPessoais[1].value === '') {
        inputsDadosPessoais[1].classList.remove('inputPessoais');
        inputsDadosPessoais[1].classList.add('error');
    }
    else {
        inputsDadosPessoais[1].classList.add('inputPessoais');
        inputsDadosPessoais[1].classList.remove('error');
    }
});

inputsDadosPessoais[2].addEventListener('blur', (event) => {
    if (inputsDadosPessoais[2].value === '') {
        inputsDadosPessoais[2].classList.remove('inputPessoais');
        inputsDadosPessoais[2].classList.add('error');
    }
    else {
        inputsDadosPessoais[2].classList.add('inputPessoais');
        inputsDadosPessoais[2].classList.remove('error');
    }
});

inputsDadosPessoais[3].addEventListener('blur', (event) => {
    if (inputsDadosPessoais[3].value === '') {
        inputsDadosPessoais[3].classList.remove('inputPessoais');
        inputsDadosPessoais[3].classList.add('error');
    }
    else {
        inputsDadosPessoais[3].classList.add('inputPessoais');
        inputsDadosPessoais[3].classList.remove('error');
    }
});

botao1.addEventListener("click", (event) => {
    if (inputsDadosPessoais[0].value === '' || inputsDadosPessoais[1].value === '' || inputsDadosPessoais[2].value === '' || inputsDadosPessoais[3].value === '') {
        inputsDadosPessoais[0].classList.remove('inputPessoais');
        inputsDadosPessoais[0].classList.add('error');
        inputsDadosPessoais[1].classList.remove('inputPessoais');
        inputsDadosPessoais[1].classList.add('error');
        inputsDadosPessoais[2].classList.remove('inputPessoais');
        inputsDadosPessoais[2].classList.add('error');
        inputsDadosPessoais[3].classList.remove('inputPessoais');
        inputsDadosPessoais[3].classList.add('error');
    }
    else {
        inputsDadosPessoais[0].classList.add('inputPessoais');
        inputsDadosPessoais[0].classList.remove('error');
        inputsDadosPessoais[1].classList.add('inputPessoais');
        inputsDadosPessoais[1].classList.remove('error');
        inputsDadosPessoais[2].classList.add('inputPessoais');
        inputsDadosPessoais[2].classList.remove('error');
        inputsDadosPessoais[3].classList.add('inputPessoais');
        inputsDadosPessoais[3].classList.remove('error');
        dadosContatos.style.display = "block" ;
    }
});

let inputContatos = document.querySelectorAll(".inputContatos");

inputContatos[0].addEventListener('input', (event) => {
    inputContatos[0].value = inputContatos[0].value.trim()
});

inputContatos[0].addEventListener('blur', (event) => {
    if (inputContatos[0].value === '') {
        inputContatos[0].classList.remove('inputContatos');
        inputContatos[0].classList.add('error');
    }
    else {
        inputContatos[0].classList.add('inputContatos');
        inputContatos[0].classList.remove('error');
    }
});

inputContatos[3].addEventListener('blur', (event) => {
    if (inputContatos[3].value === '') {
        inputContatos[3].classList.remove('inputContatos');
        inputContatos[3].classList.add('error');
    }
    else {
        inputContatos[3].classList.add('inputContatos');
        inputContatos[3].classList.remove('error');
    }
});

botao2.addEventListener("click", (event) => {
    if (inputContatos[0].value === '' || inputContatos[3] === '') {
        inputContatos[0].classList.remove('inputPessoais');
        inputContatos[0].classList.add('error');
    } else {
        inputContatos[0].classList.add('inputPessoais');
        inputContatos[0].classList.remove('error');
        divPayment.style.display = "block" ;
    }
})

let inputPayment = document.querySelector('.inputPayment');

inputPayment[1].addEventListener('input', (event) => {
    inputPayment[1].value = inputPayment[1].value.trim()
});

inputPayment[2].addEventListener('input', (event) => {
    inputPayment[2].value = inputPayment[2].value.trim()
});

inputPayment[3].addEventListener('input', (event) => {
    inputPayment[3].value = inputPayment[3].value.trim()
});

inputPayment[0].addEventListener('blur', (event) => {
    if (inputPayment[0].value === '') {
        inputPayment[0].classList.remove('inputPayment');
        inputPayment[0].classList.add('error');
    }
    else {
        inputPayment[0].classList.add('inputPayment');
        inputPayment[0].classList.remove('error');
    }
});

inputPayment[1].addEventListener('blur', (event) => {
    if (inputPayment[1].value === '') {
        inputPayment[1].classList.remove('inputPayment');
        inputPayment[1].classList.add('error');
    }
    else {
        inputPayment[1].classList.add('inputPayment');
        inputPayment[1].classList.remove('error');
    }
});

inputPayment[2].addEventListener('blur', (event) => {
    if (inputPayment[2].value === '') {
        inputPayment[2].classList.remove('inputPayment');
        inputPayment[2].classList.add('error');
    }
    else {
        inputPayment[2].classList.add('inputPayment');
        inputPayment[2].classList.remove('error');
    }
});

inputPayment[3].addEventListener('blur', (event) => {
    if (inputPayment[3].value === '') {
        inputPayment[3].classList.remove('inputPayment');
        inputPayment[3].classList.add('error');
    }
    else {
        inputPayment[3].classList.add('inputPayment');
        inputPayment[3].classList.remove('error');
    }
});