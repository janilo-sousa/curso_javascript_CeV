let saida = document.querySelector('section#saida');

function comprar() {
    let produto = window.prompt('Qual é o produto que você está comprando?');

    let prec = Number(window.prompt(`Qual é o preço de ${produto}?`));

    let desconto = 0.1 * prec;

    saida.innerHTML = `<h2>Calculando desconto de 10% para ${produto.toLocaleString('pt-br')}</h2>`;

    saida.innerHTML += `<p>O preço original era R$ ${prec.toLocaleString('pt-br')}.</p>`;

    saida.innerHTML += `<p>Você acaba de ganhar R$ ${desconto.toLocaleString('pt-br')} de desconto (-10%).</p>`;

    saida.innerHTML += `<p>No fim, você vai pagar R$ ${(prec - desconto).toLocaleString('pt-br')} no produto ${produto}.</p>`;
}