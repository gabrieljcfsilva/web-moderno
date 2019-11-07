const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getMulheres = funcionario => funcionario.genero === 'F'
const getMulheresChinesas = mulher => mulher.pais === 'China'
const getMulherComMenorSalario = (atual, proximo) => {
    return atual.salario < proximo.salario  ? atual : proximo
}

axios.get(url).then(response => {
    const funcionarios = response.data

    console.log(funcionarios
        .filter(getMulheres)
        .filter(getMulheresChinesas)
        .reduce(getMulherComMenorSalario))
})

//obter a mulher chinesa com menor salário
