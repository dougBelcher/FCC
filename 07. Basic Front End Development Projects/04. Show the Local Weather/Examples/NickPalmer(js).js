$(document).ready(function() {
		//Default values for parameters
		var lat = 0;
		var lon = 0;
		var iconID = "";
		var currentWeather = "";
		var currentLocation = "";
		var temperatureF = 0;
		var temperatureC = 0;
		var temperatureK = 0;
		var units = "C";

		//If geolocation is not supported then show an error
		if (!navigator.geolocation) {
				console.log("Error: Geolocation not supported!");
				$(".errorMsg").text("Geolocation is not supported in your browser. Please update to the latest version for support!");
				$(".weather").text("");
				$(".description").text("");
				$(".temp").text("");
		} else {
				//Initialize the weather reading
				getLocation();
		}

		//Get the users location using navigator.geolocation
		function getLocation() {
				console.log("attempt");
				navigator.geolocation.getCurrentPosition(success, error);
		}

		//Update lat and lon with the new position
		function success(position) {
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				console.log("Lat: " + lat);
				console.log("Lon: " + lon);
				updateWeather();
		}

		//If navigator.geolocation fails show an error message
		function error() {
				console.log("Error: Unable to retrieve location! Please try again!");
				$(".errorMsg").text("Unable to retrieve location! Please try again!");
				$(".weather").text("");
				$(".description").text("");
				$(".tempReading").text("");
		}

		//Gets the weather from the openweathermap api
		function updateWeather() {
				$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric", function(result) {
						//Log the JSON response
						console.log(result);

						//Title case the responses for formatting purposes 
						currentWeather = titleCase(result.weather[0].main);
						iconID = result.weather[0].icon;
						currentLocation = titleCase(result.name);
						temperatureC = result.main.temp;
						//Convert to Kelvin for Science!
						temperatureK = (temperatureC + 273.15).toFixed(2);
						//Convert to farenheight
						temperatureF = (temperatureC * 1.8 + 32).toFixed(2);

						//Display the weather
						displayWeather();
				});
		}

		//Display the weather in the DOM
		function displayWeather() {
				$(".weather").text(currentWeather);
				$(".description").text(currentLocation);
				console.log("Icon ID: " + iconID);
				$(".icon").attr("href", "nick-palmer-design.com/media/images/icons/Weather128/" + iconID);
				if (units === "C") {
						$(".tempReading").text(temperatureC + "°" + units);
				} else if (units === "Kelvin") {
						$(".tempReading").text(temperatureK + " " + units);
				} else {
						$(".tempReading").text(temperatureF + "°" + units);
				}
		}

		//Puts Things In Title Case
		function titleCase(str) {
				var final = '';
				str = str.toLowerCase();
				var arr1 = str.split(' ');
				for (var x in arr1) {
						var arr2 = arr1[x].split('');
						arr2[0] = arr2[0].toUpperCase();
						var fin = arr2.join('');
						final += fin + ' ';
						console.log(final);
				}
				final = final.trim();
				return final;
		}

		//Convert the temperature to farenheight when the farenheight button is pressed
		$(".celciusBtn").on("click", function() {
				//Change button disable
				$(".farenheightBtn").removeClass("active");
				$(".kelvinBtn").removeClass("active");
				$(".celciusBtn").addClass("active");
				units = "C";

				//Display the new reading
				displayWeather();
		});

		//Convert the temperature to Celsius when the Celsius button is pressed
		$(".farenheightBtn").on("click", function() {
				//Change button disable
				$(".celciusBtn").removeClass("active");
				$(".kelvinBtn").removeClass("active");
				$(".farenheightBtn").addClass("active");
				units = "F";

				//Display the new reading
				displayWeather();
		});

		//Convert the temperature to Kelvin, for science, when the Kelvin button is pressed
		$(".kelvinBtn").on("click", function() {
				//Change the button disable
				$(".farenheightBtn").removeClass("active");
				$(".celciusBtn").removeClass("active");
				$(".kelvinBtn").addClass("active");
				units = "Kelvin";

				//Display new reading
				displayWeather();
		});

		//Refresh the current weather reading
		$(".refreshBtn").on("click", function() {
				//Change button disable
				$(".farenheightBtn").removeClass("active");
				$(".kelvinBtn").removeClass("active");
				$(".celciusBtn").addClass("active");

				units = "C";
				getLocation();
				updateWeather();
		});
});