function carregar() {
    //variaveis
    let nome = window.prompt('Qual é seu nome?')
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()                             //data atual do sistema
    let hora = data.getHours()                        //hora atual do sistema
    msg.innerHTML = `Agora são ${hora} horas.`

    //condições
    if (hora >= 0 && hora <= 12) {
        //bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#ddc23c'
        window.alert(`Bom dia, ${nome}`)
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#dd853c'
        window.alert(`Bom tarde, ${nome}`)
    } else {
        //boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#636363'
        window.alert(`Bom noite, ${nome}`)
    }
}