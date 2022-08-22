/*ARRAYS -->  é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez,
um array (ou lista) pode armazenar diversos valores.*/


// DESAFIO - CALCULAR A MÉDIA ENTRE AS SEGUINTES NOTAS: 10, 6.5, 8 E 7.5


/*let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(media)*/

// Arrays OU lista --> forma diferente de resolver o desafio.

const notas = [10, 6.5, 8, 7.5]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length //comprimento da length ou número de elementos.

console.log(media)

