//PASSOS:

//Passo 1- Pegar elementos do html
const btnRight = document.querySelector('.btn.right');
const btnLeft = document.querySelector('.btn.left');
const personagem = document.querySelectorAll('.character');

let currentSlide = 0;

//Passo - Imagem sumir e outra aparecer

function hidePersonagem(){
    personagem.forEach(item => item.classList.remove('selecionado'))
}

function showPersonagem(){
   personagem[currentSlide].classList.add('selecionado')
}

//Passo - Puxar função dos botoes

//Botão Next

function nextPersonagem(){
    hidePersonagem()
    if(
        currentSlide === personagem.length -1){
            currentSlide = 0
        }else{
            currentSlide++
        }
    showPersonagem()
}

function prevPersonagem(){
    hidePersonagem()
    if(
        currentSlide === 0){
            currentSlide = personagem.length -1
        }else{
            currentSlide--
        }
    showPersonagem()
}


btnRight.addEventListener('click', nextPersonagem)
btnLeft.addEventListener('click', prevPersonagem)
   

//Passo - Fazer o Autoplay
//Passo - esconder imagem ativa de fundo anterior com o autoplay
//Passo - Próxima imagem aparecer com o autoplay
//Passo - Identificar clique do usuário
//Passo - Identificar hover na imagem e para o autoplay

//Ideia Geral: fazer um carrosel auto-player com dois botoes pra trocar de imagem com descrições diferentes, mas quando hover na imagem o autplayer para, os botões são quase invisíveis, as descrições são em posições diferentes em cada imagem com animações como se fosse uma mini apresentação




    //quando clicar no esquerdo, mudar cor do direito
    // butaoLeft.addEventListener('click', function(){
    //     personagem.style=`background-color:red;`;
    //  });
 


