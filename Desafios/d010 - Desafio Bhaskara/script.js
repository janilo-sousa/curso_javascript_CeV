let saida = document.querySelector('section#saida');

function calcular() {
    let a = Number(window.prompt('Qual é o valor de a?'));
    let b = Number(window.prompt('Qual é o valor de b?'));
    let c = Number(window.prompt('Qual é o valor de c?'));

    let delta = b ** 2 - 4 * a * c;

    saida.innerHTML = `<h2>Resolvendo Bhaskara</h2>`;

    saida.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`;

    saida.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`;

    saida.innerHTML += `<p>O valor calculado foi <strong><mark>Δ = ${delta}</mark></strong></p>`;
}