


// $('#loadingDiv').bind('ajaxStart', function(){
//     $(this).show();
// }).bind('ajaxStop', function(){
//     $(this).hide();
// })

// $(window).on('load', function() {
// 	$('#loadingDiv').css("display", "block");
// })
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


    	if(homeTop == 0 ){
			$(homeText[0]).slideDown(700, function() {
				$(homeText[1]).slideDown(300);
				$(homeText[2]).slideDown(300, function() { window.setTimeout(function(){
					$('#home p').slideDown(150);
					$('.navbar').slideDown(150);
					},300); 
				});
			});
    	} else if (aboutTop == 0) {
    		homeText.slideUp();
    		$('#home p').slideUp(1);
    	}

    	if(aboutTop == 0 ){
    		$('#about .text p').slideDown(200);
    	} else if (projectsTop == 0 || homeTop == 0) {
    		$('#about .text p').slideUp(1);
    	}

    	if(projectsTop == 0 ){
    		$('#projects p').slideDown(200, function() {
	    			window.setTimeout(function(){
					$('#projects h1').slideDown(200);
				},300); 
    		});
    	} else if (projectsTop == 0 || project2Top == 0) {
    		$('#projects p').slideUp(1);
    		$('#projects h1').slideUp(1);
    	}

    	if(project1Top == 0 ){
    		$('#project1 .text p').slideDown(200);
    	} else if (projectsTop == 0 || project2Top == 0) {
    		$('#project1 .text p').slideUp(1);
    	}

    	if(project2Top == 0 ){
    		$('#project2 .text p').slideDown(200);
    	} else if (contactTop == 0 || project1Top == 0) {
    		$('#project2 .text p').slideUp(1);
    	}

	});


});



