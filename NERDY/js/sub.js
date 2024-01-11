$(document).ready(function () {
  $(function () {

    // pallax
    var t = 0; //상단값
    $(".about_visual_text_box").addClass("active");
    $(".header_top_left").addClass('active');
    $(".header_top_right").addClass('active');
    $(".header_bottom").addClass('active');
    $(window).scroll(function () {
      t = $(window).scrollTop();
      // console.log(t);
      if (t < 500) {
        $(".about_visual_text_box").addClass("active");
      } else if( t < 1000){
        $(".about_sec1_imgwrap").addClass("active");
      } else if( t < 1500){
        $(".about_sec2_text_wrap>li").addClass("active");
        $(".about_sec2_img_box").addClass("active");
      } else if( t < 3500){
        $(".about_sec3_text_box>p").addClass("active");
        $(".about_sec3_text_box>b").addClass("active");
        $(".color_img_wrap").addClass('active');
        $(".detail_img_wrap").addClass('active');
        $(".fit_img_wrap").addClass('active');
        $(".streak_img_wrap").addClass('active');
      }
    });

// nav
    $('.on_nav').on('click', function () {
      $('.nav_wrap').fadeIn(150);
      $('.on_nav').fadeOut(150);
      $('.header_logo').hide();
      $('.header_right_wrap').css('margin-top', '30px')
    });

    $('.nav_inner_btn_wrap').click(function () {
      $('.nav_wrap').fadeOut();
      $('.on_nav').fadeIn();
      $('.header_logo').show();
      $('.header_right_wrap').css('margin-top', '10px')
    });


    $('.foo_top_btn').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 700);
      return false;
    });
    
  });


  $('.about_sec2_img_box').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode:true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          dots:true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          dots:true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 3000,
        settings: {
          arrows: false,
          centerMode: true,
          dots:true,
          slidesToShow: 3
        }
      }
    ]
  });

});