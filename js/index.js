$(function(){

    //Barra de progresso ta no 0
    var currentValue = 0;
    var isDrag = false;
    var precoMaximo = 250000
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
            $('#precoPesquisa').html('R$'+precoAtual)            
        }
        
    });

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

})
   



