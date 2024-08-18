var idade = 22
console.log(`Você tem ${idade} anos`)

if (idade < 16)
{
    console.log('Você não pode votar')
}
else if (idade < 18 || idade >= 65) 
{
    // já está contando que é maior ou igual a 16
    console.log('Voto opcional')
}
else
{
    // já está contando que é maior que 18 e menor que 65
    console.log('Voto obrigatório')
}