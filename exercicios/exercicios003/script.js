function iniciar() {
    let numero = window.prompt('Digite um número:')
    
    let tipo
    
    if (numero % 2 == 0) {
        tipo = 'PAR'
    } else {
        tipo = 'IMPAR'
    }
    
    let res = document.getElementById('res')
    res.innerHTML = `O numero ${numero} é ${tipo}`
}