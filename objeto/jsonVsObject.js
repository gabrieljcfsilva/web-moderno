//JSON é um formato textual para envio e recebimento de dados
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

//formato incorreto
//console.log(JSON.parse("{ a: 1, b: 2, c:3 }"))

//formato incorreto
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c':3 }"))

//formato Correto todos os atributos devem estar com aspas duplas e os valores dos atributos do tipo texto
console.log(JSON.parse('{ "a": 1, "b": 2, "c":3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e":[] }'))