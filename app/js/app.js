//=require ../blocks/**/*.js
$(document).ready(function () {
  var swiperIntro = new Swiper(".js-about-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".js-about-next",
      prevEl: ".js-about-prev",
    },
  });
});
