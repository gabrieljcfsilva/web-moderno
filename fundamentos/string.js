const escola = 'Cod3r'

//retorna o caractere que está no indice passado se o indice não for encontrado retorna vazio
console.log(escola.charAt(4))

//retorna o valor dentro da tabela unicode
console.log(escola.charCodeAt(3))

//verifica se a letra existe na string e retorna o indice
console.log(escola.indexOf('r'))

//retorna a string apartir do indice passado
console.log(escola.substring(1))
//começa no indice passado e não até a quantidade de caracteres passados
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))

//troca a primeira letra passada pela segunda
console.log(escola.replace(3, 'e'))

//converte uma string em um array
console.log('Ana,Maria,Pedro'.split(','))