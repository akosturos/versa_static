$(document).ready(function(){
   $('#navbar-button').on('hover', function() {
      $('#navbar-icon').css("background-image", "url('data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E')");
      });

/*
   $("#li-header-foldable").on({
    mouseenter: function () {
        $(".subnav").css('visibility', 'visible');
    },
    mouseleave: function () {
        $(".subnav").css('visibility', 'invisible');
    }
});

$(function() {
   $('#li-header-foldable').hover( function(){
      $(".subnav").css('visibility', 'visible');
   },
   function(){
      $(".subnav").css('visibility', 'invisible');
   });
});

*/

   $(document).on('mouseenter', "#li-header-foldable", function() {
       $(".subnav").css('visibility', 'visible');
   }).on('mouseleave', function() {
       $(".subnav").css('visibility', 'invisible');
   });



});


