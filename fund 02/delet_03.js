// DELETANDO ELEMENTOS

/* DESAFIO --> Um professor acidentalmente lançou 5 notas no sistema para um aluno: 10, 6, 8, 5.5 e 10
Para corrigir, remova a última nota e faça o cálculo da média correta.*/

const notas = [10, 6, 8, 5.5, 10]
notas.pop()       // .pop ele vai retirar o ultimo elemento da lista.
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}.`)


/*
concat()
Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro.

filter()
Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.

shift()
Retira o primeiro elemento do array.

unshift()
adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.

reverse()
Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

*/ 