/* ESTRUTURA DE REPETIÇÃO FOR
CONCEITO: esse tipo de laço é especialmente útil quando precisamos executar um bloco de código várias vezes, com base em uma condição específica. Na inicialização, definimos o valor inicial de um contador ou variável de controle.
*/

// EXEMPLO: contando de 1 até 10

/*
SINTAXE: for(início;teste;incremento) {
    ... bloco de código ... 
}
*/

for(var contador=1;contador<=10;contador++) {
    console.log(contador);
}

// NOTE: a única diferença do while para o for é que o for já traz tudo embutido no cabeçalho dele!

// DICA: use o for quando você souber de ante-mão quantas vezes o laço precisa se repetir!