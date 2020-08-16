/*Js made by Fredy Reyes 2019035*/

jQuery('document').ready(function($){
    var subir = $('.back-to-top');
    subir.click(function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 500);
    });  
    subir.hide();
    
    $(window).scroll(function(){
      
      if( $(this).scrollTop() > 200 ) {
        subir.fadeIn();
      } else {
        subir.fadeOut();
      }
      
    });  
  });

//Preloader

  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});



