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
console.log(ImprimirNota[0](33,9)) 
console.log(ImprimirNota[0](11,0)) 
console.log(ImprimirNota[0](91,2)) 


const Calcular = [function(n1,n2,n3){return n1 + n2 * n3}]
console.log(`O cálculo é: ${Calcular[0](3,2,7)}`)
console.log(`O cálculo é: ${Calcular[0](3,3,3)}`)
console.log(`O cálculo é: ${Calcular[0](1,9,7)}`)

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

const produtos = {}
produtos.produto1 = function(a,b){return a + b}
produtos.produto2 = function(){return "Arroz"}
produtos.produto3 = function(){return "Macarrão"}
produtos.produto4 = function(){return "Carne"}

console.log(produtos.produto1(2,2))
console.log(produtos.produto2())
console.log(produtos.produto3())
console.log(produtos.produto4())

//Passar função como parâmetro

/*
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

function comidas(nome_comida){
    nome_comida()
}

comidas(function(){console.log("LASANHAAA")})
comidas(function(){console.log("LINGUIÇA")})
comidas(function(){console.log("CACHORRO QUENTE")})
comidas(function(){console.log("PIPOCAAA")})
comidas(function(){console.log("ESTROGONOFEEE")})
*/

//Uma função pode retornar/conter uma função

/*
function soma (a,b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma (2,3)
cincoMais(4)
cincoMais(0)
*/


//RELEMBRANDO...


function multiplicacaoEsoma (a,b,c) {
    return function(d) {
        console.log(a + b * c * d)
    }
}

multiplicacaoEsoma(2,3,9)(1)

const Calculando = multiplicacaoEsoma(2,3,9)
Calculando(9)
Calculando(2)
Calculando(5)

function musica(instrumentos){
    instrumentos()
}

musica(function(){console.log("2 instrumentos")})
musica(function(){console.log("Contrabaixo Elétrico")})
musica(function(){console.log("Guitarra")})
musica(function(){console.log("Violão de aço")})
musica(function(){console.log(102.29)})
musica(function(){console.log(true)})
musica(function(){console.log(NaN)})

const Musica = {}
Musica.instrumento1 = function() {return "Contrabasso"}
Musica.instrumento2 = function() {return "Guitarra"}
Musica.instrumento3 = function() {return "Violão"}
Musica.instrumento4 = function() {return "Cajon"}

console.log(Musica.instrumento1())
console.log(Musica.instrumento2())
console.log(Musica.instrumento3())
console.log(Musica.instrumento4())


const Produto = function divisao (a,b) {
    return a / b
}

let result = myFunction(2,2)
Produto (2,2)

const instrumentos = [function(Nome_instrumento){return Nome_instrumento}]
console.log(instrumentos[0]("Baixo"))
console.log(instrumentos[0]("Basso"))
console.log(instrumentos[0]("Double Bass"))
console.log(instrumentos[0]("Contrabaixo Acústico"))
console.log(instrumentos[0]("Contrabaixo Elétrico"))
console.log(instrumentos[0]("Baixolão"))





