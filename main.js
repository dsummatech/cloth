$(function () {

   /* window.onscroll = function(){scrollFunction()};
 function scrollFunction() {
     if (document.body.scrollTop >= 100 || document.documentElement.scrollTop > 100) {
         $("header").css({"position":"fixed"});
         
     }
     
     else{
       $("header").css({"position":"unset"});
     }
 } */


 var sli = 0;
 function slide () {
  
  if (sli < 69) {
    sli += 24;
    $("body .page .slider .slide").css({right:sli + "%"});
  }
  else{
    sli = 0;
    $("body .page .slider .slide").css({right:sli + "%"});
  }
 }
 setInterval(slide, 2000);

 $(".sub-menu").click(function () {
   $(".small-menu").css({left:"0%"});
 });
 $("body .small-menu h2 span").click(function () {
    $(".small-menu").css({left:"-100%"});
  });
  $(".pop-up .rel button").click(function () {
    $(".pop-up").fadeToggle(200);
  });
 
 $(".menu b").click(function () {
   location.href = "index.html";
 });
 $(".small-menu b").click(function () {
   location.href = "index.html";
 });
 $(".column .options button").click(function () {
   location.href = "pix.html";
 });
 });