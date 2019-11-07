const pessoa = {
    nome: 'Recebça',
    idade: 2,
    peso: 13
}

//retorna todas as chaves de um objeto OBS: retorna em forma de array
console.log(Object.keys(pessoa))

//retorna os valores um objeto OBS: retorna em forma de array
console.log(Object.values(pessoa))

//retorna um array externo composto com os dados do objeto
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//usando o operador destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//define uma propriedade de um objeto, definimos algumas caracteristicas como pode ser alterada ou não ou se sera visivel
//parametros darget = onde sera atribuido essa propriedade. Nome da propriedad. terceiro: um objeto com todas as caracteristicas da propriedade
Object.defineProperty(pessoa, 'dataNascimento',
    {
        enumerable: true, //pode ser listada
        writable: false, //não podera ser alterada
        value: '01/01/2019' //valor atribuido a propriedade
    }
)

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ESC6)
//concatena varios objetos em um
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

//Object.freeze
Object.freeze(obj)
obj.c = 123
console.log(obj)