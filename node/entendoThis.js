console.log(this === global)
console.log(this === module)

//dentro de um modulo o this aponta para exports
console.log(this === exports)
console.log(this === module.exports)

function logThis() {
    console.log('Dentro da função...')
    console.log(this === exports)
    console.log(this === module.exports)

    //dentro de uma função o this aponta para global // tomar cuidado não atribuir valores para this
    console.log(this === global)
}

logThis()