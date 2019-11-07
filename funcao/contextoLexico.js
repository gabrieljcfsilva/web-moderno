const valor = 'Global'

//a função carrega o escopo onde foi definida
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()