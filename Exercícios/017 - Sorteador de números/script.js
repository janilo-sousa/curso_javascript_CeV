// meus objetos dom
let res = document.querySelector("section#res");

function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random(); // essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio);

    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`;
}

function limpar() {
    res.innerHTML = `<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>`;
}