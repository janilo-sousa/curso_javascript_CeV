let saida = document.querySelector('section#saida');

function verificar() {
    let prec_antes = Number(window.prompt("Qual era o preço anterior do produto?"));

    let prec_atual = Number(window.prompt("Qual é o preço atual do produto?"));

    let dif = prec_atual - prec_antes;

    saida.innerHTML = `<h2>Analisando os valores informados</h2>`;

    if (prec_atual > prec_antes) {
        let vari = (dif * 100) / prec_antes;
        
        saida.innerHTML += `<p>O produto custava ${prec_antes.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})} e agora custa ${prec_atual.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}.</p>`;

        saida.innerHTML += `<p>Hoje o produto está mais caro.</p>`;

        saida.innerHTML += `<p>O preço subiu ${dif.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})} em relação ao preço anterior.</p>`;

        saida.innerHTML += `<p>Uma variação de ${vari.toLocaleString('pt-br')}% para cima.</p>`;

    } else if (prec_atual < prec_antes) {
        let vari = (dif * 100) / prec_atual;

        saida.innerHTML += `<p>O produto custava ${prec_antes.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})} e agora custa ${prec_atual.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}.</p>`;

        saida.innerHTML += `<p>Hoje o produto está mais barato.</p>`;

        saida.innerHTML += `<p>O preço caiu ${(dif * -1).toLocaleString('pt-br', {style: 'currency', currency: 'brl'})} em relação ao preço anterior.</p>`;

        saida.innerHTML += `<p>Uma variação de ${(vari * -1).toLocaleString('pt-br')}% para cima.</p>`;
    } else {
        saida.innerHTML += `<p>O preço do produto não variou com o passar do tempo.</p>`
    }
}