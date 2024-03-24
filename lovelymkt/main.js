$(function () {
    var sl=0;
    function slider() {
        if (sl < 80) {
            sl+=20;
            $(".slider .slide").css("right",sl + "%");
        }
        else{
            sl=0;
            $(".slider .slide").css("right",sl + "%");
        }
        
    }
    setInterval(slider, 2000);

    var ofsl = 0;
    function offers_slider() {
        if (ofsl < 50) {
            ofsl+=25;
            $(".offers-slider .slide").css("right",ofsl + "%");
        }
        else{
            ofsl=0;
            $(".offers-slider .slide").css("right",ofsl + "%");
        }
        
    }
    setInterval(offers_slider, 2000);
    
});