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

$('.info-title').click(function(e) {
	e.preventDefault();
	$(this).find('.expand-arrow').toggleClass('active');
	$(this).siblings('.accord-info').slideToggle();
/*
	if ($(this).find('h3').html() === 'Staff
				<i class="fa fa-angle-down expand-arrow"></i>') {
		console.log('opening staff section');
		var dest = $(this).attr('href');
		$('html,body').animate({
		scrollTop: $(dest).offset().top-10}, 'slow');
	};*/
});

/* CALENDAR EVENTS */
// sets opacity of calendar popup to 0 on page load
$('#calendar-popOver').css('display', 'none');

$('#full-cal-link').click(function(e) {
	console.log('opening calendar');
	$('#calendar-popOver').fadeToggle('slow', 'linear');
});

$('#close-cal').click(function(e) {
	$('#calendar-popOver').fadeToggle('slow', 'linear');
});