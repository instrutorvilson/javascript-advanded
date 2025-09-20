/*
function soma(n1, n2){
    return n1 + n2
}

const resultado = soma(10,20)
console.log(resultado)

function imprimir(dados){
    console.log(dados)
}
imprimir('Ola pessoal')

var x = soma
console.log(x(20,50))

var produto = function(n1, n2) { return n1 * n2}
console.log(produto(5,3))

var divisao = (n1, n2) => {return n1 / n2 }
console.log(divisao(10,2))

var dobro = n1 => {return n1 * 2 }
console.log(dobro(3))
*/
function display(dado){
    console.log(`O resultado é: ${dado}`)
}

function show(dado){
    console.log(`X: ${dado}`)
}

function triplo(n1, callBack){
    callBack(n1 * 3)
}

triplo(10, display)
triplo(20, show)