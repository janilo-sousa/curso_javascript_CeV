// VARIÁVEIS E TIPOS PRIMITIVOS DE DADOS

/* CONCEITO: Variáveis em programação são espaços que o programador reserva/aloca na memória do computador para guardar informações, pedidas ou não ao usuário(entrada), e que podem ser utilizadas(tratadas, processadas ou mostradas) no decorrer do funcionamento do programa. Ao finalizar o programa, todos esses espaços reservados pelas variáveis e que contém dados serão esvaziados denovo.
*/

// OBSERVAÇÃO: A partir desta aula vamos começar a ultilizar o Node.Js e não o navegador, em alguns casos, para rodar nossos scripts visando a praticidade.

// Comentário de uma linha

/* Comentário
de mais de
uma linha */

var nome = "João"; // string
var idade = 25; // number
var altura = 1.70; // number
var casado = false; // boolean

// OBSERVAÇÃO: existe diferença entre criar uma variável com a palavra chave var, const ou let!! (com o tempo você irá aprender a diferenciar)

// Este comando mostra de que tipo de dado aquela variável é
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof casado);

/* REGRAS PARA NOMEAR UMA VARIÁVEL:
    - Podem começar com letra, $ ou _;
    - Não podem começar com números;
    - É possível usar letras ou números;
    - É possível usar acentos e símbolos;
    - Não podem conter espaços;
    - Não podem ser palavras reservadas.
*/

/* DICAS PARA NOMEAR VARIÁVEIS:
    - Maiúsculas e minúsculas fazem diferença;
    - Tente escolher nomes coerentes para as variáveis;
    - Evite se tornar um "programador alfabeto" ou um "programador contador".
*/

/* TIPOS DE DADOS EXISTENTES EM JAVASCRIPT:
    - number (note: números inteiros e decimais recebem a mesma classificação) (vamos trabalhar mais)
        - infinity
        - NaN

    - string (vamos trabalhar mais)
    - boolean (vamos trabalhar mais)
    - null
    - undefined
    - object
        - array
    - function
*/