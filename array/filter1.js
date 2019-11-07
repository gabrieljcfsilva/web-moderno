//A função filter percore um array e retorna um novo array aplicando algum tipo de logica que ira filtrar os dados do array original 
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false },
]


const produtoFragil = produto => produto.fragil
const produtoCaro = produto => produto.preco >= 500

console.log(produtos.filter(produtoCaro).filter(produtoFragil))
// console.log(produtos.filter(produto => !produto.fragil))

