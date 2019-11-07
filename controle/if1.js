function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdaeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdaeEuFalo()
seForVerdaeEuFalo(null)
seForVerdaeEuFalo(undefined)
seForVerdaeEuFalo(NaN)
seForVerdaeEuFalo('')
seForVerdaeEuFalo(0)
seForVerdaeEuFalo(-1)
seForVerdaeEuFalo(' ')
seForVerdaeEuFalo('?')
seForVerdaeEuFalo([])
seForVerdaeEuFalo([1, 2, 3])
seForVerdaeEuFalo({})