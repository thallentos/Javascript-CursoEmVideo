function Contar()
{
    let i = document.querySelector('input#text_início')
    // i == início
    let f = document.querySelector('input#text_fim')
    // f == fim
    let p = document.querySelector('input#text_passo')
    // p == passo
    let resultado = document.querySelector('div#resultado')

    if (f.value == i.value || p.value == 0) 
    {

        resultado.innerHTML = `Impossível contar...`
        //window.alert('[ERRO] Faltam dados!')  
    }
    else
    {
        resultado.innerHTML = 'Contando... <br>'
        let início = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)
        let contador = 0

        if (passo <= 0)
        {
            passo = 1
            window.alert('Passo inválido! Considerando PASSO 1')
        }

        if (início < fim)
        // Contagem crescente
        {
            for (contador = início; contador <= fim; contador += passo)
            {
                resultado.innerHTML += ` ${contador}\u{1F449} ` //esse += é de concatenação
            }
        }
        else
        // Contagem regressiva
        {
            for (contador = início; contador >= fim; contador -= passo)
            {
                resultado.innerHTML += ` ${contador}\u{1F449} ` //esse += é de concatenação
            }
        }
        resultado.innerHTML += ` \u{1F3C1}`
    }
}