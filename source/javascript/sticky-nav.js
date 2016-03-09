$(window).scroll(function() {
if ($(this).scrollTop() > 60){  
    $('.nav-logo').addClass("mk-small");
	$('.nav-items').addClass("nav-small");
  }
  else{
    $('.nav-logo').removeClass("mk-small");
	$('.nav-items').removeClass("nav-small");
  }
});