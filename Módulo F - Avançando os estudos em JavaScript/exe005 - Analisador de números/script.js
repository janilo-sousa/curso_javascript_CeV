// meus objetos dom
let num = document.getElementById('fnum'); // caixa do número
let lista = document.querySelector('select#flista'); // lista do select
let res = document.querySelector('div#res'); // div da resposta

// variáveis globais
let valores = [];

function isNumero(n) { // confere se o número é válido
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;

    } else {
        return false;

    }
}

function inLista(n, l) { // confere se o número já está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true;

    } else {
        return false;

    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // validação de dados
        valores.push(Number(num.value)); // adicionando o número no array por de baixo dos panos

        let item = document.createElement('option'); // criando um item option em html

        item.text = `Valor ${num.value} adicionado.`; // mexendo na propriedade text do item option

        lista.appendChild(item); // adicionado(no final) o item option da section da lista

        res.innerHTML = ''; // mandando esvaziar a div do resultado pois a análise já vai estar ultrapassada

    } else {
        window.alert('Valor inválido ou já encontrado na lista.');

    }

    num.value = ''; // esvazia a caixa de número
    num.focus(); // coloca o cursor automaticamente na caixa de número
}

function finalizar() {
    if (valores.length == 0) { // verificando se o usuário não tá mandando analisar o array vazio
        window.alert('Adicione valores antes de finalizar!');

    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        // achando o maior e o menor valor do array
        for(let pos in valores) {
            soma += valores[pos]; // variável acumuladora

            if (valores[pos] > maior) {
                maior = valores[pos];
                
            }

            if(valores[pos] < menor) {
                menor = valores[pos];
            }
        }

        media = soma / tot;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`;
    }
}