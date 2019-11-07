//Object.preventExtensions não permite que nenhum atributo seja adicionado ao objeto porem podemos deletar atributos e alterar seus valores
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

//função Object.isExtensible verifica se o objeto pode receber novos atributos, retorna true ou false
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha'
//não será atribuido
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

//Object.seal a função faz com que os objetos não possam ter seus atributos excluidos ou adicionar novos atributos porem permite alterar seus valores
const pessoa = { nome: 'Juliana', idade: 36 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
//Não sera adicionado
pessoa.sobrenome = 'Silva'
//Não sera aplicado
delete pessoa.nome
//pode ser alterado
pessoa.idade = 26

console.log(pessoa)

//Object.freeze o objeto sera selado e os valores serão constantes não poderão ser alterados

const aluno = { turma: 1, notas: [7, 5.5, 8.9] }
Object.freeze(aluno)
//retorna se o objeto esta congelado retorna true e false
console.log(Object.isFrozen(aluno))
//Não será aplicado
delete aluno.turma
//Não será aplicado
aluno.nome = 'Jose'
console.log(aluno)