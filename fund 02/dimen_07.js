
// LISTA COM 2 DIMENSÕES

/* DESAFIO --> o desafio é criar uma lista com alguns alunos e alunas. João, Juliana, Caio e Ana, e depois criar uma outra lista
 com as médias, as seguintes médias, e temos que criar uma lista com duas dimensões, os nomes e as médias.
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10,7,9,6]

                        // 0 [alunos]   // 1 [10,7,9,6]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]}, a sua média é ${listaDeNotasEAlunos[1][0]}`)