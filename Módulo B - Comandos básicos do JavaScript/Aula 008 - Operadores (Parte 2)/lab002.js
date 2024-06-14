/* OPERADORES LÓGICOS:
    Eles servem para criarmos expressões com os operadores relacionais.
    São eles:
        - ! -> negação (o que é true vira false e o que é false vira true)
        - && -> conjunção (E)
        - || -> disjunção (OU)
*/

// TABELA VERDADE DO OPERADOR || (DISJUNÇÃO/OU)
//            true      true
console.log(10 > 2 || 10 < 100); // true
//            true      false
console.log(10 > 2 || 10 > 100); // true
//            false      true
console.log(10 < 2 || 10 < 100); // true
//            false      false
console.log(10 < 2 || 10 > 100); // false

console.log("===========================================");

// TABELA VERDADE DO OPERADOR && (CONJUNÇÃO/E)
//           true        true
console.log(10 > 2 && 10 < 100); // true
//           true        false
console.log(10 > 2 && 10 > 100); // false
//           false       true
console.log(10 < 2 && 10 < 100); // false
//           false       false
console.log(10 < 2 && 10 > 100); // false

console.log("===========================================");

// OPERADOR DE NEGAÇÃO
console.log(!(100 > 50)); // de true vira false
console.log(!(10 > 1000)); // de false vira true