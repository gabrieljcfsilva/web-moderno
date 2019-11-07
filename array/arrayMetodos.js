const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

//adciona um elemento no final do array
pilotos.push('Verstappen')
console.log(pilotos)

//remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

//adiciona um elemento no inicio do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos de um array

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//retorna um novo array apartir do indice passado no parametro
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

//retorna um novo array apartir do primeiro indice passado por parametro até o segundo parametro passado, não inclui o indice passado
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)