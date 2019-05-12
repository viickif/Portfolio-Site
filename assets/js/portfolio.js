$(document).ready(function(){

	var homeText = $('#home h1');

	$(homeText[0]).slideDown(700, function() {
		$(homeText[1]).slideDown(500);
		$(homeText[2]).slideDown(500, function() { window.setTimeout(function(){
				$('#home p').slideDown(150);
				$('.navbar').slideDown(150);
			},250); 
		});
	});

	$(window).on("scroll", function() {
    	if($(window).scrollTop() > $(window).height()){
    		$('.bg-light').addClass("inverse-nav");
    		$('li a').addClass("inverse-nav-link");
    	} else {
    		$('.bg-light').removeClass("inverse-nav");
    		$('li a').removeClass("inverse-nav-link");
    	}
	}); 












});



