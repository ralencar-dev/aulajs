let salario, percentual, novo

salario = parseFloat(prompt("Digite seu salario"))
document.write(`Seu salrio é de ${salario} reais`, "<br>")

percentual = parseFloat(prompt(`Digite o percentual de aumento do seu salario`))
document.write(`O percentual é de ${percentual}%`)

novo = (salario*percentual)/100+salario

alert(`seu novo salario é de ${novo} reais`)
