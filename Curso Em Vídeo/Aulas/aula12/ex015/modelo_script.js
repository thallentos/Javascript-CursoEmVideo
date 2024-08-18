function verificar_idade_sexo()
{
    var data = new Date()
    var ano_atual = data.getFullYear()
    //var mes_ano_atual = data.getMonth()
    //var text_mes_nascimento = window.document.querySelector('input#text_mes_nascimento')
    //var mes_nascimento = Number(text_mes_nascimento.value)
    var resultado = window.document.querySelector('div#resultado')
    var ano_nascimento_text = window.document.querySelector('input#text_ano_nascimento')
    var ano_nascimento = Number(ano_nascimento_text.value)
    var homem_text = window.document.querySelector('input#homem')
    var mulher_text = window.document.querySelector('input#mulher')

    if (ano_nascimento == 0 || ano_nascimento > ano_atual)
    {
        window.alert('[ERRO]Verifique os dados do ano que você nasceu e tente novamente!')
    }
    /*else if (mes_nascimento < 1 || mes_nascimento > 12)
    {
        window.alert('[ERRO]Verifique os dados do mês nascimento e tente novamente!')
    }
    */
    else
    {
        var sexo = document.getElementsByName('sexo')
        var idade_ano = (ano_atual) - (ano_nascimento)
        //var idade_mes = (mes_ano_atual) - (mes_nascimento)
        //var idade_mes_ano = idade_ano
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        gênero = ''
        if (sexo[0].checked)
        {
            gênero = 'Homem'
            if (idade_ano >= 0 && idade_ano < 4)
            {
                //Bebê
                img.setAttribute('src', 'menino_bebê.jpg')
            }
            else if (idade_ano < 12)
            {
                //Criança
                img.setAttribute('src', 'menino_criança.jpg')
            }
            else if (idade_ano < 18)
            {
                //Adolescente
                img.setAttribute('src', 'menino_adolescente.jpg')
            }
            else if (idade_ano < 30)
            {
                //Jovem
                img.setAttribute('src', 'homem_jovem.jpg')
            }
            else if (idade_ano < 50)
            {
                //Adulto
                img.setAttribute('src', 'homem_adulto.jpg')
            }
            else
            {
                //Idoso
                img.setAttribute('src', 'homem_idoso.jpg')
            }
        }
        else
        {
            gênero = 'Mulher'
            if (idade_ano >= 0 && idade_ano < 4)
            {
                //Bebê
                img.setAttribute('src', 'menina_bebê.jpg')
            }
            else if (idade_ano < 12)
            {
                //Criança
                img.setAttribute('src', 'menina_criança.jpg')
            }
            else if (idade_ano < 18)
            {
                //Adolescente
                img.setAttribute('src', 'menina_adolescente.jpg')
            }
            else if (idade_ano < 30)
            {
                //Jovem
                img.setAttribute('src', 'mulher_jovem.jpg')
            }
            else if (idade_ano < 50)
            {
                //Adulto
                img.setAttribute('src', 'mulher_adulta.jpg')
            }
            else
            {
                //Idoso
                img.setAttribute('src', 'mulher_idosa.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos um(a) <strong>${gênero}</strong> com (ou que irá fazer) <strong>${idade_ano} anos</strong>`
        resultado.appendChild(img)
    }
}

/*
<p>Mês do seu Nascimento
    <input type="number" name="text_mes_nascimento" id="text_mes_nascimento" min="1" max="12">
</p>
*/