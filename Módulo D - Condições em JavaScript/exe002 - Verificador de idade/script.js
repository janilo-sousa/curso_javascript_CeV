function verificar() {
    let agora = new Date;
    let ano_atual = agora.getFullYear();

    // objetos dom
    let f_ano = document.getElementById('txtano');
    let saida = document.querySelector('div#saida');

    // pequena validação de dados
    if (f_ano.value.length == 0 || Number(f_ano.value) > ano_atual) {
        window.alert('Erro, verifique os dados e tente novamente');
    } else { // o usuário digitou os dados certos
        let f_sex = document.getElementsByName('radsex');
        let idade = ano_atual - Number(f_ano.value);

        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(f_sex[0].checked) {
            genero = 'Masculino';
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'images/homem-crianca.png');

            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'images/homem-jovem.png');

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'images/homem-adulto.png');

            } else {
                // idoso
                img.setAttribute('src', 'images/homem-idoso.png');

            }

        } else if (f_sex[1].checked) {
            genero = 'Feminino';
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'images/mulher-crianca.png');

            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'images/mulher-jovem.png');

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'images/mulher-adulta.png');

            } else {
                // idoso
                img.setAttribute('src', 'images/mulher-idosa.png');

            }

        }
        saida.style.textAlign = 'center';
        saida.innerHTML = `<p>Detectamos uma pessoa do gênero ${genero} com ${idade} anos de idade.</p>`;
        saida.appendChild(img);
    }
}