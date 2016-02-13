$('#no-JS').hide();

/* MENU EVENTS */

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var dest = $(this).attr('href');
	//console.log(dest);
	// move to separate function
	if(window.innerWidth <= 800 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		$('#menu-switch').prop("checked", false);
	}

	$('html,body').animate({
		scrollTop: $(dest).offset().top-10}, 'slow');
});

// opens staff container on menu click
$('#staff-link').click(function(e) {
	e.preventDefault();
	$('#staff').find('.expand-arrow').addClass('active');
	$('#staff').find('.accord-info').slideDown();
});

/* ACCORDION INFO EVENTS */
// sets accord-info to display: none on page load
$('.accord-info').css('display', 'none');

$('.info-title').click(function(e) {
	e.preventDefault();
	$(this).find('.expand-arrow').toggleClass('active');
	$(this).siblings('.accord-info').slideToggle();
});

/* CALENDAR EVENTS */
// sets opacity of calendar popup to 0 on page load
$('#calendar-popOver').css('display', 'none');

$('#full-cal-link').click(function(e) {
	//console.log('opening calendar');
	$('#calendar-popOver').fadeToggle('fast', 'linear');
});

$('#close-cal').click(function(e) {
	$('#calendar-popOver').fadeToggle('fast', 'linear');
});
