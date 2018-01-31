$(document).ready(function() {
	"use strict";
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$(".fixed-top").addClass("opaque");
		}
		else {
			$(".fixed-top").removeClass("opaque");
		}
	});
	
	$(".fixed-top").mouseenter(function() {
		$(".fixed-top").removeClass("opaque");	
	})
	.mouseleave(function() {
		if ($(window).scrollTop() > 200) {
			$(".fixed-top").addClass("opaque");
		}
	});
	
	//$('body').scrollspy({target: ".navbar", offset: 50});
	
	$(".navbar-nav li a[href^='#']").on('click', function(e) {
		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;

		// animate
		$('html, body').animate({
		  	scrollTop: $(this.hash).offset().top
		}, 500, function(){
			// when done, add hash to url
			// (default click behaviour)
			window.location.hash = hash;
		});
	});
});