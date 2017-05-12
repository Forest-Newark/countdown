$( document ).ready(function() {

var date = new Date(2017, 4, 19);
 var now = new Date();
 var diff = (date.getTime()/1000) - (now.getTime()/1000);


var clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});








        var elem = document.getElementById("myBar");
        var percent = document.getElementById("percentage")
        var tiyStartDate = new Date(2017,1,27);
        var tiyEndDate = new Date(2017, 4, 19);
        var totaltime = (tiyEndDate.getTime()/1000) - (tiyStartDate.getTime()/1000);
        var currentDate = new Date();
        var timeLeft = tiyEndDate.getTime()/1000 - currentDate.getTime()/1000;
        var timeElapsed = totaltime - timeLeft;
        var percentElapsed = timeElapsed / totaltime;
        var width = Math.floor(percentElapsed * 100);
        var id = setInterval(frame, 100);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                elem.style.width = width + '%';
                percent.innerHTML = width +'% done with Iron Yard';
            }
        }






});
