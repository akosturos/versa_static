$(document).ready(function(){

   $(window).on('scroll', function () {
      if ($(this).scrollTop() > 500) {
         $('#appear-nav').fadeIn(200);
      } else {
         $('#appear-nav').fadeOut(40);
      }
   });

});
