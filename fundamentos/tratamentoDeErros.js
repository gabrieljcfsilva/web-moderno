function tratarErroElancar(error) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'Mensagem'
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroElancar(error) 
    } finally { //sempre seja chamado
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }

imprimirNomeGritado(obj)