// INTRODUÇÃO Á PROGRAMAÇÃO ORIENTADA Á OBJETOS

/* Um objeto, assim como um array, também é uma variável composta.
Seus elementos, separados por vírgulas e dentro de colchetes, também possui chave e valor, só que suas chaves são literais e podem conter funções e representam objetos da vida real.
*/

let amigo = {
    nome: 'João', // -> propriedade
    sexo: 'M', // -> propriedade
    peso: 85.5, // -> propriedade

    engordar(p=0) { // -> método
        console.log("Engordou");
        this.peso = this.peso + p; // a palavra chave 'this' quer dizer que você está se referindo a propriedade do próprio objeto
    }
}

// evocando um método do objeto 'amigo'
amigo.engordar(2);

// acessando propriedades do objeto 'amigo'
console.log(`Seu amigo ${amigo.nome} pesa ${amigo.peso} kg`);