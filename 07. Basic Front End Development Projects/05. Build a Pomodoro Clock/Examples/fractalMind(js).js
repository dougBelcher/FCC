var timerId;
var pomodoroTime = function(pomodoroMinutes) {
  return (60 * pomodoroMinutes)
}
var breakTime = function(breakMinutes) {
  return (60 * breakMinutes)
}
var pomodoroMinutes = 25
var breakMinutes = 5

function startTimer(duration, display) {
  var timer = duration,
    minutes, seconds;
  timerId = setInterval(function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    if (timer == "00:00") {
      window.clearInterval(timerId);
      alert("Time's Up!");
    }  
    }
  }, 1000);
};

function initiate(setTimer) {
  var duration = setTimer,
    display = document.querySelector('#time');
  startTimer(duration, display);
};
//Time Adjustment Buttons
$("#lessPomo").click(function() {
  window.pomodoroMinutes = window.pomodoroMinutes - 1
  $("#pomoSet").text(pomodoroMinutes);
  console.log(pomodoroMinutes);
});
$("#morePomo").click(function() {
  window.pomodoroMinutes = window.pomodoroMinutes + 1
  $("#pomoSet").text(pomodoroMinutes);
  console.log("Pomodoro Time: " + pomodoroMinutes);
});
$("#lessBreak").click(function() {
  window.breakMinutes = window.breakMinutes - 1
  $("#breakSet").text(breakMinutes);
  console.log(breakMinutes);
});
$("#moreBreak").click(function() {
  window.breakMinutes = window.breakMinutes + 1
  $("#breakSet").text(breakMinutes);
  console.log("Break Time: " + breakMinutes);
});
//Timer Control Buttons
$("#startPomo").click(function() {
  window.clearInterval(timerId);
  initiate(pomodoroTime(pomodoroMinutes));
});
$("#startBreak").click(function() {
  window.clearInterval(timerId);
  initiate(breakTime(breakMinutes));
});
$("#clearDisplay").click(function() {
  window.clearInterval(timerId);
  $("#time").text("--:--")
});