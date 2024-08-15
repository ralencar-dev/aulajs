let nome
let salario, vendas, comissao, novo

nome = prompt("Digite seu nome")
document.write(nome, "<br>")

salario = parseFloat(prompt(`Digite seu salario ${nome}:`))
document.write(`Seu salario é de ${salario} reais`, "<br>")

vendas = parseFloat(prompt("Digite o valor das suas venda desse mes"))
document.write(`Suas vendas faturaram ${vendas} reais`, "<br>")

comissao = (vendas*15)/100
document.write(`Sua comissao é de ${comissao} reais`, "<br>")
novo = (comissao + salario)
document.write(`Seu novo salario sera de ${novo} reais`)
