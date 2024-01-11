  $(document).ready(function () {
    $(function () {


      let win_w = $(window).width();
      console.log(win_w);
  
      $('.visual_text').fadeIn(500)
  
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

      // pallax
      var t = 0; //상단값
      $(".header_top_left").addClass('active');
      $(".header_top_right").addClass('active');
      $(".header_bottom").addClass('active');
      $(window).scroll(function () {
        t = $(window).scrollTop();
       console.log(t);
        if (t < 1000) {
          $(".multi_text_wrap").addClass("active");
          $(".multi_img1_wrap").addClass("active");
          $(".multi_img2_wrap").addClass("active");
          $(".multi_img3_wrap").addClass("active");
          $(".multi_textimg_box").addClass("active");
        } else if (t < 2000) {
          $(".nataejoo_text_wrap").addClass("active");
          $(".nataejoo_img1_wrap").addClass('active');
          $(".nataejoo_img2_wrap").addClass('active');
          $(".nataejoo_img3_wrap").addClass('active');
          $(".nataejoo_img4_wrap").addClass('active');
        } else if (t < 3000) {
          $(".yonsei_text_wrap").addClass("active");
          $(".yonsei_img1_wrap").addClass("active");
          $(".yonsei_img2_wrap").addClass("active");
          $(".yonsei_img3_wrap").addClass("active");
          $(".yonsei_img4_wrap").addClass("active");
          $(".yonsei_textimg_box").addClass("active");
        }
      });


      // seemore
      $('.multi_seemore').hover(function(){
        $('.multi_seemore').css({background: "rgb(70, 70, 70)"});
        $('.multi_seemore').mouseleave(function(){
          $('.multi_seemore').css({background: "rgb(31, 31, 31)"});
        });
      });

      $('.nataejoo_seemore').hover(function(){
        $('.nataejoo_seemore').css({background: "rgb(70, 70, 70)"});
        $('.nataejoo_seemore').mouseleave(function(){
          $('.nataejoo_seemore').css({background: "rgb(31, 31, 31)"});
        });
      });


      $('.yonsei_seemore').hover(function(){
        $('.yonsei_seemore').css({background: "rgb(70, 70, 70)"});
        $('.yonsei_seemore').mouseleave(function(){
          $('.yonsei_seemore').css({background: "rgb(31, 31, 31)"});
        });
      });



      // 푸터 탑 버튼

      $('.foo_top_btn').click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 700);
        return false;
      });
    });
  });