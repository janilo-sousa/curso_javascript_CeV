// Este exercício visa trabalhar com o objeto 'Date'
let saida = document.getElementById('saida');

function coletarInfo() {
    let agora = new Date;
    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`;
}