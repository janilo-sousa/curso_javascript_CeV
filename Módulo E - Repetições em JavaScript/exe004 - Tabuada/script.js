function tabuada() {
    // meus objetos dom
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    // validação de dado
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!');

    } else {
        let n = Number(num.value); // pegando o número

        tab.innerHTML = ''; // limpando a saída

        let c = 1;
        while(c <= 10) {
            // criando um elemento html
            let item = document.createElement('option');

            // mexendo no texto dele
            item.text = `${n} x ${c} = ${n * c}`;

            // mexendo na propriedade value dele. importante para linguagens como php
            item.value = `tab${c}`;

            // adicionando o elemento no html
            tab.appendChild(item);
            
            c++;
        }
    }
}