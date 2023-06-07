let btn = document.querySelector('.btn')
    btn.addEventListener('click', function() {
    var input_nome = document.querySelector('#nome')
    var nome = String(input_nome.value)
    var input_pais = document.querySelector('#pais')
    var Pais = String(input_pais.value)
    var resultado = document.querySelector('.res')
    var pais = 'Brasil'

    if (Pais == pais) {
        resultado.innerHTML = `Olá ${nome}, você é Brasileiro(a)!`
    } else {
        resultado.innerHTML = `Olá ${nome}, você é estrangeiro(a)!`
    }
})