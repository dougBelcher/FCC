Extracting data elements   
   // Name of nearest area :
    nearest_area    =r.data.nearest_area[0].region[0].value;
    
    // Name of country :
    country         =r.data.nearest_area[0].country[0].value;
    
    // Current temperature in fahrenheit and celsius:
    current_temp_F  =r.data.current_condition[0].temp_F;
    current_temp_C  =r.data.current_condition[0].temp_C;
    
    // A short description of current  weather conditions:
    current_condition=r.data.current_condition[0].weatherDesc[0].value;
    
    // Max/Min temperature in fahrenheit
    max_temp_F      =r.data.weather[0].tempMaxF;
    min_temp_F      =r.data.weather[0].tempMinF;
    
    // Max/min temperature in celsius:
    max_temp_C      =r.data.weather[0].tempMaxC;
    min_temp_C      =r.data.weather[0].tempMinC;
    
    //Humidity in %
    humidity        =r.data.current_condition[0].humidity;
    
    // Precipitation in mm :
    precipitation   =r.data.current_condition[0].precipMM;
    
    // Pressure in millibars:
    pressure        =r.data.current_condition[0].pressure;
    
    // Wind speed in kmph
    wind_speed_kmph =r.data.current_condition[0].windspeedKmph;
    
    // Wind speed in mph
    wind_speed_mph  =r.data.current_condition[0].windspeedMiles;
    
    // Wind direction degree (0 degree corresponds with North)
    wind_dir        =r.data.current_condition[0].winddirDegree;
	
_______________________________________________________________________
Error handling
_______________________________________________________________________
// if location is invalid :
{ "data": { "error": [ {"msg": "Unable to find any matching weather location to the query submitted!" } ] }}

// if API key is invalid :
{ "data": { "error": [ {"msg": "User account does not exist. Please go to http:\/\/www.worldweatheronline.com\/register.aspx and register for an API Key or contact support team at info@worldweatheronline.com" } ] }}


_______________________________________________________________________
More error handling
_______________________________________________________________________
jQuery.get(uri,function(r){

 if(r.data.error) {

  // error exists, so display it
  alert(r.data.error[0].msg);

  } else {

   // no error
   // do normal stuff

 }//end if

},"jsonp"); // end jQuery.get()

_______________________________________________________________________
script
_______________________________________________________________________
// options :
var my_city="Saint Louis,MO";
var my_key="3a62eb3877cda242635f76d97274c";
var no_of_days=2;
// build URI:
var uri="http://free.worldweatheronline.com/feed/weather.ashx?q="+my_city+"&key="+my_key+"&format=json&no_of_days="+no_of_days+"&includeLocation=yes";
// uri-encode it to prevent errors :
uri=encodeURI(uri); 
console.log(uri);
jQuery.get(uri,function(r){},"json");