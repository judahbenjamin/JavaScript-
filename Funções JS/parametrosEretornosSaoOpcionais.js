function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,15,73,11))
console.log(area(5,5))

//Nesse exemplo, em um determinado momento a função pode retornar um valor, e 
//em um outro momento não. Esse exemplo é válido pro JS.
//O JS pode retornar qualquer tipo de dado. Isso o torna uma linguagem muito flexível.
