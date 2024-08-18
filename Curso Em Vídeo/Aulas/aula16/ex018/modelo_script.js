let text_num = document.querySelector('input#text_num')
let lista = document.querySelector('select#text_lista')
let resultado = document.querySelector('div#resultado')
let valores = []

function é_numero(n)
{
    if (Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

function está_na_lista(n, l)
{
    if (l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
}


function adicionar()
{
    if (é_numero(text_num.value) && !está_na_lista(text_num.value, valores))
    {
        número = Number(text_num.value)
        valores.push(número)
        let item = document.createElement('option')
        item.text = `Valor ${número} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }
    else
    {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num = ''
    num.focus()
}

function finalizar()
{
    if (valores.length == 0)
    {
        window.alert('Adicione valores antes de finalizar')
    }
    else
    {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let posição
        let soma = 0
        let média = 0
        for (posição in valores)
        {
            soma += valores[posição]
            if (valores[posição] > maior)
            {
                maior = valores[posição]
            }
            if (valores[posição] < menor)
            {
                menor = valores[posição]
            }

        }
        média = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Temos, ao todo, ${total} números cadastrados</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média de todos os valores é ${média}</p>`
    }
}

function resetar()
{
    window.alert('Para recomeçar, carregue a página novamente!')
}