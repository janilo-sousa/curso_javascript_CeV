function converter() {
    let saida = document.querySelector('section#saida');

    let dit = Number(window.prompt('Digite uma distância em metros (m)'));

    saida.innerHTML = `<h2>A distância de ${(dit.toLocaleString('pt-br'))} metros, corresponde a... </h2>`;

    saida.innerHTML += `<p>${(dit / 1000).toLocaleString('pt-br')} quilômetros (Km)</p>`;
    saida.innerHTML += `<p>${(dit / 100).toLocaleString('pt-br')} hectômetros (Hm)</p>`;
    saida.innerHTML += `<p>${(dit / 10).toLocaleString('pt-br')} decâmetros (Dam)</p>`;
    saida.innerHTML += `<p>${(dit * 10).toLocaleString('pt-br')} decímetros (dm)</p>`;
    saida.innerHTML += `<p>${(dit * 100).toLocaleString('pt-br')} centímetros (cm)</p>`;
    saida.innerHTML += `<p>${(dit * 1000).toLocaleString('pt-br')} milímetros (mm)</p>`;
}