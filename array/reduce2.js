const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const retornaBolsista = aluno => aluno.bolsista

//Desafio 1: todos os alunos são bolsistas ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista //faz teste condicional retornando true ou false

const resultado = alunos.map(retornaBolsista).reduce(todosBolsistas)
console.log(resultado)

//Desafio 2: Agum aluno é bolsista ?
const algunsBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(retornaBolsista).reduce(algunsBolsistas))