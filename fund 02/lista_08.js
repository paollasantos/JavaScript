
// Procurando na lista

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ',sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não esta cadastrad"
    }
}

console.log(exibeNomeNota("Caio"))

/* includes pega um array e faz uma busca pelo que estamos passando, ele faz uma busca pelo valor,
 pelo tipo de dado. includes retorna um verdadeiro ou falso */

/* O indexOf vai trazer qual o número do índice também fazendo uma pesquisa por ano.*/