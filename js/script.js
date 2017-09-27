$( document ).ready(function() {
//Leap End Date
var date = new Date(2018, 1, 15);

//Current Date
var now = new Date();

//Calculate time remaining
var diff = (date.getTime()/1000) - (now.getTime()/1000);


var clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});

        var elem = document.getElementById("myBar");
        var percent = document.getElementById("percentage")
        
		
		var leapStartDate = new Date(2017,8,11);
        var leapEndDate = new Date(2018, 1, 15);
        
		
		var totaltime = (leapEndDate.getTime()/1000) - (leapStartDate.getTime()/1000);
        var currentDate = new Date();
        var timeLeft = leapEndDate.getTime()/1000 - currentDate.getTime()/1000;
        var timeElapsed = totaltime - timeLeft;
        var percentElapsed = timeElapsed / totaltime;
        var width = Math.floor(percentElapsed * 100);
        var id = setInterval(frame, 100);
        
		function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                elem.style.width = width + '%';
                percent.innerHTML = width +'% complete with LEAP';
            }
        };

      var secondsElapsedNow = document.getElementById("secondsElapsedNow");
      var secondsTotal = document.getElementById("totalSeconds");
      secondsTotal.innerHTML = totaltime;
      var secondsElaspedCount = Math.floor(timeElapsed);
      var id = setInterval(changeElapsed, 1000);
      function changeElapsed(){
        secondsElapsedNow.innerHTML = secondsElaspedCount;
        secondsElaspedCount++;
      }



});
