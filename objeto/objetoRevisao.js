//Coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 47
    }],
    calcularSeguro() {
        //....
    }
}

console.log(carro.proprietario.endereco.numero)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)
//retorna undefined pois carro esta declarado porem não existe os condutores
console.log(carro.condutores)

//#ALERTA ao tentar acessar algo que esta undefined retornara um erro
console.log(carro.condutores.length)