const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProducts()) //converte para json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduct(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    })
    res.send(product) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const product = db.deleteProduct(req.params.id)
    res.send(product)
})

app.listen(port, () => {
    console.log(`Server started on port ${port} :D`)
})