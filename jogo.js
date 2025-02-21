//Iniciando as variáveis fora da função
let altura = 0
let largura = 0

//Função para redimensionar o tamanho da tela
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight //recupera a altura da tela
    largura = window.innerWidth //recupera a largura da tela

    console.log(largura, altura)
    //Exibe no console o novo tamanho da tela quando redimensiona 
}

//Chamando a função
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    //Gerando números aleatórios e multiplicando ele pela largura e altura, e arredondando para um número inteiro
    let posicaoX = Math.floor(Math.random() * largura)
    let posicaoY = Math.floor(Math.random() * altura)

    console.log(posicaoX, posicaoY)

    //Criar o elemento HTML
    let mosquito = document.createElement('img')//Criando uma tag <img> dentro do HTML e colocando na variável "mosquito"
    mosquito.src = 'imagens/mosca.png'//Adicionando a imagem que vai dentro da tag <img>

    document.body.appendChild(mosquito)//Implementando no "body" do HTML o que está dentro da variável "mosquito", que é uma tag <img>
}




