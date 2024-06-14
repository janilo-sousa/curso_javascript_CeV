// Neste exercício aprendemos a trabalhar muito com o objeto 'Date' e a usar vários métodos dele

// Objetos DOM
let res = document.getElementById('res');

function analise() {
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    let agora = new Date; // Meu objeto Date
    
    // Métodos do objeto 'Date'
    let dia = agora.getDate(); // pega o número do dia da sema
    let mes = agora.getMonth(); // pega o mês
    let ano = agora.getFullYear(); // pega o ano
    let sem = agora.getDay();  // pega o nome do dia da semana
    let hora = agora.getHours(); // pega as horas
    let min = agora.getMinutes(); // pega os minutos
    let seg = agora.getSeconds(); // pega os segundos

    // Mostrando o resultado no documento
    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`;
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`; // NOTE
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`;
    res.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`; // NOTE
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`;
    res.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`;
    res.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`;
}