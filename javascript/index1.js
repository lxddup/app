/**
 * Created by Administrator on 2017/7/6 0006.
 */

$(function () {
   var $navSpan = $("#nav span");
   var $guideUl = $("#guide ul");
   function swipeGuide(index) {
       $navSpan.eq(index).addClass("active").siblings().removeClass("active");
       $guideUl.css({
           left:-$guideUl.width()/2 * index
       })
   }
    $navSpan.on("tap",function () {
        swipeGuide($(this).index());
    })
    $guideUl.on("swipeleft",function () {
        swipeGuide(1);
    }).on("swiperight",function () {
     swipeGuide(0);
    })

$("#go-top").on("tap",function () {
    console.log($(window).scrollTop())
    if($(window).scrollTop() <=1){
        return false;
    }
    var top = $(this).css("top");
    $("body").animate({
        scrollTop:0
    },500)
    $(this).animate({
        top:0
    },500,function () {
        $(this).css("top",top);
    })
})
})
