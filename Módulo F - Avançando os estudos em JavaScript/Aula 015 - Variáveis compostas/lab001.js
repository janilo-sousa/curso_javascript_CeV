//         0  1  2   3 -> índices
var num = [5, 3, 9];

// Mostrando o array na tela
console.log(num); // Aparece com os colchetes
console.log(`${num}`); // Aparece sem os colchetes

// Mostrando um elemento em específico
console.log(num[2]);

// Adicionando um elemento no final do array
num[3] = 4; // 1º Maneira
console.log(num);

num.push(7); // 2º Maneira
console.log(num);

// Ordenando um array númerico em ordem crescente
num.sort();
console.log(num);

// Achando um elemento específico no array
var valorProcurado = 7;
var posValorProcurado = num.indexOf(valorProcurado);

if(posValorProcurado == -1) {
    console.log(`O valor ${valor} não foi encontrada no array!`);
} else {
    console.log(`O valor ${valorProcurado} foi encontrado na chave ${posValorProcurado}!`);
}