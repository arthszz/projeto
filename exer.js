1
let peso = prompt('qual o seu peso em kg')
let altura = prompt('qual o sua altura em metros')
function imc(peso2, altura2){
    return (peso2/(altura2*altura2))
}
let IMC = imc(peso, altura);
alert(`o IMC é ${IMC.toFixed(2)}`)