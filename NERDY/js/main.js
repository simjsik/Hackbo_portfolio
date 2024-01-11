  $(document).ready(function () {
    $(function () {
      $('#beThe_Yellow').css({
        display: 'block'
      })

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
      $(".visual_text_wrap").addClass('active');
      $(".header_top_left").addClass('active');
      $(".header_top_right").addClass('active');
      $(".header_bottom").addClass('active');
      $(window).scroll(function () {
        t = $(window).scrollTop();
       // console.log(t);
        if (t < 500) {
          $(".visual_text_wrap").addClass("active");
        } else if (t < 1500) {
          $(".sec1_text_wrap").addClass('active');
          $(".sec1_fixed_img").addClass("active");
          $(".sec1_right").addClass("active");
        } else if (t < 2500) {
          $(".sec2_text_wrap").addClass("active");
          $(".sec2_left").addClass("active");
          $(".sec2_slide_wrap").addClass("active");
        } else if (t < 3500) {
          $(".sec3_top").addClass("active");
          $(".look_slick").addClass("active");
        } else if (t < 4750) {
          $(".sec4_text_wrap").addClass("active");
          $(".sns_img_top").addClass("active");
          $(".sns_img_bottom").addClass("active");
        }
      });


      // section 1

      let sec1_text1 = $('.sec1_pro_text_box1')
      let sec1_text2 = $('.sec1_pro_text_box2')
      let sec1_text3 = $('.sec1_pro_text_box3')

      // 오른쪽 원 마우스 호버,리브
      $('.sec1_pro_circle1').hover(function () {
        sec1_text1.stop().show();
        $('.sec1_pro_circle1').mouseleave(function () {
          sec1_text1.hide();
        });
      });

      $('.sec1_pro_circle2').hover(function () {
        sec1_text2.show();
        $('.sec1_pro_circle2').mouseleave(function () {
          sec1_text2.hide()
        });
      });

      $('.sec1_pro_circle3').hover(function () {
        sec1_text3.show();
        $('.sec1_pro_circle3').mouseleave(function () {
          sec1_text3.hide()
        });
      });


      let sec1Chn1 = $('.sec1_product1 .color_btn_wrap').find('button')
      let sec1Chn2 = $('.sec1_product2 .color_btn_wrap').find('button')
      let sec1Chn3 = $('.sec1_product3 .color_btn_wrap').find('button')

      let sec1img1 = $('.sec1_product1 img')
      let sec1img2 = $('.sec1_product2 img')
      let sec1img3 = $('.sec1_product3 img')

      sec1img1.eq(1).hide();
      $(sec1Chn1).eq(0).click(function () {
        sec1img1.eq(0).fadeIn(500);
        sec1img1.eq(1).hide();
      });
      $(sec1Chn1).eq(1).click(function () {
        sec1img1.eq(1).fadeIn(500);
        sec1img1.eq(0).hide();
      });

      sec1img2.eq(1).hide();
      $(sec1Chn2).eq(0).click(function () {
        sec1img2.eq(0).fadeIn(500);
        sec1img2.eq(1).hide();
      });
      $(sec1Chn2).eq(1).click(function () {
        sec1img2.eq(1).fadeIn(500);
        sec1img2.eq(0).hide();
      });

      sec1img3.eq(1).hide();
      sec1img3.eq(2).hide();
      $(sec1Chn3).eq(0).click(function () {
        sec1img3.eq(0).fadeIn(500);
        sec1img3.eq(1).hide();
        sec1img3.eq(2).hide();
      });
      $(sec1Chn3).eq(1).click(function () {
        sec1img3.eq(1).fadeIn(500);
        sec1img3.eq(0).hide();
        sec1img3.eq(2).hide();
      });
      $(sec1Chn3).eq(2).click(function () {
        sec1img3.eq(2).fadeIn(500);
        sec1img3.eq(1).hide();
        sec1img3.eq(0).hide();
      });

      // 이미지 클릭 시 텍스트 박스 show
      $($('.sec1_product1 img')).click(function (e) {
        e.preventDefault();
        sec1_text2.toggle();
      });

      $($('.sec1_product2 img')).click(function (e) {
        e.preventDefault();
        sec1_text3.toggle();
      });

      $($('.sec1_product3 img')).click(function (e) {
        e.preventDefault();
        sec1_text1.toggle();
      });

      //  sec 2
      let be = $('.sec2_left').find('div')
      let sec2chn = $('.color_btn_wrap_sec2').find('button')

      sec2chn.eq(0).click(function (e) {
        e.preventDefault()
        be.eq(0).show();
        be.eq(1).hide();
        be.eq(2).hide();

        be.eq(0).show();
        be.eq(1).hide();
        be.eq(2).hide();

        $('.sec2_slide_yellow').show();
        $('.sec2_slide_blue').hide();
        $('.sec2_slide_pink').hide();

        sec2chn.eq(0).animate({
          width: "45%"
        }, 300);
        sec2chn.eq(1).animate({
          width: "16%"
        }, 300);
        sec2chn.eq(2).animate({
          width: "16%"
        }, 300);

        sec2chn.eq(0).css({
          background: "#8800ff"
        });
        sec2chn.eq(1).css({
          background: "white"
        });
        sec2chn.eq(2).css({
          background: "white"
        });
      });
      // yellow

      sec2chn.eq(1).click(function (e) {
        // e.preventDefault()
        be.eq(0).hide();
        be.eq(1).show();
        be.eq(2).hide();

        be.eq(0).hide();
        be.eq(1).show();
        be.eq(2).hide();

        $('.sec2_slide_yellow').hide();
        $('.sec2_slide_blue').show();
        $('.sec2_slide_pink').hide();

        sec2chn.eq(0).css({
          background: "white"
        });
        sec2chn.eq(1).css({
          background: "rgb(159, 26, 26)"
        });
        sec2chn.eq(2).css({
          background: 'white'
        });

        sec2chn.eq(0).animate({
          width: "16%"
        }, 300);
        sec2chn.eq(1).animate({
          width: "45%"
        }, 300);
        sec2chn.eq(2).animate({
          width: "16%"
        }, 300);

      });
      // blue

      sec2chn.eq(2).click(function (e) {
        // e.preventDefault()
        be.eq(0).hide();
        be.eq(1).hide();
        be.eq(2).show();

        be.eq(0).hide();
        be.eq(1).hide();
        be.eq(2).show();

        $('.sec2_slide_yellow').hide();
        $('.sec2_slide_blue').hide();
        $('.sec2_slide_pink').show();

        sec2chn.eq(2).animate({
          width: "45%"
        }, 300);
        sec2chn.eq(0).animate({
          width: "16%"
        }, 300);
        sec2chn.eq(1).animate({
          width: "16%"
        }, 300);


        sec2chn.eq(0).css({
          background: "white"
        });
        sec2chn.eq(2).css({
          background: "hotpink"
        });
        sec2chn.eq(1).css({
          background: "white"
        });
      });
      // pink

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



      // sns

      let snsImgT = $('.sns_img_top').find('li')
      let snsImgB = $('.sns_img_bottom').find('li')

      $(snsImgT).eq(0).mouseover(function(){
        $('.hover1').fadeIn(500);
      })
      $(snsImgT).eq(0).mouseout(function(){
        $('.hover1').fadeOut(500);
      })

      $(snsImgT).eq(1).mouseover(function(){
        $('.hover2').fadeIn(500);
      })
      $(snsImgT).eq(1).mouseout(function(){
        $('.hover2').fadeOut(500);
      })

      $(snsImgT).eq(2).mouseover(function(){
        $('.hover3').fadeIn(500);
      })
      $(snsImgT).eq(2).mouseout(function(){
        $('.hover3').fadeOut(500);
      })

      $(snsImgT).eq(3).mouseover(function(){
        $('.hover4').fadeIn(500);
      })
      $(snsImgT).eq(3).mouseout(function(){
        $('.hover4').fadeOut(500);
      })

      $(snsImgT).eq(4).mouseover(function(){
        $('.hover5').fadeIn(500);
      })
      $(snsImgT).eq(4).mouseout(function(){
        $('.hover5').fadeOut(500);
      })

      $(snsImgB).eq(0).mouseover(function(){
        $('.hover6').fadeIn(500);
      })
      $(snsImgB).eq(0).mouseout(function(){
        $('.hover6').fadeOut(500);
      })

      $(snsImgB).eq(1).mouseover(function(){
        $('.hover7').fadeIn(500);
      })
      $(snsImgB).eq(1).mouseout(function(){
        $('.hover7').fadeOut(500);
      })
      
      $(snsImgB).eq(2).mouseover(function(){
        $('.hover8').fadeIn(500);
      })
      $(snsImgB).eq(2).mouseout(function(){
        $('.hover8').fadeOut(500);
      })

      $(snsImgB).eq(3).mouseover(function(){
        $('.hover9').fadeIn(500);
      })
      $(snsImgB).eq(3).mouseout(function(){
        $('.hover9').fadeOut(500);
      })

      $(snsImgB).eq(4).mouseover(function(){
        $('.hover10').fadeIn(500);
      })
      $(snsImgB).eq(4).mouseout(function(){
        $('.hover10').fadeOut(500);
      })







      // 푸터 탑 버튼

      $('.foo_top_btn').click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 700);
        return false;
      });
    });
  });










  var sec3_mDown = false,
      sec3Start_x, sec3Scroll_left;
  const sec3_slider = document.querySelector('.look_slick');

  sec3_slider.addEventListener('mousedown', e => {
    sec3_mDown = true;
    sec3Start_x = e.pageX - sec3_slider.offsetLeft;
    sec3Scroll_left = sec3_slider.scrollLeft;
    // console.log(sec3_mDown, sec3Start_x, sec3Scroll_left)
  });

  sec3_slider.addEventListener('mouseleave', () => {
    sec3_mDown = false;
  });

  sec3_slider.addEventListener('mouseup', () => {
    sec3_mDown = false;
  });

  sec3_slider.addEventListener('mousemove', e => {
    if (!sec3_mDown) return;
    e.preventDefault();
    const x = e.pageX - sec3_slider.offsetLeft;
    const walk = x - sec3Start_x;
    sec3_slider.scrollLeft = sec3Scroll_left - walk;
  });

  // // look slide

  var sec4_mDown = false,
    sec4Start_x, sec4Scroll_left;
  const sec4_slider = document.querySelector('.sns_slide_top');

  sec4_slider.addEventListener('mousedown', e => {
    sec4_mDown = true;
    sec4Start_x = e.pageX - sec4_slider.offsetLeft;
    sec4Scroll_left = sec4_slider.scrollLeft;
    console.log(sec4_mDown, sec4Start_x, sec4Scroll_left)
  });

  sec4_slider.addEventListener('mouseleave', () => {
    sec4_mDown = false;
  });

  sec4_slider.addEventListener('mouseup', () => {
    sec4_mDown = false;
  });

  sec4_slider.addEventListener('mousemove', e => {
    if (!sec4_mDown) return;
    e.preventDefault();
    const x = e.pageX - sec4_slider.offsetLeft;
    const walk = x - sec4Start_x;
    sec4_slider.scrollLeft = sec4Scroll_left - walk;
  });

  var sec4_2_mDown = false,
    sec4_2Start_x, sec4_2Scroll_left;
  const sec4_2_slider = document.querySelector('.sns_slide_bottom');

  sec4_2_slider.addEventListener('mousedown', e => {
    sec4_2_mDown = true;
    sec4_2Start_x = e.pageX - sec4_2_slider.offsetLeft;
    sec4_2Scroll_left = sec4_2_slider.scrollLeft;
    console.log(sec4_2_mDown, sec4_2Start_x, sec4_2Scroll_left)
  });

  sec4_2_slider.addEventListener('mouseleave', () => {
    sec4_2_mDown = false;
  });

  sec4_2_slider.addEventListener('mouseup', () => {
    sec4_2_mDown = false;
  });

  sec4_2_slider.addEventListener('mousemove', e => {
    if (!sec4_2_mDown) return;
    e.preventDefault();
    const x = e.pageX - sec4_2_slider.offsetLeft;
    const walk = x - sec4_2Start_x;
    sec4_2_slider.scrollLeft = sec4_2Scroll_left - walk;
  });
  // sns slide













  // $(window).scroll(function () {
  //   var win_top = $(window).scrollTop();
  //   let win_h = $(window).height()
  //   let win_w = $(window).width()
  //   console.log(win_top, win_h, win_w);
  //   // console.log(win_h);
  //   if (win_top >= 600 && win_w < 1283 && win_w > 1006) {
  //     $('.sec1_fixed_img img').addClass('fixed_on1024')
  //     $('.sec1_text_wrap').addClass('fixed_on1024')
  //     $('.sec1_right_wrap').css({
  //       right: '0'
  //     })
  //     $('.sec1_text_wrap').css({
  //       right: '0'
  //     })
  //   } else if (win_top < 600) {
  //     $('.sec1_fixed_img img').removeClass('fixed_on1024')
  //     $('.sec1_text_wrap').removeClass('fixed_on1024')
  //   } else if (win_top > 4000) {
  //     $('.sec1_fixed_img img').removeClass('fixed_on1024')
  //   }
  // });