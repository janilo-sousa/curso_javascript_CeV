/* ESTRUTURA CONDICIONAL SWITCH -> Para condições múltiplas */

/*
domingo -> 0
segunda -> 1
terça -> 2
quarta -> 3
quinta -> 4
sexta -> 5
sábado -> 6
*/
var dia = 1;
switch (dia) { // -> variável que você quer testar
    case 0: // -> valor que você quer comparar (não aceita expressões lógicas, apenas um único valor)
        console.log("Hoje é Domingo!");
        break; // -> o 'break' é importante para não ir para as linhas de código abaixo!

    case 1:
        console.log("Hoje é Segunda-feira!");
        break;

    case 2:
        console.log("Hoje é Terça-feira!");
        break;

    case 3:
        console.log("Hoje é Quarta-feira!");
        break;

    case 4:
        console.log("Hoje é Quinta-feira!");
        break;

    case 5:
        console.log("Hoje é Sexta-feira!");
        break;

    case 6:
        console.log("Hoje é Sábado!");
        break;

    default:
        console.log("Digite um dia válido!");
        break;
}