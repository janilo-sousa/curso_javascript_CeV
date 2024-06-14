// meus objetos dom
let res = document.querySelector("section#res");

function calcular() {
    let ano_nasc = Number(window.prompt("Em que ano você nasceu: ")); // pedindo o ano de nascimento da pessoa

    let agora = new Date; // meu objeto date
    let ano_atual = agora.getFullYear(); // pegando o ano atual através do objeto date

    let idade = ano_atual - ano_nasc; // calculando a idade da pessoa

    // mostrando o resultado
    res.innerHTML = `<p>Quem nasceu em ${ano_nasc} vai completar <strong>${idade}</strong> anos em ${ano_atual}.</p>`
}