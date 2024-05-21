/*
    - São moldes dos objetos criados a partir de uma função.
    - Pode ser criado com atributos públicos ou privados, métodos e quantas funções
    quiser dentro de outra função.
 */

function carro (velocidaMaxima = 200, delta = 5){
    //atributo privado
    let velocidaAtual = 0

    //metodo publico
    this.acelerar = function(){
        if (velocidaAtual + delta <= velocidaMaxima){
            velocidaAtual += delta
        } else {
            velocidaAtual = velocidaMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidaAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)