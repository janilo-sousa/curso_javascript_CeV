let saida = document.querySelector('section#saida');

function notas() {
    let nome = window.prompt("Qual é o nome do aluno?");

    let n1 = Number(window.prompt(`Primeira nota de ${nome}:`));

    let n2 = Number(window.prompt(`Segunda nota de ${nome}:`));

    let media = (n1 + n2) / 2;

    saida.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`;

    saida.innerHTML += `<p>Com as notas ${n1.toLocaleString('pt-br')} e ${n2.toLocaleString('pt-br')}, a <strong>média é ${media.toLocaleString('pt-br')}</strong></p>`;

    if (media >= 6) {
        saida.innerHTML += `<p>Com média acima de 6,0 o aluno está <mark><strong class='verde'>APROVADO</strong></mark></p>`;

    } else if (media >= 3 && media < 6) {
        saida.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <mark><strong class='amarelo'>RECUPERAÇÃO</strong></mark></p>`;

    } else if (media < 3) {
        saida.innerHTML += `<p>Com média abaixo de 3,0 o aluno está <mark><strong class='vermelho'>REPROVADO</strong></mark></p>`;
    }

    
}