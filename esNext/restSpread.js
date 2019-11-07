//Operador ... rest(juntar)/spread(espalhar)

//trabalhando com spread em objetos
const functionarios = { nome: 'Maria', salario: 12345.78 }
const clone = { ativo: true, ...functionarios }
console.log(clone)

//trabalhando com spread em arrays
const grupoA = ['Ana', 'Julia', 'Pedro']
const grupoFinal = ['Rafaela', ...grupoA, 'Judite']
console.log(grupoFinal)

//trabalhando com rest função, gera um array
const clientes = (...cliente) => console.log(cliente)
clientes('Ana', 'Maria', 'Telma')