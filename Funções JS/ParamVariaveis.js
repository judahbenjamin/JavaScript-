function soma() {
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2,"Teste"))
console.log(soma("a","b","c"))

/*
    Em uma função sem parâmetros, pode-se passar um parâmetro.

    Arguments - array interno de uma função que tem todos os argumentos
    que foram passados.

    No Arguments, pode-se passar quantos argumentos(parâmetros) que quiser.

    Toda função tem o Arguments disponível.

    Quando não se passa nenhum parâmetro, esse array está vazio.
*/