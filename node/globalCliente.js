require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' //o valor não pode ser mudado pois utilizamos o Object.freeze
console.log(MinhaApp.nome)