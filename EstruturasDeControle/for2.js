//O FOR/IN percorre os atributos de uma determinada estrutura. Por exemplo: Array e Objeto.

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in notas) { //O FOR/IN vai dar o índice de cada um dos elementos.
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa [atributo]}`)
}