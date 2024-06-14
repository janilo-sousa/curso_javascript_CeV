// USANDO UM LAÇO FOR PARA ITERAR SOBRE UM ARRAY
var valores = [2, 3, 10, 11, 123, 150, 360, 8];

// console.log(valores);

/*
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);
console.log(valores[6]);
console.log(valores[7]);
*/

// Utilizando a estrutura for completa/tradicional
for (var pos = 0;pos<valores.length;pos++) {
    console.log(`Na chave ${pos} tem o valor ${valores[pos]}`);
}

console.log('======================================');

// Utilizando a estrutura for in
for (var pos in valores) {
    console.log(`Na chave ${pos} tem o valor ${valores[pos]}`);
}