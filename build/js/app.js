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
  } //active link


  $(".nav__link").click(function () {
    $(".nav__link").removeClass("active");
    $(this).addClass("active");
  }); // fixed header

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
        scrollTop: $(scroll_el).offset().top - 50 + "px"
      }, 1000);
      $(".js-burger").removeClass("active");
      $(".js-nav").removeClass("active");
      $("body").removeClass("overflow");
    }

    return false;
  });
});
$(document).ready(function () {
  $(".js-about-slider").slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    rows: 1,
    swipeToSlide: true
  });
  $(".js-reviews-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    asNavFor: ".js-slider-nav"
  });
  $(".js-slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".js-reviews-slider",
    dots: false,
    arrows: true
  });
});
$(document).ready(function () {
  //prise hover
  $(".price__btn").hover(function () {
    $(this).parent().parent().find(".price__head").toggleClass("active");
  }); //validation form

  $("#formClass").validate({
    ignore: [],
    rules: {
      user_name: {
        required: true
      },
      user_phone: {
        required: true
      },
      select_class: {
        required: true
      }
    },
    messages: {
      user_name: "Please enter your name",
      user_phone: "Please enter your phone number",
      select_class: "Please select a class"
    }
  }); //animation

  AOS.init();
});