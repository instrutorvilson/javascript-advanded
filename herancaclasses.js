class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
       return `${this.nome} vc tem ${this.idade} anos.`
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, curso){
        super(nome, idade)
        this.curso = curso
    }
    estudar(){
       return `${this.nome} vc está matriculado em ${this.curso}` 
    }
}

const p1 = new Pessoa('ana',25)
console.log(p1.apresentar())

const a1 = new Aluno('Pedro', 21, 'javascript')
console.log(a1.apresentar())
console.log(a1.estudar())