//tela altura e largura
let altura = 0
let largura = 0
let vidas = 1
let tempo = 60
let criaMoscaTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'normal'){
    criaMoscaTempo = 1500
}else if(nivel == 'dificil'){
    criaMoscaTempo = 1000
}else if(nivel == 'chuck-norris'){
    criaMoscaTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    // console.log(`${altura} X ${largura}`)

}
ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
    tempo -= 1
    if (tempo<0){
        clearInterval(cronometro)
        clearInterval(iniciaGame)
        window.location.href ='vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posicaoRandomica(){
    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if (vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    //posição do mosquito
    let posx = Math.floor(Math.random() * largura) - 90
    let posy = Math.floor(Math.random() * altura) - 90
    
    posx = posx < 50 ? 50 : posx
    posy = posy < 50 ? 50 : posy

    // console.log(posy, posx)
    // gerado posição do mosquito
    
    //criando elementos html
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
    mosquito.style.left = posx + 'px'
    mosquito.style.top = posy + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito)
    // console.log()
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch (classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)

    switch (classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}