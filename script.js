$(document).ready(function(){
    
    var countDownDate = new Date("May 4, 2018 16:38:00").getTime(); // 4:38pm
    var x = setInterval(function() {

      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var ms = Math.floor(distance % 1000);

      /*
      if (days < 10) {
        days = "0" + days;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }*/

      
      if (ms < 100 && ms > 9) {
        ms = "0" + ms;
      }
      else if (ms < 10) {
        ms = "00" + ms;
      }
      else if (ms < 1) {
        ms = "000";
      }

      console.log(ms);

      //document.getElementById("timer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
      document.getElementById("timer").innerHTML = days + "d : " + hours + "h : " + ms + "ms" + "<br>" + "☁︎&emsp;☁&emsp;☁︎︎";

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "0d : 0h : 0ms";
      }
    }, 100);
});

$(window).resize(function() {
    $("div").width( $(window).width() );
    $("div").height( $(window).height() );
});

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}