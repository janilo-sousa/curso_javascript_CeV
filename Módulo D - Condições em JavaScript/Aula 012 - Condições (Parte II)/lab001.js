// CONDIÇÕES ANINHADAS (três caminhos ou mais)

/* CONCEITO: nada mais são que condições compostas dentro de outra condição composta (geralmente no bloco else) que podem ter vários níveis.
*/

var media = 5.9;

// VERSÃO MAIS EXTENSA
/*
if (media >= 7) {
    console.log("O aluno foi aprovado!");
} else {
    if (media >= 6) {
        console.log("O aluno ficou de recuperação!");
    } else {
        console.log("O aluno foi reprovado!");
    }
}
*/

// VERSÃO MAIS SIMPLIFICADA (utilizando a estrutura 'else if')
if (media >= 7) {
    console.log("O aluno foi aprovado!");
} else if (media >= 6) {
    console.log("O aluno está de recuperação!");
} else {
    console.log("O aluno foi reprovado!");
}