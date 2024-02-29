let raio = 6
const PI = Math.PI
let areaCirc = PI * Math.pow(raio,2)

console.log('O valor da circunferencia será',areaCirc,'m2')
console.log(areaCirc.toFixed(2))
console.log(areaCirc.toString(2))
console.log(typeof areaCirc)

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')

//Troca de valores 

let a = 7
let b = 94

let temp = a
a = b
b = temp

console.log(a)
console.log(b)

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')

//Number e alguns cuidados

console.log(7 / 0)
console.log('10' + 2)
console.log('Show' + 2)
console.log('10' - 2)
console.log('10'*2)
console.log('10' / 2)
console.log(0.1 + 0.5)
console.log((0).toFixed(2))

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')

//String

let empresa = 'TeslaX'
console.log(empresa)
console.log(empresa.charAt(0))
console.log(empresa.charAt(1))
console.log(empresa.charCodeAt(1))
console.log(empresa.indexOf('l'))

console.log(empresa.substring(3))
console.log(empresa.substring(0,4))

console.log('A empresa '+ empresa +' é a melhor em avanço de tecnologia')
console.log('Pedro, Tiago, João,'.split("/"))
console.log('Pedro, Tiago, João,'.split("."))
console.log('Pedro, Tiago, João,'.split(","))

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')

//TEMPLATE STRING

let nome = 'Letícia'
let concatenacao = 'Olá ' + nome

const template =`
    Olá
    ${nome}!`
console.log(concatenacao,template)
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('Baixista das cordas graves')}!!!`)

//sintaxe Back-Tics
let text = `Hello World`
console.log(text)

//citações dentro da string
text = `Ele' se acha o "Melhor"`
console.log(text)

//multilinhas
text =`Loja
super legal
aqui na
avenida da
cidade`
console.log(text)

//${} ---> Interpolação

let firstName = "Mamaco" //substituição de variaveis
let lastName = "Calango"

text = `Welcome ${firstName}, ${lastName}!` //permite variáveis em strings
console.log(text)

let price = 10 //substituiçao de expressão
let VAT = 0.30

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`
console.log(total)

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')

//BOOLEAN

//OS VERDADEIROS

console.log(!!50) //números inteiros sempre serão verdadeiros, com exceção do 0
console.log(!!-47)
console.log(!!" ") //Espaço ou texto vazio
console.log(!!'KKKKKKKKKKKKKKKK') //string
console.log(!![]) //Array vazio
console.log(!!{}) //Objeto literal vazio
console.log(!!Infinity) //tipo infinito
console.log(!!(Rede = true)) //atribuição verdadeira

//OS FALSOS

console.log(!!0) 
console.log(!!"") //string vazia
console.log(!!'')
console.log(!!null) 
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || ' '))

let name = "Jack"
console.log(name || "Miranha") //JS trabalha com valores padrões

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')

//ARRAY ///////////

const letras = ['a', 'b', 'c', 'd', 'e','i',' e pregai ', 'o', 'evangelho']
console.log(letras[0],letras[3])
console.log(letras[5],letras[3],letras[4],letras[6],letras[7],letras[8])

letras[4] = 'Ide'
console.log(letras[4])
console.log(letras)
console.log(letras.length) //acessar a quantidade de elementos

letras.push('Mateus 5:5', 777, "BR", true, 1) //adicionar novos elementos
console.log(letras)
console.log(letras.length)

console.log(letras.pop())
console.log(letras)

delete letras[2]
delete letras[5]
console.log(letras)

console.log(typeof letras)


//const cars = ["Saab", "Volvo", "BMW"] -- Método Literal
//console.log(cars)

//É uma prática comum declarar arrays com a palavra-chave const

//let car1 = "Saab"
//let car2 = "Volvo"
//let car3 = "BMW"

//Exemplos
//espaço e quebra de linhas não são importantes

/*const cars = [
    "Saab",
    "Volvo",
    "BMW",
    "Mercedes Benz",
    "Fiat"
]

console.log(cars)

//Você também pode criar um array e depois fornecer os elementos
*/

/*const cars = []
cars[0] = "Saab"
cars[1] = "Volvo"
cars[2] = "BMW"
cars[3] = "Fiat"
cars[4] = "Mercedes Benz"
cars[5] = "Nissan"

console.log(cars)
*/

//Não há necessidade de usar new Array()
//const cars = new Array("Saab", "Volvo", "BMW")
//console.log(cars)

const cars = ["Saab", "Volvo", "BMW"]
let car = cars[1]
console.log(car)

//os objetos usam nomes para acessar seus membros
//elementos da Matriz podem ser objetos

console.log(letras.splice(0,2))
console.log(letras)

console.log(letras.sort())
console.log(Date.now) 

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')

console.log("///////////////// OBJETO ////////////////////")

//01° Forma de criar um objeto
const carro = {}
carro.nome = "Fiat"
carro.model = 500
carro.peso = 850 + "kg"
carro.color = "Branco"

console.log(carro)

const instrumentoMusical = {}
instrumentoMusical.nome = "Contrabaixo Elétrico"
instrumentoMusical.model = "Jazz Bass"
instrumentoMusical.marca = "Fender"
instrumentoMusical.peso = 5.6 + "kg"
instrumentoMusical.escala = "Maple"
instrumentoMusical.corpo = "Basswood"

console.log(instrumentoMusical)

//2° forma de criar um objeto

const Pessoa = {
    nome: "Judah",
    idade: 18,
    altura: 1.80,
    naturalidade: "Manaus",
    DataNasc: "25/01/2006"
}

console.log(Pessoa)

//OBJETO tbm são variáveis, porém podem conter muitos valores
let carros = "Fiat";
console.log(carros)

/*let automv = {}
automv.type = "Fiat"
automv.model = 500
automv.color = "Branco"
*/
let automv = {type: "Fiat", model: 500, color: "White"}
console.log(automv)

console.log("///////////// PERSON /////////////")
const person = {
    firstNamee: "John",
    latsNamee: "Connor",
    age: 39,
    eyeColor: "Blue"
}
console.log(person)

//Espaços e quebras de linha não são importantes
/*
IMPORTANTE:
Os pares nome:valores em objetos JavaScript são
chamados de propriedades
*/

console.log("/// ACESSANDO PROPRIEDADES DO OBJETO ///")

console.log(person.firstNamee)
console.log("// OU //")
console.log(person["firstNamee"])

console.log("/// OBJETOS TAMBÉM PODEM SER MÉTODOS ///")
//Objetos também podem ter métodos
//Método = AÇÃO
//Um método é uma função armazenada como uma propriedade
const Pessoas = {
    PrimeiroNome: "Judah",
    UltimoNome: "Munir",
    idade: 18,
    fullNome: function() {
        return this.PrimeiroNome + " " + this.UltimoNome
    }
}
console.log(Pessoas)

/*
    THIS é uma palavra-chave que se refere a um objeto.
    THIS não é uma variável.
    THIS refere-se a diferentes objetos dependendo de como é usada.
*/

console.log("///////// ACESSANDO MÉTODOS DE OBJETO /////////")

console.log(Pessoas.fullNome()) //O método sem os parenteses retornará a definição da função
console.log("/")
console.log("/")
console.log("/")
console.log("/")
console.log("/// NÃO DECLARE STRINGS, NUMBERS, BOOLEANS COMO OBJECTS ///")

x = new String()
y = new Number()
z = new Boolean()
console.log(String)
console.log(Number)
console.log(Boolean)
console.log(typeof String)

//Evite String, Number e Boolean objetos. Eles complicam seu código
//e diminuem a velocidade de execução.

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/')
console.log("//////////////////// NULL & UNDEFINED /////////////////")

let valor 
console.log(valor)

valor = null
console.log(valor)

//variável sem valor

let xx
if (xx === undefined) {
    text = "xx is undefined"
} else {
    text = "xx is defined"
}
console.log(xx)

let xvi
if (typeof xvi === "undefined") {
    text = "xvi is undefined"
} else {
    text = "xvi is defined"
}
console.log(xvi)

let yy
if (typeof yy === "undefined") {
    txt = "yy is undefined"
} else {
    txt = "yy is defined"
}
console.log(yy)

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/')
console.log("//////////////////// FUNÇÃO /////////////////")

//Função é um bloco de código

function myFunction (p1, p2) {
    return p1 * p2
}

console.log(myFunction(2, 2))
console.log(myFunction(2,9))

//Argumentos de função são os valores recebidos pela função quando 
//ela é invocada.

/*
    Quando o JS atinge uma return instrução, a função irá parar de
    ser executada.
*/

let f = myFunction(4,3)

function myFunction(a, b) {
    return a * b
}
console.log(f)

//Com funções você pode reutilizar código.
//Você pode escrever código que pode ser usado muitas vezes.
//Você pode usar o mesmo código com argumentos diferentes para
//produzir resultados diferentes.

//O operador
function toCelsius (fahrenheit) {
    return (5/9) * (fahrenheit-32)
}

let value = toCelsius(77)
console.log(value)

/////////////

function toCelsius(fahrenheit) {
    return(5/9) * (fahrenheit-32)
}
value = toCelsius
console.log(value)

function ImprimirSoma (a, b) { //função sem retorno
    console.log(a + b)
}

ImprimirSoma (3, 3)
ImprimirSoma (4,5)

function soma (a ,b = 1) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(5))
console.log(soma())

function myFunction() {
    let carName = "Volvo"
}

const imprimirSoma = function (a,b) {
    console.log(a+b)
}

imprimirSoma(2, 2)

const Soma = (a, b) => {
    return a + b
}

console.log(Soma(2,3))

const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2 ("Legal!!!")

console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/////////-/////////////////-///////////////////-/////////////////-///')
console.log('/')
console.log("///////////////////////// Declaração de Variáveis com Var ///////////////////")

//#01 
//- nivel global = visivel na aplicação inteira

{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}

//escopo de função = visivel apenas na função

function teste () {
    var local = 123
    console.log(local)
}

teste()

//#02 

var numero = 1
{
    var numero = 2
    console.log('dentro=', numero)
}
console.log('fora =', numero)

console.log("////////////////// Declaração de Variáveis com let /////////////////")
//escopo global, escopo de função, e escopo de bloco.

let num = 1
{
    let num = 2
    console.log('dentro =',num)
}
console.log('fora =', num)

/* O escopo menor tem preferencia. Como o let tem escopo de blocos mesmo
não sendo uma função, em qualquer bloco, o let vai ter escopo apenas
naquele bloco. Estará visivel apenas no bloco.*/

console.log("//////////// Usando Var em Loop #01 /////////////")

for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log("i =", i)

console.log("////////////////////// Usando Let em Loop #01 /////////////////////////")

for(let i = 0; i < 10; i++){
    console.log(i)
}
//console.log("i =", i) vai dar erro. Não tem como acessar esse escopo fora.

console.log("//////////// Usando Var em Loop #02 /////////////")

//const funcs = []

//for(var i = 0; i < 10; i ++) {
    //funcs.push(function(){
        //console.log(i)
   // })
//}

//funcs[2]()
//funcs[8]()

console.log("//////////// Usando Let em Loop #02 /////////////")

const funcs = []

for(let i = 0; i < 10; i ++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[1]()
funcs[2]()
funcs[3]()
funcs[4]()
funcs[5]()
funcs[6]()
funcs[7]()
funcs[8]()
funcs[9]()

console.log("//////////// HOISTING /////////////")

//Hoisting é o içamento de uma variável. Jogar declarações
//das variáveis definidas com var pra cima.

console.log('a =',an)
var an = 2
console.log('a =',an)

///ou///

var at 
console.log('at =',at)
at = 2
console.log('at=',at)

console.log("//////////// PAR/NOME/VALOR /////////////")

//Esta presente quando se declara uma constante variavel.
//contexto léxico - o local onde a variavel foi definida fisicamente no codigo.

const saudacao = 'opa' //contexto lexico 1

function exec(){
    const saudacao = 'falaa' //contexto lexico 2
    return saudacao
}

console.log(exec())

const cliente = {
    NoMe: 'Pedro',
    Idad: 32,
    Peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        number: 123
    }
}

console.log(cliente)

//par/chave/valor pode ser com a mesma chave, porém em contextos diferentes.

console.log("//////////// NOTAÇÃO PONTO /////////////")

//É a forma que tem de acessar membros e partes de um codigo.

console.log(Math.ceil(6.1)) //Faz arredondamento

const obj1 = {}
    obj1.nome = 'Bola'
    console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log("Exec...")
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()