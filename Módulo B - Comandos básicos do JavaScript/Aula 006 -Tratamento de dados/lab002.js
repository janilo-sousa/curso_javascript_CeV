// TRATAMENTO DE STRING EM JAVASCRIPT

// Convertendo uma string para number
var num = '123abc'; // Note um dado do tipo string
console.log(num, typeof num); // string

// Fazendo a conversão
num = Number.parseInt(num); // Especificamente para um número inteiro
num = Number.parseFloat(num); // Especificamente para um número real
num = Number(num); // Genérica

console.log(num, typeof num); // Note agora o tipo de dado

console.log("================================");

// OUTRAS PROPRIEDADES E FUNÇÕES ATRELADAS AO TIPO DE DADO STRING
var nome = "João Silva";
console.log(nome.length); // propriedade (mostra quantos caracteres a string tem. Inclue os espaços)
console.log(nome.toUpperCase()); // função (pega a string e leva tudo para maiúsculo)
console.log(nome.toLowerCase()); // função (pega a string e leva tudo para minúsculo)

console.log(nome, "-> Note que a string original não foi mudada. Para isso prescisamos fazer o processo de reatribuição da variável!");

// FAZENDO SUBSTITUIÇÕES NA STRING
console.log(nome.replace("Silva", "Sousa")); // Vá na string, aonde encontrar o termo "Silva" substitua por "Sousa"
console.log(nome); // Note que não altera a string original