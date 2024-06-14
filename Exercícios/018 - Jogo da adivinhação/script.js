let res = document.querySelector("section#res");

let sort = 0;
let palp = 0;

function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    sort = min + Math.trunc(aleatorio * dif);
}

function adivinhar() {
    palp = Number(window.prompt("Qual é o seu palpite: "));

    if (palp > sort) {
        res.innerHTML += `<p>Você falou ${palp}. Meu número é <strong>MENOR!</strong></p>`;
    } else if (palp < sort) {
        res.innerHTML += `<p>Você falou ${palp}. Meu número é <strong>MAIOR!</strong></p>`;
    } else {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${sort}!</p>`;
        document.getElementById("botao").style.visibility = 'hidden';
    }
}