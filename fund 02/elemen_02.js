// ADICIONANDO ELEMENTOS

/* DESAFIO --> Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno: 10, 6, 8
Para corrigir, adicione a nota 7 e faça o cálculo da média correta. */

const notas = [10, 6, 8]
notas.push(7)   // .push é uma função que adiciona elementos a lista.
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)