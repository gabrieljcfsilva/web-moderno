const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kid de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//retornar um array apenas com os preços
const paraObjeto = json => {
    const newJson = JSON.parse(json)
    return newJson.preco
}

const resultado = carrinho.map(paraObjeto)
console.log(resultado)