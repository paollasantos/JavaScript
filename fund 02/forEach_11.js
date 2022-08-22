 
// Média com forEach

// Esse foreach é um jeito diferente que temos de passar por cada elemento do nosso array.

/* DESAFIO ->  calcular a média entre as seguintes notas usando o foreach
               10, 6.5, 8, 7.5 */


const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// callback
notas.forEach( nota => {
    somaDasNotas += nota
})

let media = somaDasNotas / notas.length

console.log(media)

