$(document).ready(function() {
	"use strict";

	$("body").scrollspy({target: ".navbar", offset: 60});
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$("#navbar").removeClass("opaque");
		}
		else {
			$("#navbar").addClass("opaque");
		}
	});
	
	$("#navbar").mouseenter(function() {
		$("#navbar").addClass("opaque");
	})
	.mouseleave(function() {
		if ($(window).scrollTop() > 200) {
			$("#navbar").removeClass("opaque");
		}
	});
	
	$("#navbarSupportedContent a").on("click", function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			
			var hash = this.hash;
			
			$("html, body").animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
}); 
