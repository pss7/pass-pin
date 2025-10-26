$(function () {

  /* 헤더 */
  $(window).load(function () {
    $('#headerWrap').addClass('active');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  });

  $('#headerWrap .authBox .mobileBtn').click(function () {
    $('#headerWrap .mobileMenuBox').animate({
      right: 0
    })
    $('#headerWrap .bg').fadeIn();
  });

  $('#headerWrap .mobileMenuBox .closeBtn').click(function () {
    $('#headerWrap .mobileMenuBox').animate({
      right: -3000
    })
    $('#headerWrap .bg').fadeOut();
  });

  $('#headerWrap .authBox .btn').click(function () {
    $('#headerWrap .sitemapBox').fadeIn();
  });
  $('#headerWrap .sitemapBox .closeBtn').click(function () {
    $('#headerWrap .sitemapBox').fadeOut();
  });

  //스크롤 시 top 버튼 fadeIn, fadeOut
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#linkBox').fadeIn();
    } else {
      $('#linkBox').fadeOut();
    }
  });

  //상단으로 이동
  $("#linkBox .top").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });



})