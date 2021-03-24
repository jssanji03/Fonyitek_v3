$(function(){
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});
});

$(function(){
  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
});

$(function(){
  //for menu active class
 
  $('#main').on('click', function (event) {
   $('.navbar-collapse').collapse('hide');
	});
  $('.nav-item').on('click', function (event) {
   $('.navbar-collapse').collapse('hide');
	});
});




