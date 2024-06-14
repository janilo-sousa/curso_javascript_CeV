// Minhas variáveis
var contador = 0;

// Objetos DOM
let res = document.querySelector("section#result");

// Minhas funções
function contar() {
    contador++;
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques</p>`;
    
}

function zerar() {
    contador = 0;
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques</p>`;
}