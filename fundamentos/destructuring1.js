//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

//podemos atribuir um valor se não existir o atributo na desestruturação
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//desestruturando dados aninhados
const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)