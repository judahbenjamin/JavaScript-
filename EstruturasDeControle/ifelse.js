const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}

imprimirResultado(9)
imprimirResultado(5)
imprimirResultado("Epa!")

//Cuidado com a tipagem fraca do JS
