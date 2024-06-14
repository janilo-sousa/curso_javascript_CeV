function contar() {
    // meus objetos dom
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let saida = document.getElementById('saida');

    // pequena validação de dados
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        saida.innerHTML = '<p>Impossível contar!</p>';

    } else {
        saida.innerHTML = '<p>Contando: </p>';

        let i = Number(ini.value); // começo
        let f = Number(fim.value); // fim
        let p = Number(passo.value); // passo

        // outra pequena validação (passo zero ou negativo)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }

        // contagem
        if (i < f) { // contagem crescente
            for(let c = i; c <= f; c += p) {
                saida.innerHTML += ` ${c} \u{1F449}`;
            }

        } else { // contagem regressiva
            for(let c = i; c >= f; c -= p) {
                saida.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        saida.innerHTML += `\u{1F3C1}`;
    }
}