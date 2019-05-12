$(document).ready(function(){

	var homeText = $('#home h1');

	$(homeText[0]).slideDown(359, function() {
		$(homeText[1]).slideDown(350);
		$(homeText[2]).slideDown(350, function() {
			$('#home p').slideDown(150);
			$('.navbar').slideDown(150);
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



