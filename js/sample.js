var nowTime, nowYear, nowMonth, nowDate, nowHour, nowMin, nowSec;
$(document).ready(function () {
    index_gradient();

    setInterval('showClock1()', 1000);
});

$(function () {
    $('#top-contents').mouseover(
        function () {
            $("#RealtimeClockArea").text("時間帯によってグラデーションが変わるよ")
        }
    );
});

function showClock1() {
    nowTime = new Date();
    /*alert(nowTime);*/
    nowYear = nowTime.getFullYear();
    nowMonth = nowTime.getMonth() + 1;
    nowDate = nowTime.getDate();
    nowHour = set2fig(nowTime.getHours());
    nowMin = set2fig(nowTime.getMinutes());
    nowSec = set2fig(nowTime.getSeconds());
    msg1 = nowYear + "/" + nowMonth + "/" + nowDate;
    msg2 = nowHour + ":" + nowMin + ":" + nowSec;
    //alert(msg);
    document.getElementById("RealtimeClockArea").innerHTML = msg1 + " " + msg2;
}

// 桁数が1桁だったら先頭に0を加えて2桁に調整する
function set2fig(num) {
    var ret;
    if (num < 10) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}

function index_gradient() { 
    var topmain = document.getElementById("top-main")
    //以下switch文めっちゃうましか、mt_sgi許すまじ
    //せめて配列とかにグラデ数値入れておいて、時間をインデックスとして暑かった方がましだったよね
    switch (new Date().getHours()) {
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

