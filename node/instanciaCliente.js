const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//como a função factory retorna uma função precisamos invocala
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)