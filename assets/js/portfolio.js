$(document).ready(function(){

	var homeText = $('#home h1');

	$(homeText[0]).slideDown(300, function() {
		$(homeText[1]).slideDown(300, function() {
			$(homeText[2]).slideDown(300, function() {
				$('#home p').slideDown(150);
				$('.navbar').slideDown(150);
			});
		});
	});

	$(window).on('scroll', function() {
		console.log("hi");
	});












});



