const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//ler um arquivo de forma sincrona, não recomendado
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//ler um arquivo de forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.db.host, ':', config.db.port)
})

//também trabalha de forma sincrona e já converte para objeto
const config = require('./arquivo.json')
console.log(config.db)

//leitura de pastas assincrono
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})