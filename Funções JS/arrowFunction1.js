//Ser mais curta, sintaxe mais reduzida
// This que não varia, associado ao contexto no qual a função foi escrita
//Sempre é uma função anônima. Tem que estar armazenado numa variável ou constante

let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI).toFixed(4))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um param
console.log(ola())