$(document).ready(function(){
 //$(".owl-carousel").owlCarousel();
	  var owl = $('.owl-carousel');
		owl.owlCarousel({
	    items:3,
	    loop:true,
	    margin:1,
	    autoplay:true,
	    lazyLoad:true,
        slideTransition: 'linear',
	    autoplayTimeout: 4000,
	    autoplaySpeed: 4000,
	    autoplayHoverPause:false,
	});
});