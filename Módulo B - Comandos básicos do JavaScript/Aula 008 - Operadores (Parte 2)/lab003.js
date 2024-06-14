// EXPLICANDO OS OPERADORES LÓGICOS 'E' E 'OU' ATRAVÉS DE EXEMPLOS

// EXEMPLO 1
/* Só pode brincar no brinquedo quem for de maior (ter 18 anos ou mais) e ter a altura igual ou acima de 1,60m
*/

// Dados da Camila
var idade_camila = 25;
var altura_camila = 1.55;

console.log(`A Camila vai poder brincar no brinquedo?: ${idade_camila >= 18 && altura_camila >= 1.60}`);

// EXEMPLO 2
/* Tem entrada grátis no evento com for portador de deficiência física ou trouxer dois kilos de alimentos
*/

// Dados do Rafael
var dificiente = false;
var alimentos = true;

console.log(`O Rafael poderá entrar no evento sem pagar nada?: ${dificiente == true || alimentos == true}`);

/* ATUALIZANDO A TABELA DE ORDEM DE PRECEDÊNCIA DAS OPERAÇÕES ARITMÉTICAS COM OS OPERADORES:
    1) Operadores aritméticos
    2) Operadores relacionais
    3) Operadores lógicos
        1) Operador de negação
        2) Operador 'E'
        3) Operador 'OU'
        
    4) Operador ternário
*/