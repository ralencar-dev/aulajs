let seg, hr, mim, dias

seg = parseFloat(prompt(`Digite um tempo em segundos`))

mim = (seg/60).toFixed(0)
hr = (mim /60).toFixed(0)
dias = (hr/24).toFixed(0)

document.write(`O tempo é de ${dias}d:${hr}h:${mim}mim`)



