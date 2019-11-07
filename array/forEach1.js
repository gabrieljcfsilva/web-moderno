const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//o metodo forEach recebe três parametros o valor do array o indice e o array em si
aprovados.forEach((nome, indice, array) => 
    console.log(`${indice + 1}: ${nome}`, array)
)

aprovados.forEach(nome => console.log(nome))

const exibirAprovaods = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovaods)

