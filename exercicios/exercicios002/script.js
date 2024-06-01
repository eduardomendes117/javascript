function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('fano')
    let res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('(Erro) Verifique os dados e tente novamente!!!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let img = document.getElementById('img')
        let idade = ano - fano.value
        let gênero = ''

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-m.png')
            
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')

            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')

            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-f.png')
            
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-f.png')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.png')

            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')

            }
        }
        res.innerHTML =`Detectamos um ${gênero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}