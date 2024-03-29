$(document).ready(function() {
	$('.ham-icon').click(function() {
		$('#ham-second').animate({'width': 'toggle'}, 1000);
		// $('#ham-second').slideToggle(1000);
	});
	$('.ham-close').click(function() {
		$('#ham-second').animate({'width': 'toggle'}, 1000);
		// $('#ham-second').slideToggle(1000);
	});
});
$(document).ready(function(){
    $(".block-info__scroll").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 1000);
	});
});


$(document).ready(function(){
	$('.partners-slider').slick({
		
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				arrows: false
			  }
			}
		]

	});
});

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	
  
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: -100, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 2000, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: true, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});



var text = ["Adventure.", "Projects.", "Challenge."];
var counter = 0;
var elem = $("#changeText");

setInterval(change, 6000);

function change() {
    elem.fadeOut( 2000 ,function(){
        elem.html(text[counter]);
        counter++;
		if(counter >= text.length) { counter = 0; }
		elem.fadeIn(2000);
	});
}