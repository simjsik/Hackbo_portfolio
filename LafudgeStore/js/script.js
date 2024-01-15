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

    var prev_width; // 초기화
    window.onload = function() {
        prev_width = $(window).width(); // 기본 넓이 할당
    }
    $(window).resize(function() { // 리사이즈 이벤트
        var current_width = $(window).width(); // 현재 넓이 할당
        if (( prev_width >= 768 ) && ( prev_width < 780 )) {
            // 실행할 코드
            location.reload();
            $('.hd_menu_btn_on').hide();
            $('.hd_menu_btn_off').hide();
        }
        prev_width = current_width; // 현재 넓이 할당
    });




    var mHtml = $("html");
    var page = 1;
    mHtml.animate({scrollTop : 0},10);
    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 4) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    })

});