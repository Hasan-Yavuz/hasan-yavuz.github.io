var $win = $(window);
var $about = $('.about');

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$about.css('margin-top', '-' + scrollPos/1 + 'px');
});

