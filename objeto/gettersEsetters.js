const sequencia = {
    _valor: 1, // convenção para atributos 'privados'
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        this._valor = (valor > this._valor) ? valor : this._valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)