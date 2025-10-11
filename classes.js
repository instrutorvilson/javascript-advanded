class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
       return `${this.nome} vc tem ${this.idade} anos.`
    }
}

Pessoa.prototype.saudacao = function(){
    return `Olá ${this.nome}`
}

const p1 = new Pessoa('ana', 25)
console.log(p1.apresentar())
console.log(p1.saudacao())

const p2 = new Pessoa('Pedro', 25)
console.log(p2.apresentar())

/**sobreescreve o prototype de Pessoa */
p2.saudacao = function(){
    return `Olá ${this.nome}, vc é top`
}

console.log(p2.saudacao())

//console.log(Object.getPrototypeOf(p1))
//console.log(Object.getPrototypeOf(p1) == Pessoa.prototype)