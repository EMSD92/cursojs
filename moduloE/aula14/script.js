function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('content')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12){
        //buenos dias
        img.src = 'manha.jpg'
        document.body.style.background = '#010101'
    }else if (hora >= 12 && hora < 18){
        //Buenas tardes
        img.src = 'tarde.jpg'
        document.body.style.background = '#555555'
    }else{
        //Buenas noches
        img.src = 'noite.jpg'
        document.body.style.background = '#444444'
    }
    
}