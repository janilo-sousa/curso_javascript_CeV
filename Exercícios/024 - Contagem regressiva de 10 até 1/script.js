let res = document.querySelector("section#res");

function contar() {
    res.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`;
    let c = 10;
    while (c >= 1) {
        res.innerHTML += ` ${c} &#x1F449;`;
        c--;
    }
    res.innerHTML += ` &#x1F3C1;`;
}