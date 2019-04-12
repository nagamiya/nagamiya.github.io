var time = new Date();
//alert(time);
var hour = time.getHours();
//alert(hour);
$(document).ready(function () {

    var topmain = document.getElementById("top-main")
    switch (hour) {
        //朝
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            $(".top-main").css("background-image", "linear-gradient(rgba(165,254,203,0.6), rgba(32,189,255,0.6), rgba(84,51,255,0.5)), url(image/mone.jpg)");
            break;
        //昼
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            $(".top-main").css("background-image", "linear-gradient(rgba(165,254,203,0.6), rgba(32,189,255,0.6), rgba(84,51,255,0.5)), url(image/mone.jpg)");
            break;
        //夕方
        case 16:
        case 17:
        case 18:
            $(".top-main").css("background-image", "linear-gradient(rgba(241, 39, 17, 0.4),rgba(245, 175, 25, 0.5)), url(image/mone.jpg)");
            break;
        //夜
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 1:
        case 2:
        case 3:
        case 4:
            $(".top-main").css("background-image", "linear-gradient(rgba(0,4,40, 0.4),rgba(0,78,146, 0.5)), url(image/mone.jpg)");
            break;

    }
});
