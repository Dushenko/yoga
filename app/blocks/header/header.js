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
  }

  // fixed header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  // function menuFixed() {
  //   var headerHeight = $("header.header").height(),
  //     windowScroll = $(window).scrollTop();
  //   windowScroll >= headerHeight
  //     ? $(".menu").addClass("fixed")
  //     : $(".menu").removeClass("fixed");
  // }

  // $(window).scroll(function () {
  //   menuFixed();
  // });
  // menuFixed();
});
