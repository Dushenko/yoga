//=require ../blocks/**/*.js
$(document).ready(function () {

  //prise hover
  $(".price__btn").hover(function () {
    $(this).parent().parent().find(".price__head").toggleClass("active");
  });

  //validation form
  $("#formClass").validate({
		ignore: [],
    rules: {
      user_name: { required: true },
      user_phone: { required: true },
      select_class: { required: true },
    },
    messages: {
      user_name: "Please enter your name",
      user_phone: "Please enter your phone number",
      select_class: "Please select a class",
    },
	});
	
	//animation
	AOS.init();
});
