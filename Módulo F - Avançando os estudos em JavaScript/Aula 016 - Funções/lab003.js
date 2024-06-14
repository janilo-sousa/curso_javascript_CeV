/*
FUNÇÕES RECURSIVAS: são funções que chamam elas mesmas!
*/

// EXEMPLO: calculando o fatorial de um número
/*
Observe: !5 = 5 * 4 * 3 * 2 * 1 = 120
         !5 = 5 * 4!
Generalizando: !n = n * (n - 1)!
*/
function fatorial(num) {
    if (num == 1) {
        return 1;
    } else {
        return (num * fatorial(num - 1)); // aqui a função chama ela mesma
    }
}
console.log(fatorial(5));