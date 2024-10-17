$(function(){

    //​‌‍‌𝗕𝗮𝗿𝗿𝗮 𝗱𝗲 𝗽𝗿𝗼𝗴𝗿𝗲𝘀𝘀𝗼 𝘁𝗮 𝗻𝗼 𝟬​
    var currentValue = 0;
    var isDrag = false;
    var precoMaximo = 70000
    var precoAtual = 0


    //​‌‍‌‍𝗺𝗼𝘂𝘀𝗲 𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗱𝗼 = 𝗱𝗿𝗮𝗴 𝗮𝘁𝗶𝘃𝗮𝗱𝗼​
    $('.pointerbar').mousedown(function(){
        isDrag = true
    })

    
    //​‌‍‌𝗺𝗼𝘂𝘀𝗲 "𝗶𝗻𝗮𝘁𝗶𝘃𝗼" = 𝗱𝗿𝗮𝗴 𝗻ã𝗼​
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
        precoAtual = precoAtual.toFixed(2); //𝘵𝘰𝘍𝘪𝘹𝘦𝘥(2) é 𝘰 𝘮á𝘹𝘪𝘮𝘰 𝘥𝘦 𝘯𝘶𝘮𝘦𝘳𝘰𝘴 𝘥𝘦𝘱𝘰𝘪𝘴 𝘥𝘢 𝘷í𝘳𝘨𝘶𝘭𝘢 é 2
        precoArr = precoAtual.split('.'); //𝘖 𝘱𝘳𝘦ç𝘰  𝘷𝘢𝘪 𝘴𝘦𝘳 𝘥𝘪𝘷𝘪𝘥𝘰 𝘦𝘮 𝘥𝘢𝘴 𝘱𝘢𝘳𝘵𝘦𝘴

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
                var img = $(this).children().attr('src');
                $('.foto-single-veiculo').attr('src',img)
              })

              $('.image-single-wraper').eq(0).click();
          }

          //​‌‍‌𝗖𝗹𝗶𝗰𝗮𝗿 𝗰𝗼𝗻𝘁𝗮𝘁𝗼 𝗶𝗿 𝗽𝗿𝗮 𝗰𝗼𝗻𝘁𝗮𝘁𝗼​

          var directory = 'http://127.0.0.1:5500/' //𝘋𝘪𝘳𝘦𝘵ó𝘳𝘪𝘰 𝘥𝘢 𝘱𝘢𝘴𝘵𝘢/𝘴𝘦𝘳𝘷𝘪𝘥𝘰𝘳 𝘥𝘰 𝘱𝘳𝘰𝘫𝘦𝘵𝘰


          $('[goto=contato]').click(function(){
            location.href=directory+'index.html?contato'; //𝘝𝘢𝘪 𝘮𝘶𝘥𝘢𝘳 𝘢 𝘶𝘳𝘭 𝘲𝘶𝘢𝘯𝘥𝘰 𝘤𝘭𝘪𝘤𝘢𝘳 𝘯𝘰 𝘤𝘰𝘯𝘵𝘢𝘵𝘰
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

            //​‌‍‌𝗠𝗘𝗡𝗨 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗜𝗩𝗢​

            $('.mobile').click(function(){
                $(this).find('ul').slideToggle()
            })

            //​‌‍‌𝗦𝗹𝗶𝗱𝗲𝗿 𝗗𝗲𝗽𝗼𝗶𝗺𝗲𝗻𝘁𝗼𝘀​

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





