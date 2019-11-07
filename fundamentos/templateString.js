const nome = 'Rebeca'
const concatenacao = `Olá ${nome}!`

console.log(concatenacao)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

//usando funções dentro de template string
const up = string => string.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)