$(document).ready(function(){
    $('.hd_menu_btn_off').click(function(){
        $('.hd_menu_btn_off').hide();
        $('.hd_menu_btn_on').css({display:'block'});
        $('.hd_menu_wrap').animate({left:'-500'});
    });
    $('.hd_menu_btn_on').click(function(){
        $('.hd_menu_btn_on').hide();
        $('.hd_menu_btn_off').css({display:'block'});
        $('.hd_menu_wrap').animate({left:'0'},300);
    });
    $('.menu_top').mouseover(function(){
        $(this).find('.sub_menu').stop().slideDown(300);
        // console.log('a')
    });
    $('.menu_top').mouseout(function(){
        $(this).find('.sub_menu').stop().slideUp(300);
        // console.log('a')
    });

    $('.shop_item_img').mouseover(function(){
        $(this).find('.shop_item_sub').css({left:'0px'})
    });
    $('.shop_item_img').mouseout(function(){
        $(this).find('.shop_item_sub').css({left:'100%'})
    });

    var prev_width; // 초기화
    window.onload = function() {
        prev_width = $(window).width(); // 기본 넓이 할당
    }
    $(window).resize(function() { // 리사이즈 이벤트
        var current_width = $(window).width(); // 현재 넓이 할당
        if(( prev_width >= 768 ) && ( prev_width < 780 )) {
            // 실행할 코드
            location.reload();
            $('.hd_menu_btn_on').hide();
            $('.hd_menu_btn_off').hide();
            // console.log('load')
        } else if( (prev_width >= 1270 ) && ( prev_width < 1280 )){
            location.reload();
            // console.log('load')
        }
        prev_width = current_width; // 현재 넓이 할당
    });
});

$.fn.Scrolling = function(obj, tar) {
    var _this = this;
    $(window).scroll(function(e) {
        var end = obj + tar;
        $(window).scrollTop() >= obj ? _this.addClass("fixed") : _this.removeClass("fixed");
        if($(window).scrollTop() >= end) _this.removeClass("fixed");
    });
};

$("header").Scrolling($(".hd_menu_btn_on").offset().top, ($("home_content").height() - $("body").height()));
