
// Média com for

/* DESAFIO ->  calcular a média entre as seguintes notas
               10, 6.5, 8, 7.5 */


const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]; 
}

let media = somaDasNotas / notas.length

console.log(media)