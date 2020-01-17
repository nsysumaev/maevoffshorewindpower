(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

	// ========================
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
		  $('.scrollup').fadeIn();
		} else {
		  $('.scrollup').fadeOut();
		}
	  });
	
	  $('.scrollup').click(function() {
		$("html, body").animate({
		  scrollTop: 0
		}, 1000);
		return false;
	  });
	
	  // local scroll
	  jQuery('.navbar').localScroll({
		hash: true,
		offset: {
		  top: 0
		},
		duration: 800,
		easing: 'easeInOutExpo'
	  });
	
	  $('.scrollto').on('click', function(e) {
		  e.preventDefault();
		  var target = $(this.hash);
		  $('html, body').animate({
			scrollTop: target.offset().top - 60
		  }, 1500, 'easeInOutExpo');
	  });
	
	
	  // portfolio
	  if ($('.isotopeWrapper').length) {
	
		var $container = $('.isotopeWrapper');
		var $resize = $('.isotopeWrapper').attr('id');
		// initialize isotope
	
		$container.isotope({
		  itemSelector: '.isotopeItem',
		  resizable: false, // disable normal resizing
		  masonry: {
			columnWidth: $container.width() / $resize
		  }
	
		});
	
		$('#filter a').click(function() {
	
		  $('#filter a').removeClass('current');
		  $(this).addClass('current');
		  var selector = $(this).attr('data-filter');
		  $container.isotope({
			filter: selector,
			animationOptions: {
			  duration: 1000,
			  easing: 'easeOutQuart',
			  queue: false
			}
		  });
		  return false;
		});
	
	
		$(window).smartresize(function() {
		  $container.isotope({
			// update columnWidth to a percentage of container width
			masonry: {
			  columnWidth: $container.width() / $resize
			}
		  });
		});
	  }
	
	  $(".navbar-collapse a").on('click', function() {
	  $(".navbar-collapse").removeClass('in');
	  $(".navbar-collapse").addClass('collapse');
	  });

})(jQuery);
