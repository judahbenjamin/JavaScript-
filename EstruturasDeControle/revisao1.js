//IF, ELSE, ELSE IF

let hora = 10

function horario (hora) {
    if (hora >= 0 && hora <= 6 ) {
        console.log("Boa Madrugada!")
    } else if (hora >= 6 && hora <= 11) {
        console.log("Bom dia!")
    } else if (hora >= 12 && hora <= 17) {
        console.log("Boa tarde!")
    } else if (hora >= 18 && hora <= 23) {
        console.log("Boa noite!")
    } else {
        console.log("Tempo doido!")
    }
}

horario(0)
horario(1)
horario(2)
horario(3)
horario(10)
horario(6)
horario(7)
horario(15)
horario(18)
horario(1990)

x = 10
y = 2

if (x > y) {
    console.log(`O ${x} é maior`)
} else {
    console.log(`O ${y} é maior`)
}

//SWITCH

function ImprimirNota (nota) {
    switch(nota) {
        case 10:
            console.log("Parabéns, você é DEZ!")
            break
        case 9: case 8:
            console.log("Aprovado!")
            break
        case 7:
            console.log("Você está na Média!")
            break
        case 6: case 5: case 4:
            console.log("Reprovado!")
            break
        case 3: case 2: case 1:
            console.log("Recuperação Paralela!")
            break
        default:
            console.log("NOTA INVÁLIDA!")
    }
}

ImprimirNota(10)
ImprimirNota(7)
ImprimirNota(6)
ImprimirNota(5)
ImprimirNota(4)
