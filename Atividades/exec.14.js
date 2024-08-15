
let titulo = prompt("Digite o título do filme:");
let duracaoMinutos = parseInt(prompt("Digite a duração do filme em minutos:"));


let horas = Math.floor(duracaoMinutos / 60);
let minutos = duracaoMinutos % 60;


document.write(`Filme: ${titulo} <br>`);
document.write(`Duração: ${horas}h ${minutos}min`);
