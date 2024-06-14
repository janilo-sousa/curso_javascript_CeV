let res = document.querySelector('section#res');

function verificar() {
    let n1 = Number(window.prompt('Digite um valor: '));
    let n2 = Number(window.prompt(`Além de ${n1}, digite outro valor: `));

    if (n1 > n2) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong></p>`;
    } else if (n2 > n1) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></p>`;
    } else {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></p>`;
    }
}