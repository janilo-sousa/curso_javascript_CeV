let saida = document.querySelector("section#saida");

function fatorial() {
    let num = Number(document.getElementById("fn1").value);

    saida.innerHTML += `<h2>Calculando ${num}!</h2>`;
    
    let fat = 1;
    while (num > 1) {
        saida.innerHTML += `${num} x `;
        fat = fat * num;
        num--;
    }

    saida.innerHTML += `1 = <strong>${fat.toLocaleString()}</strong>`;
}