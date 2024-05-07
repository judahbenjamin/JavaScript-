//sintaxe reduzida
//This fixo
//outro exemplo usando this e comparando com o uso do bind
//cada arquivo do node representa um módulo

//Na função tradicional, o this varia conforme a chamada.
//O this aponta para o objeto global, tanto no browse como no node.
//No arrow, o this aponta para o objeto corrente.
//Module exports
//O this na função arrow não se compara com o bind.
//Função arrow: this mais determinístico

let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)