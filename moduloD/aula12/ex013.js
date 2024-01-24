var agora = new Date()
var diaSem = agora.getDay()

/*
Dom = 0
lun = 1
mar = 2
mie = 3
jue = 4
vie = 5
sab = 6
*/
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miercoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Erro!')
}