// VAR

var altura = 5;
var comprimento = 7;

area = altura * comprimento
console.log(area)
var area;

// LET

let forma1 = 'retângulo'
let altura = 5;
let comprimento = 7;
let area;

if (forma1 === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)

// CONST ==> não pode ser criada sem valor

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = ( altura * comprimento ) / 2;
}

console.log(area)
