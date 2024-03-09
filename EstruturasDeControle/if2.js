//CUIDADO 01

function teste1 (num) {
    if (num > 7) 
        console.log(num)
    
    console.log("Final")
}

teste1(6)
teste1(8)

//O uso das chaves(bloco) na estrutura IF é opcional.

//CUIDADO 02

function teste2 (num) {
    if(num > 7);{
        console.log(num)
    }
}

teste2(6)
teste2(8)

//Não usar ponto e vírgula nas estruturas de controle.
//';' é uma sentença vazia.