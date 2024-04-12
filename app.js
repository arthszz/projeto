//1

function mudarTexto(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto
}
mudarTexto('h1', 'hora do desafio');

//2

function validarClique1(){
    console.log ('O botão foi clicado')
}

//3

function validarClique2(){
    console.log ('O botão foi clicado')
    alert ('Eu amo JS')
}

//4

function validarClique3(){
    console.log ('O botão foi clicado')
    let Cidade=prompt('qual é a cidade?')
    alert(`Estive em ${cidade} e lembrei de você`)
}

//5

function validarClique4(){
    console.log('O botão foi clicado');
    let numero1 = parseInt(prompt ('digite um numero para uma soma'));
    let numero2 = parseInt(prompt ('peça um segundo numero para somalos'));
    let resultado = numero1 + numero2;
    alert (`O resultado é de ${resultado}`)
}