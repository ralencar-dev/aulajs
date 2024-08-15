let a, b
let O

a = parseFloat(prompt(`Digite o valor de A`))
b = parseFloat(prompt(`Digite o valor de B`))

O = a
a = b
b = O

document.write(`O valor de A é: ${a} <br>`)
document.write(`O valor de B é: ${b}<br>`)

sub = a - b

document.write(`O valor da sub de ${a} - ${b} = ${sub}`)