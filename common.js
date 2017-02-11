$(document).ready(function () {
	"use strict";
	//for the navigation on phone
	$('.nav-toggle, .nav-item').click(function(){
		$('.nav-menu').toggleClass('is-active');
	});
	$('.nav-item').click(function(){
		$('.nav-item').removeClass('is-active');
		$(this).addClass('is-active');
	});
	//For the project flip action
	$('.myCard').hover(function(){
    	$(this).toggleClass('flipped');
  	});
});