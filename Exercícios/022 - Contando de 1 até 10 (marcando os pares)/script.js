let res = document.querySelector("section#res");

function contar() {
    res.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`;
    let c = 1;
    while (c <= 10) {
        if (c % 2 == 0) {
            res.innerHTML += `<mark><strong> ${c} </strong></mark>&#x1F449;`;
        } else {
            res.innerHTML += ` ${c} &#x1F449; `;
        }
        c++;
    }
    res.innerHTML += ` &#x1F3C1;`;
}