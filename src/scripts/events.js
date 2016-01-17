/* MENU EVENTS */

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var dest = $(this).attr('href');
	//console.log(dest);
	$('html,body').animate({
		scrollTop: $(dest).offset().top-10}, 'slow');
});

$('.expand-arrow').click(function(e) {
	$(this).toggleClass('active');
	e.preventDefault();
});

// problem: should rotate arrow even if the section
// name is clicked