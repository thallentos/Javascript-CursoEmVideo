function Calcular_tabuada()
{
    var text_num = document.querySelector('input#text_num')
    var tabuada = document.querySelector('select#select_tabuada')
    var resultado = document.querySelector('div#resultado')

    if (text_num.value == 0)
    {
        window.alert('Por favor, digite um número que seja diferente de 0!')
    }
    else
    {
        let numero = Number(text_num.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10)
        {
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}