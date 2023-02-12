$(document).ready(function(){
 
//navbar scroll :
 $(window).scroll(function(){
     var windowScroll=$(this).scrollTop();
     if(windowScroll >200){
         $("header").addClass('change-color');
         $(".links-nav").addClass('change-color-nav');  
     }else{
        $("header").removeClass('change-color'); 
        $(".links-nav").removeClass('change-color-nav'); 
     }

    
    

 })




});