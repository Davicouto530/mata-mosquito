// Iniciando as variáveis para armazenar a altura e a largura da tela
let altura = 0
let largura = 0

// Função para atualizar o tamanho da tela do jogo
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight // Pega a altura da tela visível
    largura = window.innerWidth // Pega a largura da tela visível

    console.log(largura, altura) // Exibe os valores no console para conferência
}

// Chamando a função para definir os valores iniciais da tela
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    // Gera posições aleatórias dentro dos limites da tela e evita que a imagem saia da área visível
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    // Operador ternário, se a posição calculada for menor que 0, ajusta para 0 para não sair da tela
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY) // Exibe as posições no console

    // Criando um novo elemento <img> no HTML
    let mosquito = document.createElement('img') // Cria uma tag <img>
    mosquito.src = 'imagens/mosca.png' // Define a imagem do mosquito
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // Aplica uma classe CSS para estilizar o mosquito

    // Define a posição do mosquito na tela
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute' // Permite que o mosquito seja posicionado livremente

    // Adiciona o mosquito na página dentro do <body>
    document.body.appendChild(mosquito)

}

// Função para definir um tamanho aleatório para o mosquito
function tamanhoAleatorio() {
    
    let classe = Math.floor(Math.random() * 3) // Gera um número aleatório entre 0 e 2

    // Escolhe uma classe CSS diferente dependendo do número gerado
    switch(classe) {
        case 0:
            return 'mosquito1' // Se o número for 0, retorna a classe 'mosquito1'
        case 1:
            return 'mosquito2' // Se for 1, retorna a classe 'mosquito2'
        case 2:
            return 'mosquito3' // Se for 2, retorna a classe 'mosquito3'
    }
}

//Função para fazer o mosquito olhar para direita e esquerda aleatoriamente
function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2) // Gera um número aleatório entre 0 e 1

    // Escolhe uma classe CSS diferente dependendo do número gerado
    switch(classe) {
        case 0:
            return 'ladoA' // Se o número for 0, retorna a classe 'ladoA'
        case 1:
            return 'ladoB' // Se for 1, retorna a classe 'ladoB'
    }
}

