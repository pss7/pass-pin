
$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 1500
    });
    $('#section01 .titleBox').addClass('active');
  });

  /* 슬라이드 */
  $('#section05 .slick').slick({
    variableWidth: true,
    autoplay: true,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          variableWidth: false,
          slidesToShow: 1
        }
      },
    ]
  });

  /* 스크롤 시 해당 영역 클래스 적용 */
  $(window).scroll(function () {
    let scrollPos = $(window).scrollTop();

    $('.scrollElement').each(function () {
      let elementOffset = $(this).offset().top;

      if (scrollPos + $(window).height() > elementOffset) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });

});