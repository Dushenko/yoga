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
  } //scroll to section


  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });
});
$(document).ready(function () {});