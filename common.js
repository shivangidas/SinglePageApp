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
	//Smooth scrolling
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
		|| location.hostname == this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		   if (target.length) {
		     $('html,body').animate({
			 scrollTop: target.offset().top
		    }, 1000);
		    return false;
		}
	    }
	});
	   
});
