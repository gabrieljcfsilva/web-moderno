Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

//retornar um array apenas com os preços
const paraObjeto = json => {
    const newJson = JSON.parse(json)
    return newJson.preco
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kid de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


const resultado = carrinho.map2(paraObjeto)
console.log(resultado)