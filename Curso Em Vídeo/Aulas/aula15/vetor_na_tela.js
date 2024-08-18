/*
Ex1: Fazer alternar as posições de uma array:
*/
num = [1,2,3,4,5]
let posição = 0

// Como procurar um valor específico dentro de um vetor? 
    //console.log(`Posição: ${num.indexOf(6)}`)
        // -1 signfica que não tem

        // Fazendo isso dentro de um loop For atualizado
        /*
        for (posição in num)
        {
            console.log(`Posição: ${num.indexOf(num[posição])}, valor: ${num[posição]}`)
            posição += 1
        }
        */

// Usando loop For da forma normal
/*
for (posição; posição <= num.length; posição+= 1)
{
    console.log(`Posição ${posição}, valor: ${num[posição]}`)
}
*/

// Usando o loop For da forma mais atualizada
/*
for (posição in num)
{
    console.log(`Posição ${posição}, valor: ${num[posição]}`)
}
*/

// Usando o loop While
/*
while (posição <= num.length)
{
    console.log(`${num[posição]}`)
    posição++
}
*/

// Usando o loop Do...While
/*
do
{
    console.log(`${num[posição]}`)
    posição += 1
} while (posição <= num.length)
*/