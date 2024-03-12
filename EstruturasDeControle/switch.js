//Switch é uma seleção múltipla.

//Não é uma expressão relacional. Você pode passar valores e tipos pra ele selecionar.

//Por padrão usa-se o Break:
//Executar um dos casos e sair;
//Se não colocar, uma vez que ele executa um case, sai executando os outros abaixo.

//O default pode ficar em qualquer posição. Sendo assim, coloca-se também o break.

//Pode-se colocar vários cases a uma única sentença de código.

//Bloco de código é opcional.

const imprimirResultado = function (nota) {
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida.')
    }
}

imprimirResultado(9.5)
imprimirResultado(8.7)
imprimirResultado(6.55)
imprimirResultado(5.5)
imprimirResultado(3)
imprimirResultado(1.2)
imprimirResultado(0.0)
imprimirResultado(11)
imprimirResultado(-1)

let day
switch (new Date().getDay()) {
    case 0:
        day = "Sunday"
        break
    case 1:
        day = "Monday"
        break
    case 2:
        day = "Tuesday"
        break
    case 3:
        day = "Wednesday"
        break
    case 4:
        day = "Thursday"
        break
    case 5:
        day = "Friday"
        break
    case 6:
        day = "Saturday"
}

console.log("Today is " + day)