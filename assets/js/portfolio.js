
$(document).ready(function(){

	var homeText = $('#home h1');

	$(homeText[0]).slideDown(700, function() {
		$(homeText[1]).slideDown(500);
		$(homeText[2]).slideDown(500, function() { window.setTimeout(function(){
				$('#home p').slideDown(150);
				$('.navbar').slideDown(150);
			},300); 
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
					},300); 
				});
			});
    	} else if (Math.abs(homeTop) > height) {
    		homeText.slideUp(100);
    		$('#home p').slideUp(150);
    	}

    	var toSlide = $('.section');

    	for(var i = 1; i < toSlide.length; i++) {
    		if(Math.abs(toSlide.eq(i).offset().top) < range) {
    			toSlide.eq(i).find('.slide').slideDown(500);
    		} else if (Math.abs(toSlide.eq(i).offset().top) > height - 20) {
    			toSlide.eq(i).find('.slide').slideUp(500);
    		}
    	}

    	if(aboutTop >= 100 || (projectsTop <= 50 && project1Top >= 100) || contactTop <= 50) {
    		$('li a').removeClass("inverse-nav-link");
    		if(aboutTop < 100 )
    			$('nav a img').attr("src", "assets/img/logo-white.png");
    	} else {
    		$('li a').addClass("inverse-nav-link");
    		$('nav a img').attr("src", "assets/img/logo.png");
    	}
	});

});



