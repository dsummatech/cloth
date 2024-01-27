$(function () {
   $(".ham").click(function () {
    $(".mobile_menu").fadeIn();
   });

   $(".mobile_menu .fa-times-circle").click(function () {
    $(".mobile_menu").fadeOut();
   })
});