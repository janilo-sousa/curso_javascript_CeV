let saida = document.querySelector('section#saida');

function tabuada() {
    let num = Number(document.getElementById("fn1").value);

    saida.innerHTML = `<h2>Tabuada de ${num}</h2>`;

    for(c=1;c<=10;c++) {
        saida.innerHTML += `${num} x ${c} = <strong>${num * c}</strong><br>`;
    }
}