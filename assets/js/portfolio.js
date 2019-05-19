
$(document).ready(function(){

	var homeText = $('#home h1');

	$(homeText[0]).slideDown(700, function() {
		$(homeText[1]).slideDown(500);
		$(homeText[2]).slideDown(500, function() { window.setTimeout(function(){
				$('#home p').slideDown(150);
				$('#home a').slideDown(150);
			},300); 
		});
	});

	var pages = new Map();
	pages.set('#project1 a', '#project1-page');
	pages.set('#project2 a', '#project2-page');
	pages.set('#project3 a', '#project3-page');
	pages.set('#project4 a', '#project4-page');

	pages.forEach(function(value, key) {
	  $(key).on('click', function() {
				$(value).animate({width: 'show'});
		});
	});

	$('.back-btn').on('click', function() {
		$(this).closest('.page').animate({width: 'hide'});
	})

	$('nav a').on('click', function() {
		pages.forEach(function(value) {
			$(value).animate({width: 'hide'});	
		});
	});



	$('.scroll').on('scroll', function(e) {

    	var homeTop = $('#home').offset().top;
    	var aboutTop = $('#about').offset().top;
    	var projectsTop = $('#projects').offset().top;
    	var project1Top = $('#project1').offset().top;
    	var project2Top = $('#project2').offset().top;
    	var contactTop = $('#contact').offset().top;
    	var height = $(window).height();
    	var range = $(window).width() / 5;


    	if(Math.abs(homeTop) < range){
			$(homeText[0]).slideDown(700, function() {
				$(homeText[1]).slideDown(500);
				$(homeText[2]).slideDown(500, function() { window.setTimeout(function(){
						$('#home p').slideDown(150);
						$('#home a').slideDown(150);
					},300); 
				});
			});
    	} else if (Math.abs(homeTop) > height) {
    		homeText.slideUp(100);
    		$('#home p').slideUp(150);
    		$('#home a').slideUp(150);
    	}

    	var toSlide = $('.section');

    	for(var i = 1; i < toSlide.length; i++) {
    		if(Math.abs(toSlide.eq(i).offset().top) < range) {
    			toSlide.eq(i).find('.slide').slideDown(500);
    		} else if (Math.abs(toSlide.eq(i).offset().top) > height - 20) {
    			toSlide.eq(i).find('.slide').slideUp(500);
    		}
    	}

    	if((projectsTop <= 50 && project1Top >= 100) || contactTop <= 50) {
    		$('li a').addClass("inverse-nav-link");
    		$('nav a img').attr("src", "assets/img/logo-white.png");
    	} else {
    		$('li a').removeClass("inverse-nav-link");
    		$('nav a img').attr("src", "assets/img/logo.png");
    	}

    	 if(aboutTop < 100 ) {
    	 	$('nav').fadeIn(300);
    	 } else {
    	 	$('nav').fadeOut(300);
    	 }
	});

});



