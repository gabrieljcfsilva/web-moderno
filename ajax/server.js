const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/teste', (req, res) => {
    res.send('OK')
})

//função recebe um objeto para personalizar a pasta onde iremos salvar os arquivos e tbm para personalizar o nome do arquivo que sera salvo
const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './upload')
    },
    filename(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        }

        res.end('concluido com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.listen(3000, () => console.log('Executando...'))