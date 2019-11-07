// pessoa -> aponta para um endereco de memoria e o endereco aponta para o objeto
const pessoa = { nome: 'João' }
//Não estou mudando o endereco de memoria mais o dado
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- recebe um novo objeto e assim mudara o endereço de memoria, #ISSO NÃO SERÁ POSSÍVEL# retorna erro
//como constante ele sempre apontara para o primeiro endereço de memoria relacionado
//pessoa = { nome: 'Ana' }

//metodo de Object congela o objeto e assim não podemos mecher nos dados do objeto
Object.freeze(pessoa)
pessoa.nome = 'Maria' // não irá alterar o nome, nem irá adicionar novos atributos, nem deletar atributos
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)

//o objeto já será criado congelado
const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)