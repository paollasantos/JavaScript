// DIVIDINDO COM SLICE()

// DESAFIO --> Divida os alunos da sala em duas listas com a mesma quantidade de alunos.

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'alice', 'Caio', 'Isa']

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)