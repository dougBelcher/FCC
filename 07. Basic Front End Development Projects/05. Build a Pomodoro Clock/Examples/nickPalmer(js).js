$(document).ready(function() {
		var breakTime = 300; //In seconds
		var workTime = 1500; //In seconds
		var currentTime = workTime;
		var working = true;
	
		//Sound for timer ring
		var audioElement = document.createElement('audio');
		audioElement.setAttribute('src', 'http://reneroth.org/projects/codepen/pomodoro_ring.mp3');

		//Display the initial amount of time
		displayTime();
		$("body").css("background-color", "#d9534f");

		setInterval(function() {
				checkTime();
		}, 1000);

		//Checks whether the time is up or not
		function checkTime() {
				if (currentTime >= 1) {
						currentTime--;
						displayTime();
				} else if (working && currentTime == 0) {
						audioElement.play();
						switchBreakTime();
				} else {
						audioElement.play();
						switchWorkTime();
				}
		}

		//Displays the current time based on the number of seconds left
		function displayTime() {
				var min = Math.floor(currentTime / 60);
				var sec = Math.floor(currentTime % 60);

				//Add a 0 to the front of the second when appropriate
				if (sec < 10) {
						sec = "0" + sec;
				}

				$("#time-text").text(min + ":" + sec);
		}

		//Toggles the appearance of the buttons while not making it spamable
		function toggleButtons() {
				if (!working) {
						$("#breakBtn").removeClass("btn-primary").addClass("btn-default active");
						$("#workBtn").removeClass("btn-default active").addClass("btn-danger");
						$("body").css("background-color", "#286090");
				} else {
						$("#workBtn").removeClass("btn-danger").addClass("btn-default active");
						$("#breakBtn").removeClass("btn-primary active").addClass("btn-primary");
						$("body").css("background-color", "#d9534f");
				}
		}

		//Switches the current time to break time
		function switchBreakTime() {
				if (!working) {
						return;
				}

				working = !working;
				toggleButtons();
				currentTime = breakTime;
				displayTime();
		}

		//Switches the current time to work time
		function switchWorkTime() {
				if (working) {
						return;
				}

				working = !working;
				toggleButtons();
				currentTime = workTime;
				displayTime();
		}

		//Update the timer
		$("#updateBtn").on("click", function() {
				working = false;
				workTime = $("#workTime").val() * 60;
				breakTime = $("#breakTime").val() * 60;
				switchWorkTime();
		});

		//Restart the timer
		$("#restartBtn").on("click", function() {
				if (working) {
						working = false;
						switchWorkTime();
				} else {
						working = true;
						switchBreakTime();
				}
		});

		//Toggling button when you click on the work button
		$("#workBtn").on("click", function() {
				/*$("#workBtn").removeClass("btn-danger").addClass("btn-default active");
				$("#breakBtn").removeClass("btn-primary active").addClass("btn-primary");*/
				switchWorkTime();
		});

		//Toggling button whne you click on the break button
		$("#breakBtn").on("click", function() {
				/*$("#breakBtn").removeClass("btn-primary").addClass("btn-default active");
				$("#workBtn").removeClass("btn-default active").addClass("btn-danger");*/
				switchBreakTime();
		});
});