//=require ../blocks/**/*.js
$(document).ready(function () {
  //nice select
	$("select").niceSelect();
	
	
	$(".price__btn").hover(function () {
    $(this).parent().parent().find(".price__head").toggleClass("active");
  });
});
