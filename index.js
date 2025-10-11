function Pessoa(nome, idade ){
   this.nome = nome
   this.idade = idade
}

Pessoa.prototype.apresentar = function(){
  console.log(`${this.nome} vc tem ${this.idade} anos.`)
}

Pessoa.prototype.verificarIdade = function(){
    if(this.idade < 18){
       return "Menor de idade"  
    }
    return "Maior de idade"
}
const p1 = new Pessoa('Ana',25)

console.log(p1.nome)  /**ana vc tem 25 anos. */
p1.apresentar()
console.log(p1.verificarIdade())

const p2 = new Pessoa("Pedro",17)

console.log(Object.getPrototypeOf(p1) === Pessoa.prototype)
console.log(Pessoa.prototype)