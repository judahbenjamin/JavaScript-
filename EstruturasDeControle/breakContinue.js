//BREAK e CONTINUE = desvio de fluxos

/*
BREAK:

- Não influencia no bloco do tipo if
- Switch(SAÍDA), For e While
- O break causa desvio de fluxo pra fora do laço mais próximo
que ele suporta.
*/

/*
CONTINUE:

- For e While
- O continue interrompe a repetição corrente e vai para a próxima repetição.
*/

const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if(x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Nunca usar esse rótulo
externo: for(a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
console.log("Fim!")