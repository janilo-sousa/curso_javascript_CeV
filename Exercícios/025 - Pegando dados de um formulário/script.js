// meus objetos dom
let saida = document.querySelector("section#saida");

function contagem() {
    let num = Number(document.getElementById('fnum').value);

    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`;
    let c = 0;
    while (c <= num) {
        saida.innerHTML += ` ${c} &#x1F449;`;
        c++;
    }
    saida.innerHTML += ` &#x1F3C1;`;

}