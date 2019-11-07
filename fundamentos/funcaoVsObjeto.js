console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}

console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {
    soma(a, b) {
        console.log(a + b)
    }
} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)

const produto = new Produto
produto.soma(5, 6)