// ESTRUTURAS CONDICIONAIS EM JAVASCRIPT

/* CONCEITO: as estruturas condicionais permitem que um programa execute diferentes comando de acordo com as condições estabelecidas. */

// CONDIÇÕES SIMPLES
var nome = "Pedro";
if (nome == "José") {
    console.log("E agora José? ");
}

console.log("===========================================");

// CONDIÇÃO COMPOSTA (dois caminhos possíveis)
var media = 6.9;
if (media >= 7.0) {
    console.log("O aluno foi aprovado!");
} else {
    console.log("O aluno foi reprovado!");
}