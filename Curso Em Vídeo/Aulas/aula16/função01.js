function par_ou_impar(num)
{
    if (num % 2 == 0)
    {
        return 'Par'
    }
    else
    {
        return 'ímpar'
    }
}

let resultado = par_ou_impar(4)
console.log(resultado)