$(document).ready(function(){
    
    var countDownDate = new Date("May 1, 2018 00:00:00").getTime();
    var x = setInterval(function() {

      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
      }

      document.getElementById("timer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 100);
});

$(window).resize(function() {
    $("div").width( $(window).width() );
    $("div").height( $(window).height() );
});

function getRandomTranslate() {
    var x = Math.random() * $(window).width();
    var y = Math.random() * $(window).height();
    return "translate(" + x + "," + y + ")";
}