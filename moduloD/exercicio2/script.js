function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano || fAno.value < 1900){
        window.alert('[erro]Ano inválido')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero='Homem'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'babyboy.jpg')
            } else if (idade >=12 && idade < 18){
                //teen
                img.setAttribute('src', 'teenboy.jpg')
            }else if(idade >=18 && idade < 60){
                //adulto
                img.setAttribute('src', 'adultmale.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'oldmale.jpg')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'babygirl.jpg')
            } else if (idade >=12 && idade < 18){
                //teen
                img.setAttribute('src', 'teengirl.jpg')
            }else if(idade >=18 && idade < 60){
                //adulto
                img.setAttribute('src', 'adultfemale.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'oldfemale.jpg')
            }
        }
        res.innerHTML = `Você é ${genero}, e tem ${idade} anos`
        res.appendChild(img)
    }
}