//SetInterval = dispara uma outra função a partir de um determinado intervalo passado. 

function pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new pessoa