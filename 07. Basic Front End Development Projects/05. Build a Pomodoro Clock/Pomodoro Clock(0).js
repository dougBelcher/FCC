$(document).ready(function() {
		var breakTime = 300; // In seconds
		var workTime = 1500; // In seconds
		var currentTime = workTime;
		var working = true;
	
		// Sound for timer ring
		var audioElement = document.createElement('audio');
		audioElement.setAttribute('src', 'http://reneroth.org/projects/codepen/pomodoro_ring.mp3');

		// Display the initial amount of time
		displayTime();
		$("body").css("background-color", "#d9534f"); // red

		setInterval(function() {
				checkTime();
		}, 1000);

		// Checks whether the time is up or not
		function checkTime() {
				if (currentTime >= 1) {
						currentTime--;
						displayTime();
				} else if (working && currentTime == 0) {
						audioElement.play();
						switchTime();
				} else {
						audioElement.play();
						switchTime();
				}
		}

		// Displays the current time 
		function displayTime() {
				var min = Math.floor(currentTime / 60);
				var sec = Math.floor(currentTime % 60);

				//Add a 0 to the front of the second when appropriate
				if (sec < 10) {
						sec = "0" + sec;
				}

				$("#time-text").text(min + ":" + sec);
		}

		// Toggles the appearance of the buttons 
		function toggleButtons() {
				if (!working) {  // break
					$("#breakBtn").removeClass("btn-default").addClass("btn-success active");
					$("#workBtn").removeClass("btn-success active").addClass("btn-default");
					$("body").css("background-color", "#286090"); // blue
				} else { // working
					$("#workBtn").removeClass("btn-default").addClass("btn-success active");
					$("#breakBtn").removeClass("btn-success active").addClass("btn-default");
					$("body").css("background-color", "#d9534f"); // red 
				}
		}

		// Switches the current time
		function switchTime() {
			console.log("switchTime");
			working = !working;
			toggleButtons();
			if (working) {
				currentTime = workTime;
			} else {
				currentTime = breakTime;
			}
			displayTime();
		}

		// Update the timer
		$("#updateBtn").on("click", function() {
			console.log("updateBtn.on.click");
				working = false;
				workTime = $("#workTime").val() * 60;
				breakTime = $("#breakTime").val() * 60;
				switchTime();
		});

		// Restart the timer
		$("#restartBtn").on("click", function() {
			console.log("restartBtn.on.click");
			switchTime();
		});

		// Toggling button when you click on the work button
		$("#workBtn").on("click", function() {
			console.log("workBtn.on.click");
			$("#workBtn").removeClass("btn-danger").addClass("btn-default active");
				$("#breakBtn").removeClass("btn-primary active").addClass("btn-primary");
				switchTime();
		});

		// Toggling button whne you click on the break button
		$("#breakBtn").on("click", function() {
			console.log("breakBtn.on.click");
			$("#breakBtn").removeClass("btn-primary").addClass("btn-default active");
			$("#workBtn").removeClass("btn-default active").addClass("btn-danger");
			switchTime();
		});
});