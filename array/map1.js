//map mapeia um array e retorna uma array do mesmo tamanho porem com os dados alterados de acordo a sua necessidade
const nums = [1, 2, 3, 4, 5]

//o map recebe três parametros o valor, o indice e o array
let resultado = nums.map(num => num * 2)
console.log(resultado)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

//usando map encadeado
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)