function myFunction(p1,p2){
    return p1*p2
}

myFunction(2,9)
myFunction(8,9)

let x = funcao(9,0)

function funcao(a, b){
    return a * b
}

//Forma literal

/*function ImprimirNota (media){
    if (media >= 7) {
        console.log("Aprovado!")
    } else if (media <= 6 && media >= 4) {
        console.log("Reprovado!")
    } else if (media <= 4) {
        console.log("Recuperação Paralela!")
    } else {
        console.log("Nota inválida")
    }
}

ImprimirNota(9)
ImprimirNota(3)
ImprimirNota(10)
ImprimirNota(7)
ImprimirNota(6)
ImprimirNota(5.5)
*/

//Armazenar em uma variável

/*
const ImprimirNota = function (media){
    if (media >= 7) {
        console.log("Aprovado!")
    } else if (media <= 6 && media >= 4) {
        console.log("Reprovado!")
    } else if (media <= 4) {
        console.log("Recuperação Paralela!")
    } else {
        console.log("Nota inválida")
    }
}

ImprimirNota(9)
ImprimirNota(2.4)
ImprimirNota(0)
ImprimirNota(NaN)
ImprimirNota("Oi")
ImprimirNota(false)
*/

//Armazenar em um array
const ImprimirNota = [function(a,b){return a * b}]
console.log(ImprimirNota[0](2,2)) 
console.log(ImprimirNota[0](21,2)) 




