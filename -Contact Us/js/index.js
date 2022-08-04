const botao = document.getElementById("btn-enviar")
const texto = document.getElementById("txt-enviar")
const imagem = document.getElementById("img-enviar")

function enviado(){
    botao.style.backgroundColor = "#40e031"
    texto.style.opacity = 0
    imagem.style.opacity = 1
    imagem.style.transitionDelay = ".1s"
    
    setTimeout(resetar, 1000*2)
}

function resetar(){
    botao.style.backgroundColor = "#0070FF"
    texto.style.transitionDelay = ".1s"
    texto.style.opacity = 1
    imagem.style.opacity = 0
}
