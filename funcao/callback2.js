const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

//sem callback
let notasBaixas = []

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com Callback

notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota > 7
notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)