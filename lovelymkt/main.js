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

    $("header .orders-head .c-orders").click(function () {
        $(".orders-con .orders-list").css("right","103%");
        $("header .orders-head .o-orders").css("border-bottom","0");
        $("header .orders-head .o-orders").css("color","rgb(62, 62, 62)");
        $("header .orders-head .c-orders").css("border-bottom","3px solid #c526ff");
        $("header .orders-head .c-orders").css("color","#c526ff");
    });

    $("header .orders-head .o-orders").click(function () {
        $(".orders-con .orders-list").css("right","0%");
        $("header .orders-head .o-orders").css("color","#c526ff");
        $("header .orders-head .o-orders").css("border-bottom","3px solid #c526ff");
        $("header .orders-head .c-orders").css("border-bottom","0");
        $("header .orders-head .c-orders").css("color","rgb(62, 62, 62)");
    });
    
});