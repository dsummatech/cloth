$(function () {
   $(".ham").click(function () {
    $(".mobile-menu").css({left:"0%"});
   });
   $(".close span").click(function () {
    $(".mobile-menu").css({left:"-80%"});
   });
   
});