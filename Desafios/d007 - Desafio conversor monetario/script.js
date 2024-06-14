let cot;

function cotacao() {
    cot = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'));
}

function converter() {
    let dinheiro = Number(window.prompt('Quantos R$ você tem na carteira?'));

    let saida = document.querySelector('section#saida');

    saida.innerHTML = `<p>Isso equivale a US$ ${dinheiro * (1/5.29).toFixed(2)}</p>`;
}