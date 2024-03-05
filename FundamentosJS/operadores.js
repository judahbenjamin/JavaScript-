//REVISÃO 
//JUDAH BENJAMIN
//DATA: 04/03/2024

console.log("////// OPERADORES DE ATRIBUIÇÃO //////")

const a = 7
let b = 3

b += a //b = b + a  
console.log(b)

b -= 4 // b = b - 4
console.log(b)

b *= 2 //b = b * 2
console.log(b)

b /= 2 //b = b / 2
console.log(b)

b %= 2 //b = b % 2
console.log(b)


console.log("////// OPERADORES DESTRUCTURING //////")

//DESTRUCTURING #01

//É um operador de desestruturação, ou seja, tira da estrutura(objeto)
//alguma coisa. Uma forma de extrair dentro do seu objeto os seus atributos.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        Numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, Numero, cep}} = pessoa
console.log(logradouro,Numero, cep)

//Cuidado para não acessar atributos que não existem de forma aninhada.

//DESTRUCTURING #02

//Array

const [A] = [10]
console.log(A)

const [n1,,n3,,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)

//DESTRUCTURING #03

//Função

function rand ({min = 0, max = 1000} = {}){
    const valor = Math.random()*
    (max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand())

//DESTRUCTURING #04
//Array dentro dos parametros de uma função

/*function rand [(min = 0, max = 1000)] {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
//console.log(rand())
*/


console.log("/////////////////// OPERADORES ARITMÉTICOS //////////////////")

const [aa, bb, c, d] = [3, 5, 1, 15]

const soma = aa + bb + c + d
const subtracao = d - bb
const multiplicacao = aa * bb
const divisao = d / aa
const modulo = aa % 2

console.log(soma,subtracao,multiplicacao,divisao,modulo)

console.log("/////////////////// OPERADORES RELACIONAIS //////////////////")

//O resultado sempre dará verdadeiro ou falso. Dentro de laços ou testes condicionais.

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)','3' != 3)
console.log('04)','3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date (0)
const d2 = new Date (0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

console.log("/////////////////// OPERADORES LÓGICOS //////////////////")

// V e V = V
//V e F = F
// F e ? = F
//Op1 e op2  e op3 e op4 = V
//V ou ? = V
//F ou V = V
//F ou F = F

//!V = F
//!F = V

//V xor V = F
//V xor F = V
//F xor V = V
//F xor F = F

function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unario

    return [comprarSorvete, comprarTv50, comprarTv32, manterSaudavel]
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

console.log("/////////////////// OPERADORES UNÁRIOS //////////////////")

//Unico valor cooperando
//2 formas = pre-fixada e pos-fixada

let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

//Deixe o seu código mais simples o possível

console.log("/////////////////// OPERADORES TERNÁRIO //////////////////")

//3 operandos

const resultado = nota => nota >= 7?
'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.3))