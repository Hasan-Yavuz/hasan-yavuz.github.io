var $win = $(window);
// var $landing = $('.landing');
// var $wordmark = $('.wordmark');
$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

(function () {
    $(document).foundation();
}.call(this));

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

//	$landing.css('background-position', 'center ' + scrollPos/2 + 'px');
//    $wordmark.css('top', '' + scrollPos/2 + 'px');
});

