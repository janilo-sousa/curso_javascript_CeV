// meus objetos dom
let res = document.querySelector("section#res");

function iniciar() {
    let n1 = Number(window.prompt("Digite o primeiro valor: "));
    let n2 = Number(window.prompt("Digite o segundo valor: "));

    let ope = Number(window.prompt(`Valores informados: ${n1} e ${n2}\nO que você quer fazer com os dois?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir\n`));

    res.innerHTML = `<h2>Calculando... </h2>`;

    switch (ope) {
        case 1:
            res.innerHTML += `${n1} + ${n2} = <strong>${n1 + n2}</strong>`;
            break;

        case 2:
            res.innerHTML += `${n1} - ${n2} = <strong>${n1 - n2}</strong>`;
            break;

        case 3:
            res.innerHTML += `${n1} x ${n2} = <strong>${n1 * n2}</strong>`;
            break;

        case 4:
            res.innerHTML += `${n1} / ${n2} = <strong>${(n1 / n2).toLocaleString("pt-br")}</strong>`;
            break;

        default:
            res.innerHTML += `<p><strong>OPÇÃO INVÁLIDA!</strong> Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`;
            break;
    }
}