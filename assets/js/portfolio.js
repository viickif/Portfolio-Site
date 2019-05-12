


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
    	if($('.scroll').scrollTop() > $('#about').offset().top + 500){
    		$('.bg-light').addClass("inverse-nav");
    		$('li a').addClass("inverse-nav-link");
    	} else {
    		$('.bg-light').removeClass("inverse-nav");
    		$('li a').removeClass("inverse-nav-link");
    	}
	});


});



