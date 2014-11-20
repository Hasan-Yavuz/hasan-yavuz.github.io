var $wordmark = $('.wordmark');
var $landing = $('.landing');

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$wordmark.css('transform', 'center ' + scrollPos / 20 + 'px');
	$landing.css('background-position', 'center ' + scrollPos / 20 + 'px');
});