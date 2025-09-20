
const btnSalvar = document.getElementById('btnSalvar')

btnSalvar.addEventListener('click', ()=> {
    var inputNome = document.getElementById('nome')
    if(inputNome.value === ''){
        alert('o nome deve ser informado')
        inputNome.focus()
        return
    }
    
    const hospede = {
        nome: inputNome.value, 
        email: document.getElementById('email').value
    }

    const hospedes = JSON.parse(localStorage.getItem('hospedes')) || []
    hospedes.push(hospede)
    localStorage.setItem('hospedes',JSON.stringify(hospedes))
    limparCampos()
    carregaHospedes()
})

const btnCancelar = document.getElementsByClassName('btn-outline-secondary')[0]
btnCancelar.addEventListener('click', () => {
    limparCampos()
})

document.getElementById('cep').addEventListener('blur', () => {
    var urlBase = `http://viacep.com.br/ws/${document.getElementById('cep').value}/json/`
    fetch(urlBase)
    .then(data => data.json())
    .then(resp => {
        document.getElementById('rua').value = resp.logradouro
        document.getElementById('cidade').value = resp.localidade
        document.getElementById('bairro').value = resp.bairro
        document.getElementById('uf').value = resp.uf
    })
})

document.addEventListener('DOMContentLoaded',() => {
    carregaHospedes()
})


function limparCampos(){
    document.getElementById('nome').value = '' 
    document.getElementById('nome').focus()
    document.getElementById('email').value = ''
}

function carregaHospedes(){
    const hospedes = JSON.parse(localStorage.getItem('hospedes')) || []
    let linhas = ''
    for(let i = 0; i < hospedes.length; i++){
       linhas += `<tr><td>${hospedes[i].nome}</td><td>${hospedes[i].email}</td>
       <td><button class='btn btn-outline-danger' onclick=excluir('${hospedes[i].email}')>Excluir</button></td></tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML = linhas
}

function excluir(email){
    console.log(email)
    const hospedes = JSON.parse(localStorage.getItem('hospedes')) || [] 
    for(let i = 0; i < hospedes.length; i++){
        if(hospedes[i].email == email){
            hospedes.splice(i,1)
        }
     }
     localStorage.setItem('hospedes',JSON.stringify(hospedes))
     carregaHospedes() 
}
