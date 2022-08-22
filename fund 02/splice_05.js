
// ALTERANDO COM SPLICE()

/* DESAFIO --> desafio é tirar alguns alunos que saíram dessa turma e colocar mais um aluno no lugar deles. 
*/

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// O splice() permite que tire qualquer elemento e coloque qualquer elemento.
// o 1 é aonde vamos começa, 2 o numero de elementos que vamos remover e o que vai ser coloca no lugar.

listaDeChamada.splice(1,2,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)