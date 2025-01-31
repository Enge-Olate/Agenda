const form = document.getElementById('form')
const contatos = []
let linhas = ''
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nome = document.getElementById('nome')
    const tel = document.getElementById('tel')
    const bodyTable = document.querySelector('tbody')
    contatos.push(nome.value, tel.value)

    let linha = `<tr>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${tel.value}</td>`
    linhas += linha
    bodyTable.innerHTML = linhas
    bodyTable.style.textAlign='center'
    bodyTable.style.backgroundColor='#9ddf9a'
    bodyTable.style.color='#333'
    
    nome.value = ''
    tel.value = ''
})