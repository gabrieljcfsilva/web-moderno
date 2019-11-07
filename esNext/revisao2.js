//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//arrow function this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(text = 'Node') {
    console.log(text)
}

log()
log('Sou mais forte!')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(num => total += num)
    return total
}

console.log(total(1, 2, 3))