// JavaScript Document
var typed = new Typed('.element', {
		strings: ["Web Designer.", "Code Developer.","Designer.","Content Creator."],
		typeSpeed:70,
		backSpeed:70,
		loop:true,
	});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();
  AOS.init();