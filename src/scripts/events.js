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

$('#full-cal-link').click(function(e) {
	$('#calendar-popOver').toggleClass('hidden');
});

$('#close-cal').click(function(e) {
	$('#calendar-popOver').toggleClass('hidden');
});