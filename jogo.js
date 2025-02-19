//Iniciando as variáveis fora da função
let altura = 0
let largura = 0

//Função para redimensionar o tamanho da tela
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight //recupera a altura da tela
    largura = window.innerWidth //recupera a largura da tela

    console.log(altura, largura) 
    //Exibe no console o novo tamanho da tela quando redimensiona 
} 

//Chamando a função
ajustaTamanhoPalcoJogo()


