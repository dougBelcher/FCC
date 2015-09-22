$.getJSON("http://ip-api.com/json/?callback=?", function(result) {
  console.log(result)
  $('#city').html(result.city);
  $("#state").html(result.region);
  $('#zipcode').html(result.zip);
 var latitude = result.lat, longitude = result.lon; $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +"&units=imperial", function(result){
   $('#wind').html("Wind speed is " + result.wind.speed +"MPH");
             $('#sky').html(result.weather[0].description);
             var h = "<img src='http://openweathermap.org/img/w/"+ result.weather[0].icon +".png'>"
            $("#skyImage").html(h)
 $("#temp").html(result.main.temp +"F")
   
 });
                  
        });