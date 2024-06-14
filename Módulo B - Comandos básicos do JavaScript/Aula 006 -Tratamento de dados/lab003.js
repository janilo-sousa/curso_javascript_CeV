// TRATAMENTO DE NÚMEROS EM JAVASCRIPT

// Convertendo um número para uma string
var idade = 35; // Note o tipo de dado agora
console.log(idade, typeof idade); // number

// Fazendo a conversão
idade = String(idade); // usando o objeto 'String'
idade = idade.toString(); // usando a função

console.log(idade, typeof idade); // Note o tipo de dado agora

console.log("==================================================");

// FIXANDO CASAS DECIMAIS EM NÚMEROS
var numero = 123;
console.log(numero.toFixed(3));


console.log("==================================================");
// ADICIONANDO MOEDA E VALOR MONETÁRIO
var num = 123;
console.log(num, typeof num);
num = num.toLocaleString(
    "pt-br", // string -> informar o idioma
    {
        style: 'currency', // que se trata de um valor monetário
        currency: 'brl' // informar a moeda, no caso o real
    }
);

console.log(num, typeof num); // Note que o método 'toLocaleString' é aplicado em number, porém no final o dado para a ser do tipo string