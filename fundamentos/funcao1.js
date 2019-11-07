//Função sem retrno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(4, 5))
console.log(soma(4))
console.log(soma())