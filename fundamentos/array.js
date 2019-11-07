const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

//adiciona valores em um array
valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

//remove o ultimo valor de um array
valores.pop()
console.log(valores)

//tipo object
console.log(typeof valores)