/* REPETIÇÕES EM JAVASCRIPT
ESTRUTURA DE REPETIÇÃO WHILE

CONCEITO: é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.
*/

// EXEMPLO: CONTANDO DE 1 ATÉ 10
// sem a estrutura de repetição
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');

// com a estrutura de repetição
var contador = 1; // -> variável contadora
while (contador <= 10) { // -> condição
    console.log(contador);
    contador = contador + 1; // -> atualizando a variável contadora
}

// NOTE: se você não atualizar a variável contadora irá cair em um loop infinito ou vazamento de memória