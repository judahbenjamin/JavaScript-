//Essa estrutura é parecida com o WHILE.
//O DO vem antes do bloco.
//A expressão WHILE vem depois do bloco.
//Garante que pelo menos uma vez haja execução do laço.
//Essa é a única estrutura de controle em que a expressão está depois do bloco. 
//Não muito utilizado.

function getInteiroAleatorioEntre (min,max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao 

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
} while(opcao != -1)

console.log('Até a próxima')

// No caso Do/While não é necessário atribuir um valor inicial para a variavel opcao.
//Sendo assim, isso garante que a estrutura vai rodar pelo menos uma vez.