$(function(){

    //Barra de progresso ta no 0
    var currentValue = 0;
    var isDrag = false;


    //mouse pressionado = drag ativado
    $('.pointerbar').mousedown(function(){
        isDrag = true
    })

    
    //mouse "inativo" = drag não
    $(document).mouseup(function(){
        isDrag = false
    })


    $('.pricebar').mousemove(function (e) { 
        if(isDrag){

            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left ;
            if(mouseX < 0)
                mouseX = 0
            if(mouseX > elBase.width())
                mouseX = elBase.width()
        
            var percent = (mouseX / elBase.width()) * 100;

            console.log(percent);
            
        }
        
    });

})
   



