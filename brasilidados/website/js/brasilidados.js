jQuery(function($) { 
	$('#info-wrapper').mouseover(openEye);
	$('#info-wrapper').click(openEye);
	$('#bottom-header span.red-text').click(openEye);
	
	$('#top-header').mouseover(closeEye);
	$('#top-footer').mouseover(closeEye);
	$('#bottom-footer').mouseover(closeEye);
	
});

var openEye = function() {
	
	$('#bottom-header h1').stop(true,false).animate({paddingTop: '20px'}, {duration: 400});
	$('#bottom-header').stop(true,false).animate({height: '130px'}, {duration: 400});
	$('#top-footer').stop(true,false).animate({top: '420px', height: '50px'}, {duration: 400});
	$('#info-wrapper').stop(true,false).animate({top: '170px', height: '250px'}, {duration: 400});
	
}

var closeEye = function() {
	
	$('#bottom-header h1').stop(true,false).animate({paddingTop: '90px'}, {duration: 1000});
	$('#bottom-header').stop(true,false).animate({height: '280px'}, {duration: 1000});
	$('#top-footer').stop(true,false).animate({top: '360px', height: '110px'}, {duration: 1000});
	$('#info-wrapper').stop(true,false).animate({top: '320px', height: '40px'}, {duration: 1000});
	
}

jQuery(document).ready(function($) {
	$('a.video-fancybox').fancybox({
		helpers: {
			media: {}
		}
	});
	$('a.form-fancybox').fancybox({
		'type': 'iframe',
		'width': '510',
		'height': 'auto'
	});
	$('a.form-apoio-fancybox').fancybox({
		'type': 'iframe',
		'width': '510',
		'height': 'auto'
	});
	$('a.form-cadastro-fancybox').fancybox({
		'type': 'iframe',
		'width': '500',
		'height': '460'
	});
	
});