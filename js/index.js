$(function(){

    //Barra de progresso ta no 0
    var currentValue = 0;
    var isDrag = false;
    var precoMaximo = 70000
    var precoAtual = 0


    //mouse pressionado = drag ativado
    $('.pointerbar').mousedown(function(){
        isDrag = true
    })

    
    //mouse "inativo" = drag não
    $(document).mouseup(function(){
        isDrag = false
        enableTextSelection
    })


    $('.pricebar').mousemove(function (e) { 
        if(isDrag){
            disableTextSelection()
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left ;
            if(mouseX < 0)
                mouseX = 0
            if(mouseX > elBase.width())
                mouseX = elBase.width()

            $('.pointerbar').css('left', (mouseX - 13)+'px')
            currentValue = (mouseX / elBase.width()) * 100;
            $('.fillbar').css('width',currentValue+'%')
            
            precoAtual = (currentValue/100) * precoMaximo;
            precoAtual = formatarPreco(precoAtual);
            $('#precoPesquisa').html('R$'+precoAtual)            
        }
        
    });

    function formatarPreco(precoAtual){
        precoAtual = precoAtual.toFixed(2); //toFixed(2) é o máximo de numeros depois da vírgula é 2
        precoArr = precoAtual.split('.'); //O preço  vai ser divido em das partes

        var novoPreco = formatarTotal(precoArr)

        return novoPreco
      }

      function formatarTotal(precoArr){
            if(precoArr[0] < 1000){
                return precoArr[0]+','+precoArr[1]
            }else if(precoArr[0] < 10000){
                return precoArr[0][0]+'.'+precoArr[0].substr(1,precoArr[0].length)+','+precoArr[1]
            }else{
                return precoArr[0][0]+precoArr[0][1]+'.'+precoArr[0].substr(2,precoArr[0].length)+','+precoArr[1]
            }
      }

    function disableTextSelection(){ 
        $('body').css("-webkit-user-select","none")
        $('body').css("-moz-user-select","none")
        $('body').css("-ms-user-select","none")
        $('body').css("-o-user-select","none")
        $('body').css("user-select","none")
        // $('body').attr("unselectable", "on");
     }

     function enableTextSelection(){ 
        $('body').css("-webkit-user-select","auto")
        $('body').css("-moz-user-select","auto")
        $('body').css("-ms-user-select","auto")
        $('body').css("-o-user-select","auto")
        $('body').css("user-select","auto")
     }

     var imgShow = 3;
     var maxIndex = Math.ceil($('.image-single-wraper').length/3) - 1;
     var curIndex = 0

    initSlider();
    navigateSlider();
    clickSlider();
     function initSlider(){
        var amount = $('.image-single-wraper').length *  33.3;
        var elScroll = $('.nav-gallery-wraper');
        var elSingle = $('.image-single-wraper');
        elScroll.css('width',amount+'%');
        elSingle.css('width',33.3*(100/amount)+'%')
           };


        function navigateSlider(){
            $('.arrow-nav.right-a').click(function() {
                if(curIndex < maxIndex){
                    curIndex++;
                    var elOff = $('.image-single-wraper').eq(curIndex*3).offset().left - $('.nav-gallery-wraper').offset().left;
                    $('.nav-gallery').animate({'scrollLeft':elOff+'px'});
                }else{
                    console.log('omagaw')
                }
              })

              $('.arrow-nav.left-a').click(function() {
                if(curIndex > 0){
                    curIndex--;
                    var elOff = $('.image-single-wraper').eq(curIndex*3).offset().left - $('.nav-gallery-wraper').offset().left;
                    $('.nav-gallery').animate({'scrollLeft':elOff+'px'});
                }else{
                    console.log('omagaw')
                }
              })
          };

          function clickSlider(){
            $('.image-single-wraper').click(function(){
                $('.image-single-wraper').css('background-color','transparent');
                $(this).css('background-color','rgb(210,210,210)');
                var img = $(this).children().css('background-image');
                $('.foto-single-veiculo').css('background-image',img)
              })

              $('.image-single-wraper').eq(0).click();
          }

          //Clicar contato ir pra contato

          var directory = 'http://127.0.0.1:5500/' //Diretório da pasta/servidor do projeto


          $('[goto=contato]').click(function(){
            location.href=directory+'index.html?contato'; //Vai mudar a url quando clicar no contato
            return false;
          })

          checkUrl();

          function checkUrl(){
            var url = location.href.split('/');
            var curPage = url[url.length-1].split('?');
            
            if(curPage[1] != undefined && curPage[1] == 'contato'){
                $('header nav a').css('color','black') ;
                $('footer nav a').css('color','white') ;
                $('[goto=contato]').css('color','brown')
                $(this).css('color','brown')
                $('html,body').animate({'scrollTop':$('#contato').offset().top});
                return false;
                }
            }

            //MENU RESPONSIVO

            $('.mobile').click(function(){
                $(this).find('ul').slideToggle()
            })

            //Slider Depoimentos

            var amtDepoimento = $('.right p').length;
            var curIndex = 0
            
            navigateDep();
            initDep();

            function initDep(){
                $('.right p').hide();
                $('.right p').eq(0).show();
              }

            function navigateDep(){
                $('#next').click(function(){
                        curIndex ++;
                        if(curIndex >= amtDepoimento)
                            curIndex = 0;
                        $('.right p').hide();
                        $('.right p').eq(curIndex).show();
                    
                })

                $('#prev').click(function(){
                    curIndex --;
                    if(curIndex < 0)
                        curIndex = amtDepoimento - 1;
                    $('.right p').hide();
                    $('.right p').eq(curIndex).show();
                })
            }
            

})
   



//style="background-image: url(../images/carro1.jpg);"





