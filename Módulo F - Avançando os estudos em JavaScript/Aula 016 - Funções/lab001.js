/* FUNÇÕES EM JAVASCRIPT
São ações executadas assim que são chamadas ou em decorrência de algum evento. Uma função pode receber parâmetros e retornar um resultado.

* TODA FUNÇÃO TEM:
    - palavra chave (function)
    - nome da função
    - parâmetros
    - escopo
    - retorno
*/

function parImpar(num=2) { // caso eu não passe o parâmetro 'num' na chamada da função ele irá assumir por padrão o valor 2. Caso você não faça isso e não informe o parâmetro ele assumirá o valor undefined
    var resu;
    if (num % 2 == 0) {
        resu = "Par";
    } else {
        resu = "Ímpar";
    }

    return resu;
}
var resu = parImpar(5);
console.log(resu);