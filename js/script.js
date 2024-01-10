$(document).ready(function(){
    $('nav').mouseover(function(){
        $('.nav_wrap').stop().slideDown(200)
    });
    $('nav').mouseout(function(){
        $('.nav_wrap').stop().slideUp(200)
    });
    $('.travel_home_btn').click(function(){
        $('.lotte').show()
    });
    $('.detail').click(function(){
        $('html').css({overflow:"hidden"})
    });
    $('.travel2_home_btn').click(function(){
        $('.airseoul').show()
    });
    $('.helpy2_detail_btn').click(function(){
        $('.helpy_view').show()
    });
    $('.bnk_detail_btn').click(function(){
        $('.bnk_view').show()
    });
    $('.detail_close').click(function(){
        $('.detail_view').hide()
        $('html').css({overflowY:"scroll"})
    });
    $('.detail_bg').click(function(){
        $('.detail_view').hide()
        $('html').css({overflowY:"scroll"})
    });

          const profileBox = document.getElementById('profile');
          const workBox = document.getElementById('work');
          const profileheight = profileBox.offsetTop;
          const workheight = workBox.offsetTop;
          $('.view_profile').click(function(){
            $('html, body').animate({
              scrollTop:profileheight - 40}, 500);
          });
          console.log(profileheight)
          $('.view_work').click(function(){
            $('html, body').animate({
              scrollTop:workheight - 40}, 500);
          });
          $('.view_contact').click(function(){
            $('html, body').animate({
              scrollTop:9000}, 1000);
          });
          $('.top_btn').click(function(){
            $('html, body').animate({
              scrollTop:0
            }, 500);
          });
          AOS.init();
});

