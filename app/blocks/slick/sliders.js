$(document).ready(function () {
  $(".js-about-slider").slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    rows: 1,
    swipeToSlide: true,
  });

  $(".js-reviews-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    asNavFor: ".js-slider-nav",
  });
  $(".js-slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".js-reviews-slider",
    dots: false,
    arrows: true,
  });
});
