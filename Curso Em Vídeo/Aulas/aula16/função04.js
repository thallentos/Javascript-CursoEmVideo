function fatorial(n)
{
    let fat = 1
    //let contador = n
    for(n; n > 1; n--)
    {
        fat *= n // o fat acumuula as multiplicações
    }
    return fat
}

console.log(fatorial(5))