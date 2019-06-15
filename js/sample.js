var time = new Date();
//alert(time);
var hour = time.getHours();
//alert(hour);
$(document).ready(function () {
    index_gradient();
});

function index_gradient() { 
    var topmain = document.getElementById("top-main")
    //以下switch文めっちゃうましか、mt_sgi許すまじ
    //せめて配列とかにグラデ数値入れておいて、時間をインデックスとして暑かった方がましだったよね
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
        //   case 24:だと出なかった、うわああああああああ１日かかって発覚した
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            $(".top-main").css("background-image", "linear-gradient(rgba(0,4,40, 0.4),rgba(0,78,146, 0.5)), url(image/mone.jpg)");
            break;
    }
}

/*
document.getElementsByClassName("btn").onclick = function () {
    alert("button");
    console.log("aaaa");
    // ここに#buttonをクリックしたら発生させる処理を記述する
    var div_ds = document.getElementsByClassName("development-sample")
    
    if (div_ds.style.display == "flex") {
        // noneで非表示
        div_ds.style.display = "none";
    } else {
        // blockで表示
        div_ds.style.display = "flex";
    }
};
*/
