let res = document.querySelector("section#res");

function checar() {
    let num = Number(window.prompt("Digite um número: "));
    
    let tipo;
    if (num % 2 == 0) {
        tipo = `PAR!`;
    } else {
        tipo = `ÍMPAR!`;
    }

    res.innerHTML = `<p>O número ${num} que foi digitado é <strong>${tipo}</strong></p>`;
}