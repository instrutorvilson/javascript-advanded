/**mãe */
function Pessoa(nome, idade ){
   this.nome = nome
   this.idade = idade
}

Pessoa.prototype.apresentar = function(){
  console.log(`${this.nome} vc tem ${this.idade} anos.`)
}

/**filha */
function Aluno(nome, idade, curso){
   Pessoa.call(this,nome, idade)
   this.curso = curso
}

Aluno.prototype = Object.create(Pessoa.prototype)
Aluno.prototype.apresentar = function(){
   console.log(`${this.nome} vc tem ${this.idade} anos, e está matriculada em ${this.curso}`) 
}
const a1 = new Aluno('maria',21,'javascript')
a1.apresentar()

const p1 = new Pessoa('Ana',25)
p1.apresentar()