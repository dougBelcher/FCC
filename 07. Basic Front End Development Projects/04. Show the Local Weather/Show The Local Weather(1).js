$(document).ready(function() {
		// Default values for parameters
		var lat = 0;
		var lon = 0;
		var iconID = "";
		var tempF = 0;
		var tempC = 0;
		var tempK = 0;
		var curWeather = "";
		var curLoc = "";
		var units = "F";
		var curWind = 0;
		var curCtry = "";
 
		// Initialize the weather reading
		getLocation();

		// Get the users location using navigator.geolocation
		function getLocation() {navigator.geolocation.getCurrentPosition(success, error);
		}

		// Update lat and lon with the new position
		function success(position) {
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				updateWeather();
		}

		// If navigator.geolocation fails show an error message
		function error() {
				$(".errorMsg").text("Unable to retrieve location! Please try again!");
		}

		// Gets the weather from the openweathermap api
		function updateWeather() {
				$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric", function(result) {
						curWeather = result.weather[0].main;
						iconID = result.weather[0].icon;
						curLoc = result.name;
						tempC = result.main.temp;
						curWind = result.wind.speed;
						curCtry = result.sys.country;
						//Convert to Kelvin
						tempK = (tempC + 273.15).toFixed(2);
						//Convert to Fahrenheit
						tempF = (tempC * 1.8 + 32).toFixed(2);

						//Display the weather
						displayWeather();
				});
		}

		// Display the weather
		function displayWeather() {
		 	$(".weather").text(curWeather);
	   	    $(".desc").text(curLoc);
			var icon = "<img src='http://openweathermap.org/img/w/"+ iconID +".png'>"
			$(".image").html(icon)
			$('.wind').html("Wind " + curWind +"mph");
			$(".more").html(curCtry);
			// set background image based on temp
			if (tempF < 50.00) {
				// winter
				$('body').css('background-image', 'url(http://i.imgur.com/Ae63hps.jpg)');
			} else if (tempF < 70) {
				// Fall
				$('body').css('background-image', 'url(http://i.imgur.com/8MmQP7m.jpg)');
			} else if (tempF < 80) {
				// Spring
				$('body').css('background-image', 'url(http://i.imgur.com/u2tv52f.jpg)');
			} else {
				// default Summer
				$('body').css('background-image', 'url(http://i.imgur.com/acRhCoC.jpg)');
			}

			if (units === "C") {
					$(".tempReading").text(tempC + "°" + units);
			} else if (units === "Kelvin") {
					$(".tempReading").text(tempK + " " + units);
			} else {
					$(".tempReading").text(tempF + "°" + units);
			}
		}


		// Celsius button click
		$(".cBtn").on("click", function() {
				// Set active button to Celsius 
				$(".fBtn").removeClass("active");
				$(".kBtn").removeClass("active");
				$(".cBtn").addClass("active");
				units = "C";
				// Display the new reading
				displayWeather();
		});

		// Fahrenheit button click
		$(".fBtn").on("click", function() {
				// Set active button to Fahrenheit
				$(".cBtn").removeClass("active");
				$(".kBtn").removeClass("active");
				$(".fBtn").addClass("active");
				units = "F";
				// Display the new reading
				displayWeather();
		});

		// Kelvin button click
		$(".kBtn").on("click", function() {
				// Set active button to Kelvin
				$(".fBtn").removeClass("active");
				$(".cBtn").removeClass("active");
				$(".kBtn").addClass("active");
				units = "Kelvin";
				//Display new reading
				displayWeather();
		});

		// Refresh the current weather
		$(".refreshBtn").on("click", function() {
				//Change button disable
				$(".fBtn").addClass("active");
				$(".kBtn").removeClass("active");
				$(".cBtn").removeClass("active");

				units = "F";
				getLocation();
				updateWeather();
		});
});