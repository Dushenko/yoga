"use strict";

$(document).ready(function () {
  //fancybox
  $(".gallery a").attr("data-fancybox", "mygallery");
  $(".gallery a").each(function () {
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  $(".gallery a").fancybox();
});
$(document).ready(function () {
  //burger
  if (document.querySelector(".js-burger")) {
    $(".js-burger").click(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".js-nav").removeClass("active");
        $("body").removeClass("overflow");
      } else {
        $(this).addClass("active");
        $(".js-nav").addClass("active");
        $("body").addClass("overflow");
      }
    });
  } // fixed header


  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  }); //scroll to section

  $(".scroll-link").click(function () {
    var scroll_el = $(this).attr("href");

    if ($(scroll_el).length != 0) {
      $("html, body").animate({
        scrollTop: $(scroll_el).offset().top - 50 + 'px'
      }, 1000);
      $(".js-burger").removeClass("active");
      $(".js-nav").removeClass("active");
      $("body").removeClass("overflow");
    }

    return false;
  });
});
$(document).ready(function () {
  var swiperIntro = new Swiper(".js-about-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".js-about-next",
      prevEl: ".js-about-prev"
    }
  });
});