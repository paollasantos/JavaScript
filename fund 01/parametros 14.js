
// PARÂMETROS E ARGUMENTOS

// parâmetros de função


function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(50, 50))
console.log(soma(-350, 250))

// parâmetros x argumentos 

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Paola", 21))

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))

