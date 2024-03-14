//Usado para a quantidade indeterminada de condições.
//Use uma estrurtura de controle para uma necessidade específica.
//O While irá continuar executando o código até o valor ser falso.
//O While é seguido de uma expressão e essa expressão pode ser verdadeiro ou falso.

//WHILE
//- Pode não executar nada.
//- Executa X quantidade de vezes.
// - É uma estrutura de repetição baseado na expressão, seja essa verdadeiro ou falso.
// Se for verdadeiro, o código continua sendo executado.
// Se for falso, o laço termina.

function getInteiroAleatorioEntre (min,max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre (-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')