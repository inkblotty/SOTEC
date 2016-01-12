// menu events

var scumNav = document.getElementById('scum-nav');
var scumAbout = document.getElementById('scum-about');
var theologyNav = document.getElementById('theology-nav');
var theologyAbout = document.getElementById('theology');
var staffNav = document.getElementById('staff-nav');
var staffAbout = document.getElementById('staff-container');

function scrollTo(doc, to, duration) {
	if (duration < 0) return;
	var difference = to - doc.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function() {
		doc.scrollTop = doc.scrollTop + perTick;
		if (doc.scrollTop === to) {return;}
		scrollTo(doc, to, duration - 10);
	}, 10);
}

scumNav.onclick = function() {
	scrollTo(document.body, scumAbout.offsetTop, 300);
};

theologyNav.onclick = function() {
	scrollTo(document.body, theologyAbout.offsetTop, 300);
};

staffNav.onclick = function() {
	scrollTo(document.body, staffAbout.offsetTop, 300);
};
