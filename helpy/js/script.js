$(document).ready(function(){
    $('.viewBox a').mouseover(function(){
      $('.viewBox a').css({background : '#191919'});
    });
    $('.viewBox a').mouseout(function(){
      $('.viewBox a').css({background : '#191919c4'});
    });
    $('.viewBox a').click(function(){
      $('.projectBox').css({display:'block'});
    });

    $('.pjClose').click(function(){
      $('.projectBox').css({display:'none'});
      $('html, body').animate({
        scrollTop:0
      }, 0);
    });
    $('.pjTop').click(function(){
      $('html, body').animate({
        scrollTop:0
      }, 1000);
    });
    AOS.init();




  });