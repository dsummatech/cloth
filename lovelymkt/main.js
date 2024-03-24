$(function () {
    var sl=0;
    function slider() {
        if (sl < 80) {
            sl+=20;
            $(".slide").css("right",sl + "%");
        }
        else{
            sl=0;
            $(".slide").css("right",sl + "%");
        }
        
    }
    setInterval(slider, 2000);
    
});