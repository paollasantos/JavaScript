
// EXPRESSÃO DE FUNÇÃO
 
// exmplo utilizando a declaracão de função:
function minhaFuncao(param){
    // bloco de código
}

minhaFuncao("param")

// exmplo utilizando a expressão de função:

const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 1))

// diferença principal ?????
// funções e var são "listadas" no topo do arquivo.

console.log(apresenta())

function apresenta() {
    return "Olá";
}


console.log(soma1(2, 2))
const soma1 = function(num1, num2) { 
    return num1 + num2 }
