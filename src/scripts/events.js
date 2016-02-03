/* MENU EVENTS */

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var dest = $(this).attr('href');
	//console.log(dest);
	$('html,body').animate({
		scrollTop: $(dest).offset().top-10}, 'slow');
});

/* ACCORDION INFO EVENTS */
// sets accord-info to display: none on page load
$('.accord-info').css('display', 'none');

/*
$('.expand-arrow').click(function(e) {
	$(this).toggleClass('active');
	e.preventDefault();
});*/

$('.info-title').click(function(e) {
	e.preventDefault();
	$(this).find('.expand-arrow').toggleClass('active');
	$(this).siblings('.accord-info').slideToggle();
});

// Calendar Events
$('#full-cal-link').click(function(e) {
	$('#calendar-popOver').toggleClass('hidden');
});

$('#close-cal').click(function(e) {
	$('#calendar-popOver').toggleClass('hidden');
});