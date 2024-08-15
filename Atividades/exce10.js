let valor, porcetagem, valorfinal

valor = parseFloat(prompt("Digite o custo do produto: "))
document.write(valor, "<br>")

porcetagem = parseFloat(prompt("Quantos porcento sera acresncentado em cima do valor do produto"))
document.write(porcetagem, "<br>")

valorfinal = ((porcetagem*valor)/100)+valor

document.write(`O valor do produto sera de ${valorfinal} Reais`)