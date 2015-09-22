// Change base on location
$(document).ready(function() {
  $.simpleWeather({
    woeid: '2357536', //2357536
    location: '',
    unit: 'f',
    success: function(weather) {
      if(weather.temp > 75) {
        $('body').animate({backgroundColor: '#F7AC57'}, 1500);
      } else {
        $('body').animate({backgroundColor: '#0091c2'}, 1500);
      }
      html = '<h1 class="icon-'+weather.code+'"></h1>';
      html += '<h2>'+weather.temp+'&deg;</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li></ul>';
      //html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
      
      var timestamp = moment(weather.updated);
      html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
________________________________________________________________________
Geolocation
________________________________________________________________________
// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
$(document).ready(function() {
  loadWeather('Seattle',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
________________________________________________________________________
Data dump
________________________________________________________________________
// Docs at http://simpleweatherjs.com
$(function() {
  $.simpleWeather({
    location: 'Austin, Texas',
    unit: 'f',
    success: function(weather) {
      html = '<p>weather.title: '+weather.title+'</p>';
      html += '<p>weather.temp: '+weather.temp+'</p>';
      html += '<p>weather.code: '+weather.code+'</p>';
      html += '<p>weather.todayCode: '+weather.todayCode+'</p>';
      html += '<p>weather.currently: '+weather.currently+'</p>';
      html += '<p>weather.high: '+weather.high+'</p>';
      html += '<p>weather.low: '+weather.low+'</p>';
      html += '<p>weather.text: '+weather.text+'</p>';
      html += '<p>weather.humidity: '+weather.humidity+'</p>';
      html += '<p>weather.pressure: '+weather.pressure+'</p>';
      html += '<p>weather.rising: '+weather.rising+'</p>';
      html += '<p>weather.visbility: '+weather.visibility+'</p>';
      html += '<p>weather.sunrise: '+weather.sunrise+'</p>';
      html += '<p>weather.sunset: '+weather.sunset+'</p>';
      html += '<p>weather.city: '+weather.city+'</p>';
      html += '<p>weather.country: '+weather.country+'</p>';
      html += '<p>weather.region: '+weather.region+'</p>';
      html += '<p>weather.updated: '+weather.updated+'</p>';
      html += '<p>weather.link: '+weather.link+'</p>';
      html += '<p>weather.heatindex: '+weather.heatindex+'</p>';
      html += '<p>weather.thumbnail: '+weather.thumbnail+'</p>';
      html += '<p>weather.image: '+weather.image+'</p>';

      html += '<p>weather.units.temp: '+weather.units.temp+'</p>';
      html += '<p>weather.units.distance: '+weather.units.distance+'</p>';
      html += '<p>weather.units.pressure: '+weather.units.pressure+'</p>';
      html += '<p>weather.units.speed: '+weather.units.speed+'</p>';

      html += '<p>weather.wind.chill: '+weather.wind.chill+'</p>';
      html += '<p>weather.wind.direction: '+weather.wind.direction+'</p>';
      html += '<p>weather.wind.speed: '+weather.wind.speed+'</p>';

      html += '<p>weather.alt.temp: '+weather.alt.temp+'</p>';
      html += '<p>weather.alt.high: '+weather.alt.high+'</p>';
      html += '<p>weather.alt.low: '+weather.alt.low+'</p>';
      html += '<p>weather.alt.unit: '+weather.alt.unit+'</p>';

      for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>weather.forecast['+i+'].date: '+weather.forecast[i].date+'</p>';
        html += '<p>weather.forecast['+i+'].day: '+weather.forecast[i].day+'</p>';
        html += '<p>weather.forecast['+i+'].code: '+weather.forecast[i].code+'</p>';
        html += '<p>weather.forecast['+i+'].high: '+weather.forecast[i].high+'</p>';
        html += '<p>weather.forecast['+i+'].low: '+weather.forecast[i].low+'</p>';
        html += '<p>weather.forecast['+i+'].alt.high: '+weather.forecast[i].alt.high+'</p>';
        html += '<p>weather.forecast['+i+'].alt.low: '+weather.forecast[i].alt.low+'</p>';
        html += '<p>weather.forecast['+i+'].thumbnail: '+weather.forecast[i].thumbnail+'</p>';
        html += '<p>weather.forecast['+i+'].image: '+weather.forecast[i].image+'</p>';
        html += '<p>weather.forecast['+i+'].text: '+weather.forecast[i].text+'</p>';
      }

      html += '<p>weather.description: '+weather.description+'</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error.message+'</p>');
    }
  });
});
