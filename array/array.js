console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
//se o indice não existir ele retornará undefined
console.log(aprovados[3])
aprovados[3] = 'Paulo'
console.log(aprovados[3])
//adiciona um novo elemento no final do array
aprovados.push('Jose')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

//A função sort ordena o array por ordem alfabetica
aprovados.sort()
console.log(aprovados)

//ao deletar um indice o javaScript coloca undefined na posição deletada
delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']

//primeiro parametro onde pode ser adicionado um novo indice ou excluido o segundo parametro quantos indices serão excluidos e do terceiro parametro em diante elementos que serão adicionados
aprovados.splice(1, 0, 'Elemento1')
console.log(aprovados)


