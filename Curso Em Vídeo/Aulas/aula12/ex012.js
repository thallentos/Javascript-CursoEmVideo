var horario_atual = new Date()
var horario = horario_atual.getHours()
var minutos = horario_atual.getMinutes()
var segundos = horario_atual.getSeconds()
console.log(`Agora são exatamente ${horario} horas, ${minutos} minutos e ${segundos} segundos`)
if (horario >= 0 && horario < 5)
{
    console.log('Boa madrugada!')
}
else if (horario < 12)
{
    // já está contando que é maior ou igual a 5
    console.log('Bom dia!')
}
else if (horario < 18)
{
    // já está contando que é maior ou igual a 12
    console.log('Boa tarde!')
}
else
{
    // já está contando que é maior ou igual a 18
    console.log('Boa noite!')
}