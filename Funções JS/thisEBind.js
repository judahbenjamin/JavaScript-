//BIND - passa um objeto no qual pode ser resolvido o This.

//Método responsável por armazenar um determinado objeto para ele ser o dono
//da execução daquele método, sempre que aquele método for chamado. 

const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()