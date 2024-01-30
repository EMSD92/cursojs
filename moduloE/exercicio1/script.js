function contar(){
    let ini = document.getElementById('i')
    let fim = document.getElementById('f')
    let pas = document.getElementById('p')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('Erro, faltam dados')
    }else {
        res.innerHTML = 'contando <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <=0){
            window.alert('Passo invalido, considerando passo 1')
            p=1
        }

        if (i < f){
           for(let c = i; c<=f ; c+=p){
            res.innerHTML += `${c} \u{1F449}`
           } 
        }else{
            for(let c = i; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }

}