// meus objetos dom
let txt = document.querySelector('div#txt');
let img = document.querySelector('img#img');

// pegando a hora do sistema
let agora = new Date;
let hora = agora.getHours();

// fazendo as condições
txt.innerHTML = `<p>Agora são ${hora} horas.</p>`;
if (hora >= 5 && hora < 12) { // manha
    img.src = 'images/manha.jpg';
    document.body.style.background = '#dbca6b';

} else if (hora < 18 && hora >= 12) { // tarde
    img.src = 'images/tarde.jpg';
    document.body.style.background = '#db9d6b';

} else if ((hora >= 18 && hora <= 23) || (hora >= 0 && hora < 5)) { // noite
    img.src = 'images/noite.jpg';
    document.body.style.background = '#4d4d4d';
}