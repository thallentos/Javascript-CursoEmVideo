function carregar()
{
    var mensagem = window.document.querySelector('div#mensagem')
    var imagem = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    mensagem.innerHTML = `<strong>Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos...</strong>`
    if (hora >= 0 && hora < 5)
    {
        // BOA MADRUGADA
        imagem.src = 'madrugada.jpg'
        document.body.style.background = 'black'
    }
    else if (hora >= 5 && hora < 12)
    {
        // BOM DIA
        imagem.src = 'manhã.jpg'
        document.body.style.background = '#B0E0E6'
    }
    else if (hora >= 12 && hora < 18)
    {
        // BOA TARDE
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#8B4513'
    }
    else //ou seja, horas maior ou igual a 18 e menor que meia noite
    {
        // BOA NOITE
        imagem.src = 'noite.jpg'
        document.body.style.background = '#191970'
    }
}