//Contexto léxico
//O This não varia dentro da função arrow

function pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new pessoa