$( document ).ready(function() {

var date = new Date(2017, 4, 19);
 var now = new Date();
 var diff = (date.getTime()/1000) - (now.getTime()/1000);

var clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});
});
