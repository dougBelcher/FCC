var clock = (function(){
  //Default variables
  var secondsSession = 1500;
  var secondsBreak = 300;
  var count = secondsSession;
  var t;
  var mode = 'Session';
  var clockIsRunning = false;
  var ring = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2015/02/Alarm-clock-sound-short.mp3');
  //cacheDom
  var $body = $('#myclock');
  var $sessionIncrease = $body.find('#session-increase');
  var $sessionDecrease = $body.find('#session-decrease');
  var $sessionDisplay = $body.find('#session-display');
  var $breakIncrease = $body.find('#break-increase');
  var $breakDecrease = $body.find('#break-decrease');
  var $breakDisplay = $body.find('#break-display');
  var $clock = $('#clock');
  var $clockDisplay = $clock.find('#clock-display');
  var $clockCounter = $clock.find('#clock-counter');
  var $clockBackground = $clock.find('#clock-background')
  
  bindEvents();
  render();
  
  //bindEvents
  function bindEvents(){
    $sessionIncrease.click(function(e){
      e.preventDefault();
      changeTimes('session', 60);
    });
    $sessionDecrease.click(function(){
      changeTimes('session', -60);
    });
    $breakIncrease.click(function(){
      changeTimes('break', 60);
    });
    $breakDecrease.click(function(){
      changeTimes('break', -60);
    });
    $clock.click(function(){
      toggleClock();
      runClock();
    });
  }
  //changeTimes
  function changeTimes(time, amount){
    toggleClock(true);
    if(time == 'session'){
      secondsSession += amount;
      secondsSession = Math.min(Math.max(parseInt(secondsSession), 60), 5940);
      count = secondsSession;
    }else if(time == 'break'){
      secondsBreak += amount;
      secondsBreak = Math.min(Math.max(parseInt(secondsBreak), 60), 5940);
    }
    render();
  };
  //toggleClock
  function toggleClock(){
      clockIsRunning = !clockIsRunning;
  };
  
  function switchMode(){
    if(mode == 'Session'){
      count = secondsBreak;
      mode = 'Break';
    }else{
      count = secondsSession;
      mode = 'Session';
    }
  };
  
  //clock2Display
  function clock2Display(seconds){
    var s = seconds % 60;
    var m = Math.floor((seconds % 3600) / 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }
  function percentageDone(){
    var percent;
    if(mode == 'Session'){
      percent = Math.floor((count / secondsSession) * 100)
    }else{
      percent = Math.floor((count / secondsBreak) * 100)
    }
    return (100 - percent) + '%';
  }
  function render(counting){
    var clockCounterHtml, clockDisplayHtml, clockBackgroundHeight, clockBackgroundColor;
    //always the same
    var sessionDisplayHtml = secondsSession/60 + 'm';
    var breakDisplayHtml = secondsBreak/60 + 'm';
    //Changing what's going to render, based on the state of the clock
    if(!counting){
      clockCounterHtml = clock2Display(secondsSession);
      clockDisplayHtml = 'Session';
      clockBackgroundHeight = '100%';
      clockBackgroundColor = '#CFD8DC';
    }else{
      clockCounterHtml = clock2Display(count);
      clockDisplayHtml = mode;
      clockBackgroundHeight = percentageDone();
      clockBackgroundColor = (mode == 'Session' ? '#CFD8DC' : '#9E9E9E')
    }
      //actual rendering
      $sessionDisplay.text(sessionDisplayHtml);
      $breakDisplay.html(breakDisplayHtml);
      $clockDisplay.html(clockDisplayHtml);
      $clockCounter.html(clockCounterHtml);
      $clockBackground.css('height', clockBackgroundHeight);
      $clockBackground.css('background-color', clockBackgroundColor)
  };
  //runClock
  function runClock(){
    if(clockIsRunning){
      if(count == 0){
        switchMode();
        ring.play();
        render(true);
      }else{
        render(true);
        count--;
      }
      t = setTimeout(runClock, 1000)
    }
  }
})()