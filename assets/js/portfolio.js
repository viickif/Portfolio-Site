
$(document).ready(function(){

	var homeText = $('#home h1');

	$(homeText[0]).slideDown(700, function() {
		$(homeText[1]).slideDown(300);
		$(homeText[2]).slideDown(300, function() { window.setTimeout(function(){
				$('#home p').slideDown(150);
				$('.navbar').slideDown(150);
			},300); 
		});
	});

	$('h1').on('click', function() {
		alert("hi");
	})

	$('.scroll').on('scroll', function(e) {
		var scrollPos = $('.scroll').scrollTop();
    	if(scrollPos > $('#about').offset().top + 500){
    		$('li a').addClass("inverse-nav-link");
    	} else {
    		$('li a').removeClass("inverse-nav-link");
    	}

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
				$(homeText[1]).slideDown(300);
				$(homeText[2]).slideDown(300, function() { window.setTimeout(function(){
					$('#home p').slideDown(150);
					$('.navbar').slideDown(150);
					},300); 
				});
			});
    	} else if (Math.abs(homeTop) > height) {
    		homeText.slideUp(100);
    		$('#home p').slideUp(100);
    	}

    	if(Math.abs(aboutTop) < range){
    		$('#about .text p').slideDown(300);
    	} else if (Math.abs(aboutTop) > height - 20) {
    		$('#about .text p').slideUp(100);
    	}

    	if(Math.abs(projectsTop) < range){
    		$('#projects-header').slideDown(200);
    	} else if (Math.abs(projectsTop) > height - 20) {
    		$('#projects-header').slideUp(100);
    	}

    	if(Math.abs(project1Top) < range ){
    		$('#project1 .text p').slideDown(300);
    	} else if (Math.abs(project1Top) > height - 20) {
    		$('#project1 .text p').slideUp(100);
    	}

    	if(Math.abs(project2Top) < range){
    		$('#project2 .text p').slideDown(300);
    	} else if (Math.abs(project2Top) > height - 20) {
    		$('#project2 .text p').slideUp(100);
    	}

    	if(Math.abs(contactTop) < range ){
    		$('#contact .text p').slideDown(300);
    	} else if (Math.abs(contactTop) > height - 20) {
    		$('#contact .text p').slideUp(100);
    	}

	});


});



