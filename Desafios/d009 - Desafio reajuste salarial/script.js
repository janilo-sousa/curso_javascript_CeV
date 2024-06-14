let saida = document.querySelector("section#saida");

function reajustar() {
    let nome = window.prompt('Qual é o nome do funcionário? ');

    let sal = Number(window.prompt(`Qual é o salário de ${nome}?`));

    let porc = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`));

    let aumento = (porc/100) * sal;

    saida.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`;

    saida.innerHTML += `<p>O salário atual era R$ ${sal.toLocaleString('pt-br')}.</p>`;
    saida.innerHTML += `<p>Com um aumento de ${porc}%, o salário vai aumentar R$ ${aumento.toLocaleString('pt-br')} no próximo mês.</p>`;
    saida.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${(sal + aumento).toLocaleString('pt-br')}.</p>`
}