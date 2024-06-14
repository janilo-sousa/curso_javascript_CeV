let saida = document.querySelector("section#saida");

function contagem() {
    let ini = Number(document.getElementById("fn1").value);
    let fin = Number(document.getElementById("fn2").value);

    saida.innerHTML += `<h2>Contando de ${ini} até ${fin}</h2>`;

    if (ini < fin) {
        while (ini <= fin) {
            saida.innerHTML += ` ${ini} &#x1F449;`;
            ini++;
        }
    } else if (ini > fin) {
        while (ini >= fin) {
            saida.innerHTML += ` ${ini} &#x1F449;`;
            ini--;
        }
    } else {
        saida.innerHTML += `Não é possível contar, pois os números são iguais`;
    }

    saida.innerHTML += ` &#x1F3C1;`;
}