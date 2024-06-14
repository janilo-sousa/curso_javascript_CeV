// OPERADORES EM JAVASCRIPT

/* Este são os tipos de operadores que iremos estudar neste curso:
    - Operadore de atribuição (=)
    - Operadores aritméticos (+, -, *, /, %, **)
    - Operadores de auto-atribuições (x = x + 5)
    - Operedores de pós-incremento e pré-incremento (x++, ++x)
    - Operadores relacionais (>, <, >=, <=, !=, ==)
    - Operador de identidade (===)
    - Operadores lógicos (!, &&, ||)
    - Operador ternário (teste ? true : false)
*/

// Operador de atribuição
var n1 = 5;
var n2 = 2;

// OPERADORES ARITMÉTICOS
console.log(n1 + n2); // Soma
console.log(n1 - n2); // Subtração
console.log(n1 * n2); // Produto
console.log(n1 / n2); // Divisão real
console.log(n1 ** n2); // Potenciação
console.log(n1 % n2); // Resto da divisão

/* ORDEM DE PRECEDÊNCIA DAS OPERAÇÕES
    1) -> ()
    2) -> **
    3) -> * ou / ou %
    4) -> + ou -
*/

// AUTO-ATRIBUIÇÃO
var n3 = 4;
n3 = n3 + 5; // -> auto-atribuição
console.log(n3);

// Simplificações de auto-atribuições
var num = 3
num += 4; // num = num + 4;
num -= 5; // num = num - 5;
num *= 4; // num = num * 4;
num /= 2; // num = num / 2;
num **= 2; // num = num ** 2;
num %= 5; // num = num % 5

// OPERADOR DE INCREMENTO
var x = 5;
x++; // x = x + 1
x--; // x = x - 1

// PÓS-INCREMENTO v.s. PRÉ-INCREMENTO
var x = 5;
console.log(x++); // mostra na tela e depois incrementa

var x = 5;
console.log(++x); // incrementa e depois mostra na tela