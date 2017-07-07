/**
 * Created by Administrator on 2017/7/6 0006.
 */

$(function () {
   var $navSpan = $("#nav span");
   var $guideUl = $("#guide ul");
    $navSpan.on("tap",function () {
        $(this).addClass("active").siblings().removeClass("active")
        $guideUl.css({
            left:-$guideUl.width()/2 * $(this).index()
        })
    })
    $guideUl.on("swipeleft",function () {
        $navSpan.eq(1).addClass("active").siblings().removeClass("active")
        $guideUl.css({
            left:-$guideUl.width()/2
        })
    }).on("swiperight",function () {
        $navSpan.eq(0).addClass("active").siblings().removeClass("active")
        $guideUl.css({
            left:0
        })
    })
})
