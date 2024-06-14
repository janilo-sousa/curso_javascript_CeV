let saida = document.querySelector('section#saida');

function calcular() {
    let ano = window.prompt('Qual é o ano que você quer verificar?');

    //            penúltimo elemento      último elemento (da string/array 'ano')
    let ultimos = ano[ano.length - 2] + ano[ano.length - 1];

    saida.innerHTML = `<h2>Analisando o ano de 2010... </h2>`

    // para um ano ser bissexto ele NÃO deve terminar em 00 e DEVE ser divisível por 4!
    if (ultimos != '00' & Number(ano) % 4 == 0) {
        saida.innerHTML += `<p>O ano de ${ano} <mark style='background-color: rgb(125, 180, 125); color: rgb(47, 105, 47);'><strong>É BISSEXTO</strong></mark> ✅</p>`;
    } else {
        saida.innerHTML += `<p>O ano de ${ano} <mark style='background-color: rgb(255, 133, 133); color: rgb(180, 67, 67);'><strong>NÃO É BISSEXTO</strong></mark> ❌</p>`;
    }
}