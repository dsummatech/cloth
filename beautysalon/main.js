$(function () {

    $(window).ready(function () {
       $(".rel-body-rt").css({"left":"0%"}); 
       $(".rel-body-lt").css({"right":"0%"}); 
    });


    $(".ham").click(function () {
     $(".mobile-menu").css({left:"0%"});
    });
    $(".close span").click(function () {
     $(".mobile-menu").css({left:"-80%"});
    });
 
    $(".annou").click(function () {
       $(this).children("table").slideToggle(100);
    });
    
 });