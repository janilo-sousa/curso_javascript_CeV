let resp = document.getElementById("saida"); // Está variável como não está dentro de nenhum escopo em específico, tem o escopo global, ou seja, pode ser acessada por qualquer função em qualquer parte do programa!

function acao1() {
    resp.innerHTML += `<p>Clicou no primeiro botão</p>`;
}

function acao2() {
    resp.innerHTML += `<p>Clicou no segundo botão</p>`;
}

function acao3() {
    resp.innerHTML += `<p>Clicou no terceiro botão</p>`;
}

function acao4() {
    resp.innerHTML += `<p>Clicou no quarto botão</p>`;
}