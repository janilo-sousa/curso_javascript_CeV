function converter() {
    let saida = document.querySelector('section#saida');

    let temp = Number(window.prompt('Digite uma temperatura em °C (Celsius)'));

    saida.innerHTML = `<h2>A temperatura de ${(temp).toLocaleString('pt-br')}°C, corresponde a... </h2>`;

    saida.innerHTML += `<p>${(temp + 273).toLocaleString('pt-br')}°K (Kelvin)</p>`;
    saida.innerHTML += `<p>${(temp * 1.8 + 32).toLocaleString('pt-br')}°F (Fahrenheit)</p>`;
}